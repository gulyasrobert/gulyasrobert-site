import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { newsletterSchema } from "@/lib/validators";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = newsletterSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { success: false, message: "Invalid input." },
        { status: 400 }
      );
    }

    const { email, name, locale } = result.data;

    if (!supabase) {
      // Dev mode without Supabase: just log
      console.log("Newsletter signup (no Supabase):", { email, name, locale });
      return NextResponse.json({
        success: true,
        message: "Subscribed (dev mode).",
      });
    }

    const { error } = await supabase.from("subscribers").insert({
      email: email.toLowerCase().trim(),
      name: name?.trim() || null,
      locale: locale || "hu",
      gdpr_consent: true,
      gdpr_consent_at: new Date().toISOString(),
    });

    // Handle duplicate email gracefully (don't reveal if email exists)
    if (error && error.code !== "23505") {
      console.error("Supabase insert error:", error);
      return NextResponse.json(
        { success: false, message: "Server error." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, message: "Subscribed." });
  } catch {
    return NextResponse.json(
      { success: false, message: "Server error." },
      { status: 500 }
    );
  }
}

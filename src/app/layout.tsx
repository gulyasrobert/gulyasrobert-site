// Root layout - delegates to [locale]/layout.tsx for actual rendering
// This file is required by Next.js but content is handled by the locale layout
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

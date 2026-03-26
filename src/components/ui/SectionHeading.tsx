interface SectionHeadingProps {
  children: React.ReactNode;
  light?: boolean;
}

export default function SectionHeading({
  children,
  light,
}: SectionHeadingProps) {
  return (
    <div className="mb-12 text-center">
      <h2
        className={`text-3xl font-bold tracking-tight sm:text-4xl ${
          light ? "text-white" : "text-gray-900"
        }`}
      >
        {children}
      </h2>
      <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-accent" />
    </div>
  );
}

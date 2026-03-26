interface TimelineItemProps {
  company: string;
  role: string;
  period: string;
  description: string;
  isLast?: boolean;
}

export default function TimelineItem({
  company,
  role,
  period,
  description,
  isLast,
}: TimelineItemProps) {
  return (
    <div className="relative pl-8">
      {/* Line */}
      {!isLast && (
        <div className="absolute left-[7px] top-4 h-full w-px bg-gray-300" />
      )}
      {/* Dot */}
      <div className="absolute left-0 top-1.5 h-[15px] w-[15px] rounded-full border-[3px] border-accent bg-white" />

      <div className="pb-10">
        <p className="text-sm font-medium text-accent">{period}</p>
        <h3 className="mt-1 text-lg font-bold text-gray-900">{role}</h3>
        <p className="text-sm font-semibold text-gray-500">{company}</p>
        <p className="mt-2 text-gray-700 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

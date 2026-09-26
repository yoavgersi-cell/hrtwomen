import Link from "next/link";
import type { Expert } from "@/lib/config";

function initials(name: string) {
  const words = name.replace(/^The\s+/i, "").split(/\s+/).filter(Boolean);
  const letters = words.length >= 2 ? words[0][0] + words[words.length - 1][0] : (words[0]?.slice(0, 2) ?? "");
  return letters.toUpperCase();
}

// Inline credibility byline: [avatar] Written by <Name>.
// `label` sets the framing ("Written by", "Reviewed by"). Role suffix is off by
// default (set showRole to re-enable the trailing "· <role>").
export function ExpertByline({
  expert,
  label = "Written by",
  href = "/about",
  showRole = false,
  compact = false,
}: {
  expert: Expert;
  label?: string;
  href?: string;
  showRole?: boolean;
  /** Smaller avatar + text for a lower-weight metadata line. */
  compact?: boolean;
}) {
  const credit = expert.credentials ? `${expert.name}, ${expert.credentials}` : expert.name;

  return (
    <Link href={href} className={`group inline-flex items-center ${compact ? "gap-2" : "gap-2.5"}`}>
      <span
        className={`flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#C2366E]/10 font-bold text-[#A8285E] ${
          compact ? "h-7 w-7 text-[11px]" : "h-9 w-9 text-[12px]"
        }`}
      >
        {expert.avatar ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={expert.avatar} alt={expert.name} className="h-full w-full object-cover" loading="lazy" decoding="async" />
        ) : (
          initials(expert.name)
        )}
      </span>
      <span className={`leading-tight text-gray-400 ${compact ? "text-[13px]" : "text-[14px]"}`}>
        {label}{" "}
        <span className="font-bold text-[#191919] group-hover:text-[#A8285E]">{credit}</span>
        {showRole && <span className="ml-1 font-medium text-gray-400">· {expert.role}</span>}
      </span>
    </Link>
  );
}

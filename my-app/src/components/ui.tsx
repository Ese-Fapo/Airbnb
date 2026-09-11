import type { ReactNode } from "react";
import { ArrowRight, Ban, Check, ChevronRight, Heart, Images, ShieldCheck, Sparkles, Moon } from "lucide-react";

export function Card({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-lg border border-[#e5e7df] bg-white p-4 shadow-sm sm:p-5 md:p-6">
      {children}
    </div>
  );
}

export function IconBox({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#ecf3f2] text-[#123c3c] sm:h-11 sm:w-11">
      {children}
    </div>
  );
}

export function QuickAction({
  icon,
  title,
  description,
  onClick,
}: {
  icon: ReactNode;
  title: string;
  description: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="group flex min-h-[5.625rem] min-w-0 flex-col items-center justify-center rounded-lg px-2 py-3 transition hover:-translate-y-0.5 hover:bg-[#fff0f3] active:scale-95 md:min-h-[6.25rem]"
    >
      <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-[#fff0f3] text-[#ff385c] shadow-sm ring-1 ring-[#ffd4dc] transition group-hover:bg-[#ff385c] group-hover:text-white">
        {icon}
      </div>
      <span className="text-center text-[12px] font-bold leading-4 text-[#17201c]">{title}</span>
      <span className="mt-0.5 text-center text-[10px] font-medium leading-3 text-[#68716c]">
        {description}
      </span>
    </button>
  );
}

export function PropertyCard({
  image,
  title,
  onClick,
  actionLabel = "View photos",
}: {
  image: string;
  title: string;
  onClick?: () => void;
  actionLabel?: string;
}) {
  const content = (
    <>
      <div className="relative">
        <img src={image} alt={title} className="h-[9.375rem] w-full object-cover" />
        {onClick && (
          <div className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-lg bg-white/90 text-[#ff385c] shadow-sm backdrop-blur">
            <Images size={18} />
          </div>
        )}
      </div>
      <div className="p-4">
        <p className="font-semibold">{title}</p>
        {onClick && <p className="mt-1 text-xs font-medium text-[#68716c]">{actionLabel}</p>}
      </div>
    </>
  );

  if (onClick) {
    return (
      <button
        type="button"
        onClick={onClick}
        className="group w-full overflow-hidden rounded-lg border border-[#e5e7df] bg-white text-left shadow-sm transition hover:-translate-y-0.5 hover:border-[#ffd0d9] hover:shadow-md active:scale-[0.99]"
      >
        {content}
      </button>
    );
  }

  return (
    <div className="overflow-hidden rounded-lg border border-[#e5e7df] bg-white shadow-sm">
      {content}
    </div>
  );
}

export function GuideRow({
  icon,
  title,
  description,
  onClick,
}: {
  icon: ReactNode;
  title: string;
  description: string;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="group flex w-full min-w-0 items-center gap-3 rounded-lg border border-[#e5e7df] bg-white p-4 text-left shadow-sm transition hover:-translate-y-0.5 hover:border-[#ffd0d9] hover:bg-[#fffafa] hover:shadow-md active:scale-[0.99] sm:gap-4 md:p-5"
    >
      <IconBox>{icon}</IconBox>
      <div className="min-w-0 flex-1">
        <h3 className="text-sm font-semibold">{title}</h3>
        <p className="mt-1 text-xs text-gray-500">{description}</p>
      </div>
      <ChevronRight size={18} className="text-gray-400 transition group-hover:translate-x-0.5 group-hover:text-[#ff385c]" />
    </button>
  );
}

export function RuleRow({
  icon: _icon,
  title,
  description,
}: {
  icon: ReactNode;
  title: string;
  description: string;
}) {
  const iconMap: Record<string, ReactNode> = {
    "No Smoking": <Ban size={20} />,
    "No Parties": <ShieldCheck size={20} />,
    "Quiet Hours": <Moon size={20} />,
    Pets: <Heart size={20} />,
    Respect: <Sparkles size={20} />,
  };
  const displayDescription = title === "Quiet Hours" ? "10 PM - 8 AM" : description;

  return (
    <div className="flex min-w-0 items-center gap-3 rounded-lg border border-[#e5e7df] bg-white p-4 shadow-sm transition hover:border-[#ffd0d9] sm:gap-4 md:p-5">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#fff0f3] text-[#ff385c]">
        {iconMap[title] ?? _icon}
      </div>
      <div className="min-w-0">
        <h3 className="text-sm font-semibold">{title}</h3>
        <p className="mt-1 text-xs text-gray-500">{displayDescription}</p>
      </div>
    </div>
  );
}

export function NearbyRow({
  icon,
  title,
  description,
  onClick,
}: {
  icon: ReactNode;
  title: string;
  description: string;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="group flex w-full min-w-0 items-center gap-3 rounded-lg border border-[#e5e7df] bg-white p-4 text-left shadow-sm transition hover:-translate-y-0.5 hover:border-[#ffd0d9] hover:bg-[#fffafa] hover:shadow-md active:scale-[0.99] sm:gap-4 md:p-5"
    >
      <IconBox>{icon}</IconBox>
      <div className="min-w-0 flex-1">
        <h3 className="text-sm font-semibold">{title}</h3>
        <p className="mt-1 text-xs text-gray-500">{description}</p>
      </div>
      <ArrowRight size={17} className="text-gray-400 transition group-hover:translate-x-0.5 group-hover:text-[#ff385c]" />
    </button>
  );
}

export function CheckRow({ text }: { text: string }) {
  return (
    <div className="flex min-w-0 items-center gap-3 rounded-lg border border-[#e5e7df] bg-white p-4 shadow-sm md:p-5">
      <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#fff0f3] text-[#ff385c]">
        <Check size={16} strokeWidth={3} />
      </div>
      <span className="min-w-0 text-sm leading-5">{text}</span>
    </div>
  );
}

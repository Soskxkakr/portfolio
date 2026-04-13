import Image from "next/image";

type Props = {
  name: string;
  link: string;
  size?: number;
  className?: string;
};

export default function TechIcon({
  name,
  link,
  size = 28,
  className = "",
}: Props) {
  return (
    <span
      className={`group relative inline-flex ${className}`}
      title={name}
    >
      <Image
        src={link}
        alt={name}
        width={size}
        height={size}
        unoptimized
        className="rounded-md opacity-90 transition group-hover:opacity-100 group-hover:scale-110"
      />
      <span className="pointer-events-none absolute -bottom-8 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-md bg-zinc-900 px-2 py-1 text-[10px] font-medium text-zinc-200 opacity-0 shadow-lg ring-1 ring-white/10 transition group-hover:opacity-100">
        {name}
      </span>
    </span>
  );
}

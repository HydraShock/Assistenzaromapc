type SectionTitleProps = {
  title: string;
  subtitle?: string;
  centered?: boolean;
  dark?: boolean;
};

export function SectionTitle({
  title,
  subtitle,
  centered = true,
  dark = false,
}: SectionTitleProps) {
  return (
    <header className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl text-left"}>
      <h2
        className={[
          "text-4xl font-bold leading-tight md:text-5xl",
          dark ? "text-white" : "text-[#171717]",
        ].join(" ")}
      >
        {title}
      </h2>
      {subtitle ? (
        <p className={["mt-5 text-lg leading-relaxed", dark ? "text-white/80" : "text-[#3b3b3b]"].join(" ")}>
          {subtitle}
        </p>
      ) : null}
    </header>
  );
}

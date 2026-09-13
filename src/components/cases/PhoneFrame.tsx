interface PhoneFrameProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

/** Moldura de celular para exibir prints de conversas. */
const PhoneFrame = ({ src, alt, className = "", priority = false }: PhoneFrameProps) => (
  <div
    className={`relative mx-auto w-full max-w-[280px] rounded-[2.25rem] border border-border bg-card p-2 shadow-lg ${className}`}
  >
    <div className="relative overflow-hidden rounded-[1.75rem] bg-muted">
      <span
        className="absolute left-1/2 top-2 z-10 h-1.5 w-16 -translate-x-1/2 rounded-full bg-foreground/20"
        aria-hidden="true"
      />
      <img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        className="block h-auto w-full"
      />
    </div>
  </div>
);

export default PhoneFrame;

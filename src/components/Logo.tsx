export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <img src="/solknlogo.png" className="w-8 h-8" alt="SOLKN Logo" />
      <span className="font-bold text-xl tracking-tight">SOLKN</span>
    </div>
  );
}

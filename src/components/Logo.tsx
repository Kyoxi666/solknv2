export function Logo({ className = "", theme }: { className?: string; theme?: 'light' | 'dark' }) {
  const isBlackText = className.includes('text-black') || theme === 'light';

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <img
        src="/solknlogo.png"
        className={`w-8 h-8 transition-all duration-300 ${
          isBlackText ? 'brightness-0' : 'brightness-0 invert'
        }`}
        alt="SOLKN Logo"
      />
      <span className="font-bold text-xl tracking-tight">SOLKN</span>
    </div>
  );
}

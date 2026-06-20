export function Logo({ small = false }: { small?: boolean }) {
  return (
    <div className="flex items-center gap-3" dir="ltr">
      <svg width={small ? 42 : 56} height={small ? 42 : 56} viewBox="0 0 64 64" fill="none" aria-hidden="true">
        <rect x="8" y="20" width="30" height="22" rx="4" stroke="#0B1D3A" strokeWidth="5" />
        <path d="M18 48H30" stroke="#0B1D3A" strokeWidth="5" strokeLinecap="round" />
        <path d="M24 42V48" stroke="#0B1D3A" strokeWidth="5" strokeLinecap="round" />
        <path d="M28 14H52C54.2 14 56 15.8 56 18V36C56 38.2 54.2 40 52 40H41" stroke="#126BFF" strokeWidth="5" strokeLinecap="round" />
        <circle cx="23" cy="31" r="5" fill="#126BFF" />
        <circle cx="40" cy="31" r="5" fill="#00C2FF" />
        <path d="M28 31H35" stroke="#126BFF" strokeWidth="5" strokeLinecap="round" />
      </svg>
      <span className={`${small ? "text-2xl" : "text-4xl"} font-black tracking-tight text-navy`}>LinkView</span>
    </div>
  );
}

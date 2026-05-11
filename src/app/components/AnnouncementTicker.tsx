import { Megaphone } from 'lucide-react';

const BRAND = '#6269C9';

const announcements = [
  '🎉 UPSC CSE 2025 Results: 48 Students Selected from Our Academy!',
  '📣 New Batch Starting June 2026 — UPSC Prelims & TNPSC Group I',
  '📚 Free Workshop: UPSC Strategy Session — Register Now',
  '🎓 TNPSC Group II Batch: Limited Seats Available — Enrol Today',
  '✅ Scholarship Test for TNPSC Aspirants — 50% to 80% Fee Waiver',
  '📖 Monthly Current Affairs Magazine — May 2026 Edition Released',
];

export function AnnouncementTicker() {
  const repeated = [...announcements, ...announcements];

  return (
    <div
      className="flex items-stretch overflow-hidden border-y border-white/10"
      style={{ backgroundColor: BRAND, fontFamily: "'Inter', sans-serif" }}
    >
      {/* Label pill */}
      <div
        className="flex items-center gap-2 px-5 py-3 text-white text-xs font-bold uppercase tracking-widest flex-shrink-0 border-r border-white/20"
        style={{ backgroundColor: '#5159b8' }}
      >
        <Megaphone size={15} />
        <span className="hidden sm:inline">Latest News</span>
      </div>

      {/* Scrolling track */}
      <div className="flex-1 overflow-hidden relative flex items-center">
        <div
          className="flex whitespace-nowrap gap-12 text-white text-sm font-medium"
          style={{
            animation: 'ticker-scroll 38s linear infinite',
          }}
        >
          {repeated.map((item, i) => (
            <span key={i} className="flex items-center gap-3">
              {item}
              <span className="text-white/30">|</span>
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes ticker-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}

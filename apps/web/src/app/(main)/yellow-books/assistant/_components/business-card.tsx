'use client';

import Link from 'next/link';

interface BusinessMatch {
  id: number;
  name: string;
  description: string | null;
  summary: string;
  category: string;
  district: string;
  score: number;
}

interface BusinessCardProps {
  business: BusinessMatch;
}

export default function BusinessCard({ business }: BusinessCardProps) {
  const relevancePercentage = Math.round(business.score * 100);

  // Determine border color based on relevance score for a subtle indicator
  const borderColor = relevancePercentage > 85 ? 'border-green-500' : 
                      relevancePercentage > 70 ? 'border-green-700' : 'border-green-900';

  return (
    <Link
      href={`/yellow-books/${business.id}`}
      className={`block bg-zinc-950 border ${borderColor} p-3 hover:bg-green-900/10 hover:translate-x-1 transition-all duration-200 group relative overflow-hidden`}
    >
      {/* Corner accents */}
      <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-green-500 opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-green-500 opacity-50"></div>

      <div className="flex items-start justify-between gap-4 relative z-10">
        <div className="flex-1 min-w-0">
          <div className="flex items-baseline gap-2 mb-1">
            <h4 className="font-bold text-base text-green-400 group-hover:text-green-300 truncate">
              {business.name.toUpperCase()}
            </h4>
            <span className="text-[10px] text-green-800 border border-green-900 px-1 uppercase shrink-0">
              ID:{business.id.toString().padStart(4, '0')}
            </span>
          </div>

          <div className="flex flex-wrap gap-x-4 gap-y-1 mb-2 text-xs font-mono text-green-600">
            <span>CAT: <span className="text-green-500">{business.category}</span></span>
            <span>LOC: <span className="text-green-500">{business.district}</span></span>
          </div>

          <p className="text-xs text-green-700/80 line-clamp-2 font-mono leading-relaxed">
            {business.description || business.summary}
          </p>
        </div>

        <div className="flex-shrink-0 flex flex-col items-end justify-between self-stretch">
          <div className="flex flex-col items-end">
            <span className="text-[10px] text-green-800 uppercase">MATCH</span>
            <span className="text-lg font-bold text-green-500 leading-none">
              {relevancePercentage}<span className="text-xs text-green-700">%</span>
            </span>
          </div>
          
          <div className="text-[10px] text-green-500 opacity-0 group-hover:opacity-100 transition-opacity uppercase">
            [ACCESS] &gt;
          </div>
        </div>
      </div>
    </Link>
  );
}

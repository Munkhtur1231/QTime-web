import { Suspense } from 'react';
import AiAssistant from './_components/ai-assistant';

export const metadata = {
  title: 'AI Assistant | Radnaa Directory',
  description: 'Find businesses in Ulaanbaatar with AI-powered search',
};

export default function AssistantPage() {
  return (
    <div className="min-h-screen bg-zinc-950 font-mono text-green-500 selection:bg-green-900 selection:text-green-100">
      {/* Scanline effect overlay */}
      <div className="pointer-events-none fixed inset-0 z-50 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] opacity-20" />

      <div className="max-w-5xl mx-auto px-4 py-8 relative z-10">
        <div className="mb-12 border-b-2 border-green-800 pb-6">
          <div className="flex items-center justify-between mb-2">
            <h1 className="text-4xl font-bold tracking-tighter uppercase glitch-text">
              <span className="text-green-400 mr-2">{'>'}</span>
              ШАР НОМ, ХИЙМЭЛ ОЮУН
            </h1>
            <div className="text-xs text-green-700 animate-pulse hidden sm:block">
              ИДЭВХТЭЙ ●
            </div>
          </div>
          <p className="text-lg text-green-700/80">
            [УЛААНБААТАРЫН ШАР НОМЫГ АЧААЛЛУУЛЖ БАЙНА...]
          </p>
        </div>

        <Suspense
          fallback={
            <div className="text-green-500 animate-pulse">УНШИЖ БАЙНА...</div>
          }
        >
          <AiAssistant />
        </Suspense>
      </div>
    </div>
  );
}

'use client';

import { useState, useRef, useEffect } from 'react';
import { FiSend } from 'react-icons/fi';
import BusinessCard from './business-card';

interface BusinessMatch {
  id: number;
  name: string;
  description: string | null;
  summary: string;
  category: string;
  district: string;
  score: number;
}

interface SearchResult {
  answer: string;
  businesses: BusinessMatch[];
  cached: boolean;
}

interface Message {
  id: string;
  type: 'user' | 'assistant';
  content: string;
  businesses?: BusinessMatch[];
  timestamp: Date;
}

const EXAMPLE_QUESTIONS = [
  'Хор тайлах спа, wellness төв хэрэгтэй байна, хаана очих вэ?',
  'Хамгийн сайн ресторан хаана байдаг вэ?',
  'Номын дэлгүүр эсвэл номын сантай газар олж өгөөч',
  'Хүүхдийн тоглоомын газар санал болгоно уу',
];

export default function AiAssistant() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [question, setQuestion] = useState('');
  const [city, setCity] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!question.trim()) {
      setError('INPUT_REQUIRED');
      return;
    }

    setError(null);
    setIsLoading(true);

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: question,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);

    try {
      const apiUrl = process.env.NEXT_PUBLIC_BASE_URL as string;
      console.log('API URL:', apiUrl);
      const response = await fetch(`${apiUrl}/businesses/search`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          question: question.trim(),
          city: city.trim() || undefined,
          topN: 5,
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('AI API error:', errorText);
        throw new Error(`Server responded with ${response.status}`);
      }

      const data = await response.json();
      const result: SearchResult = data.data;

      // Add assistant message
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'assistant',
        content: result.answer,
        businesses: result.businesses,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, assistantMessage]);

      // Clear input
      setQuestion('');
    } catch (err) {
      console.error('Search error:', err);
      setError('ХОЛБОЛТ ТАСАРЛАА');

      // Add error message
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'assistant',
        content: 'ХОЛБОЛТ ТАСАРЛАА. ДАХИН ОРОЛДОНО УУ',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleExampleClick = (exampleQuestion: string) => {
    setQuestion(exampleQuestion);
  };

  const clearChat = () => {
    setMessages([]);
    setQuestion('');
    setCity('');
    setError(null);
  };

  return (
    <div className="space-y-8">
      {/* Console Window */}
      <div className="bg-zinc-900 border border-green-800 shadow-[0_0_15px_rgba(0,255,0,0.1)] rounded-sm overflow-hidden min-h-[400px] flex flex-col">
        {/* Terminal Header */}
        <div className="bg-green-900/20 border-b border-green-800 p-2 flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-900 border border-red-700"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-900 border border-yellow-700"></div>
          <div className="w-3 h-3 rounded-full bg-green-900 border border-green-700"></div>
          <div className="ml-2 text-xs text-green-600 font-mono">
            user@yellow-books:~
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 p-6 font-mono text-sm sm:text-base overflow-y-auto max-h-[600px] scrollbar-thin scrollbar-thumb-green-900 scrollbar-track-zinc-900">
          {messages.length === 0 && (
            <div className="text-green-700/60 mb-8 space-y-2">
              <p>Манай Yellow Books платформд тавтай морил!</p>
              <p>Copyright (c) 2025 Radnaa Directory.</p>
              <p className="mb-4">Та сонирхсон газраа хүссэнээр хайна уу.</p>

              <div className="mt-8">
                <p className="text-green-500 mb-2">
                  {'>'} Санал болгох асуултууд:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {EXAMPLE_QUESTIONS.map((example, index) => (
                    <button
                      key={index}
                      onClick={() => handleExampleClick(example)}
                      className="text-left px-3 py-2 border border-green-900 hover:bg-green-900/30 hover:border-green-500 text-green-400 text-xs sm:text-sm transition-all duration-150 group"
                    >
                      <span className="opacity-0 group-hover:opacity-100 mr-2">
                        {'>'}
                      </span>
                      {example}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Messages */}
          <div className="space-y-6">
            {messages.map((message) => (
              <div
                key={message.id}
                className="animate-in fade-in slide-in-from-bottom-2 duration-300"
              >
                {message.type === 'user' ? (
                  <div className="flex gap-3">
                    <span className="text-green-500 font-bold shrink-0">
                      {'>'}
                    </span>
                    <p className="text-green-100 whitespace-pre-wrap">
                      {message.content}
                    </p>
                  </div>
                ) : (
                  <div className="flex gap-3 mt-2">
                    <span className="text-yellow-500 font-bold shrink-0">
                      #
                    </span>
                    <div className="flex-1">
                      <p className="text-green-400 whitespace-pre-wrap leading-relaxed">
                        {message.content}
                      </p>

                      {message.businesses && message.businesses.length > 0 && (
                        <div className="mt-6 space-y-4 border-l-2 border-green-900/50 pl-4 py-2">
                          <p className="text-xs text-green-600 uppercase tracking-widest mb-2">
                            [ ҮР ДҮНГҮҮД: {message.businesses.length} ]
                          </p>
                          <div className="grid gap-4">
                            {message.businesses.map((business) => (
                              <BusinessCard
                                key={business.id}
                                business={business}
                              />
                            ))}
                          </div>
                        </div>
                      )}

                      <div className="mt-2 text-[10px] text-green-800 uppercase">
                        ЦАГ: {message.timestamp.toLocaleTimeString()}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}

            {isLoading && (
              <div className="flex gap-3">
                <span className="text-yellow-500 font-bold shrink-0">#</span>
                <div className="text-green-600 animate-pulse">
                  АЧААЛЛАЖ БАЙНА<span className="animate-ping">_</span>
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>
        </div>

        {/* Input Area */}
        <div className="p-4 bg-zinc-950 border-t border-green-900">
          <form onSubmit={handleSearch} className="flex flex-col gap-4">
            <div className="flex items-start gap-2">
              <span className="text-green-500 font-bold mt-2">$</span>
              <textarea
                id="question"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSearch(e);
                  }
                }}
                placeholder="Enter command..."
                className="w-full bg-transparent text-green-100 placeholder-green-900 focus:outline-none resize-none font-mono py-2"
                rows={2}
                disabled={isLoading}
                autoFocus
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between pl-6">
              <div className="flex items-center gap-2 text-green-700 group focus-within:text-green-500 transition-colors">
                <span className="text-xs uppercase">[ДҮҮРЭГ]</span>
                <input
                  id="city"
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="БҮГД"
                  className="bg-zinc-900 border border-green-900 focus:border-green-500 text-green-400 px-2 py-1 text-xs w-24 outline-none uppercase"
                  disabled={isLoading}
                />
              </div>

              <div className="flex gap-3">
                {messages.length > 0 && (
                  <button
                    type="button"
                    onClick={clearChat}
                    className="px-4 py-2 border border-red-900 text-red-900 hover:bg-red-900/20 hover:text-red-500 text-xs font-bold uppercase transition-all"
                  >
                    ЦЭВЭРЛЭХ
                  </button>
                )}

                <button
                  type="submit"
                  disabled={isLoading || !question.trim()}
                  className="px-6 py-2 bg-green-900/20 border border-green-700 text-green-500 hover:bg-green-500 hover:text-black hover:border-green-500 disabled:opacity-50 disabled:cursor-not-allowed text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 group"
                >
                  {isLoading ? 'АЧААЛЛАЖ БАЙНА...' : 'АЧААЛЛАХ'}
                  {!isLoading && (
                    <FiSend className="group-hover:translate-x-1 transition-transform" />
                  )}
                </button>
              </div>
            </div>

            {error && (
              <div className="text-red-500 text-xs font-mono mt-2 pl-6">
                [АЛДАА]: {error}
              </div>
            )}
          </form>
        </div>
      </div>

      <div className="text-center text-[10px] text-green-900 uppercase tracking-[0.2em]">
        Radnaa Directory Систем
      </div>
    </div>
  );
}

'use client';

import { useState } from 'react';

interface ApiResponse {
  success: boolean;
  data?: Record<string, unknown>;
  message?: string;
  error?: string;
}

export default function ReleaseKrakenButton() {
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState<ApiResponse | null>(null);

  const handleReleaseKraken = async () => {
    setIsLoading(true);
    setResponse(null);

    try {
      const res = await fetch('/api/kraken', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data: ApiResponse = await res.json();
      setResponse(data);
    } catch (error) {
      setResponse({
        success: false,
        error: error instanceof Error ? error.message : 'An error occurred',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <button
        onClick={handleReleaseKraken}
        disabled={isLoading}
        className="px-6 py-3 bg-primary text-foreground font-bold text-lg rounded-md hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? 'Releasing...' : 'Release the kraken'}
      </button>

      {response && (
        <div
          className={`p-4 rounded-md border ${
            response.success
              ? 'bg-green-50 border-green-200 text-green-800'
              : 'bg-red-50 border-red-200 text-red-800'
          }`}
        >
          {response.success ? (
            <div>
              <p className="font-semibold mb-2">Success!</p>
              {response.message && <p className="mb-2">{response.message}</p>}
              {response.data && (
                <pre className="text-sm bg-white p-2 rounded border overflow-auto">
                  {JSON.stringify(response.data, null, 2)}
                </pre>
              )}
            </div>
          ) : (
            <div>
              <p className="font-semibold">Error:</p>
              <p>{response.error || 'An error occurred'}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

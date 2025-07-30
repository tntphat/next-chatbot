import type { NextPage } from 'next';
import { useEffect, useState } from 'react';

const BrowserLibTest: NextPage = () => {
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simulate importing a browser-only library
    try {
      // This would fail on server side
      const mockBrowserLib = {
        init: () => {
          if (typeof window === 'undefined') {
            throw new Error('This library requires browser APIs');
          }
          return 'Browser library initialized';
        },
      };

      const result = mockBrowserLib.init();
      console.log(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err));
    }
  }, []);

  return (
    <div>
      <h1>Browser Library SSR Test</h1>
      <p>This simulates a library that would cause SSR errors.</p>
      {error && (
        <div style={{ color: 'red', padding: '10px', border: '1px solid red' }}>
          Error: {error}
        </div>
      )}
    </div>
  );
};

export default BrowserLibTest;

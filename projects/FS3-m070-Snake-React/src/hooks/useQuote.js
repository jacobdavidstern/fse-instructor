// src/hooks/useQuote.js

import { useState, useEffect } from 'react';

export default function useQuote() {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchQuote() {
      try {
        // works locally only on http, not https, fails on vercel
        //const res = await fetch('http://api.quotable.io/random');
        const res = await fetch('https://api.adviceslip.com/advice');
        const data = await res.json();
        // setQuote(data.content);
        setQuote(data.slip.advice);
      } catch (e) {
        console.error('Quote fetch failed:', e);
        setQuote('Press Start to Continue');
      } finally {
        setLoading(false);
      }
    }

    fetchQuote();
  }, []);

  return { quote, loading };
}

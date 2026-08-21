'use client';

import { useState } from 'react';

export default function WritingLab() {
  const [prompt, setPrompt] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = async (e) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setLoading(true);
    setResult('');

    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      });

      const data = await response.json();

      if (data.output) {
        setResult(data.output);
      } else {
        setResult('Error: ' + (data.error || 'Failed to generate response.'));
      }
    } catch (err) {
      setResult('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">Writing Lab</h1>
      <p className="text-gray-400 mb-6">Draft, rewrite, and improve your content with AI.</p>

      <form onSubmit={handleGenerate} className="space-y-4">
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Ask AI to write something..."
          rows={5}
          className="w-full p-4 rounded-xl bg-gray-900 border border-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-white"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 px-6 rounded-xl bg-white text-black font-semibold hover:bg-gray-200 transition disabled:opacity-50"
        >
          {loading ? 'Generating...' : 'Generate Content'}
        </button>
      </form>

      {result && (
        <div className="mt-8 p-6 rounded-xl bg-gray-900 border border-gray-800">
          <h2 className="text-lg font-semibold mb-3 text-gray-300">AI Response:</h2>
          <div className="whitespace-pre-wrap text-gray-200 leading-relaxed">{result}</div>
        </div>
      )}
    </div>
  );
}

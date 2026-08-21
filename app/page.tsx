import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white p-6 max-w-2xl mx-auto space-y-6">
      <div className="text-center my-8">
        <h1 className="text-4xl font-bold mb-2">AI Studio</h1>
        <p className="text-gray-400">Select a tool to get started:</p>
      </div>

      <div className="space-y-4">
        {/* Writing Lab Card */}
        <Link 
          href="/writing-lab" 
          className="block p-6 bg-gray-900 border border-gray-800 rounded-xl hover:border-white transition group"
        >
          <div className="w-10 h-10 bg-indigo-950/50 rounded-lg flex items-center justify-center mb-4 text-indigo-400 font-bold">
            Aa
          </div>
          <h3 className="text-xl font-bold mb-2">Writing Lab</h3>
          <p className="text-gray-400 text-sm mb-4">
            Draft, rewrite, summarize, and improve content in seconds.
          </p>
          <span className="text-sm font-semibold text-white flex items-center gap-1 group-hover:underline">
            Open tool &rarr;
          </span>
        </Link>
      </div>
    </div>
  );
}

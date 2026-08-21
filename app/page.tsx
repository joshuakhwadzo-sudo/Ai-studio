import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white p-6 max-w-2xl mx-auto text-center">
      <h1 className="text-4xl font-bold mb-4">AI Studio</h1>
      <p className="text-gray-400 mb-8">Select a tool to get started:</p>
      
      <div className="space-y-4">
        <Link 
          href="/writing-lab" 
          className="block p-6 bg-gray-900 border border-gray-800 rounded-xl hover:border-white transition"
        >
          <h2 className="text-xl font-bold mb-1">Writing Lab</h2>
          <p className="text-sm text-gray-400">Draft, rewrite, and improve content with AI.</p>
        </Link>
      </div>
    </div>
  );
}

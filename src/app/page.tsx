import Link from 'next/link';

export default function Home() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to Talex</h1>
      <p className="mb-8">Discover and share amazing talents!</p>
      <div className="space-x-4">
        <Link href="/talents" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Explore Talents
        </Link>
        <Link href="/register" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
          Join Talex
        </Link>
      </div>
    </div>
  );
}
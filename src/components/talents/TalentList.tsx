import Link from 'next/link';

interface Talent {
  id: number;
  title: string;
  description: string;
  user: {
    username: string;
  };
  category: {
    name: string;
  };
}

interface TalentListProps {
  talents: Talent[] | null;
  isLoading: boolean;
  error: string | null;
}

export default function TalentList({ talents, isLoading, error }: TalentListProps) {
  if (isLoading) return <div>Loading talents...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!talents || talents.length === 0) return <div>No talents found.</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {talents.map((talent) => (
        <div key={talent.id} className="border rounded-lg p-4 shadow-md">
          <h2 className="text-xl font-bold mb-2">{talent.title}</h2>
          <p className="text-gray-600 mb-2">By {talent.user.username}</p>
          <p className="mb-2">{talent.description.substring(0, 100)}...</p>
          <p className="text-sm text-gray-500 mb-4">Category: {talent.category.name}</p>
          <Link href={`/talents/${talent.id}`} className="text-blue-500 hover:underline">
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
}
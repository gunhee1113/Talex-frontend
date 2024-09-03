import Link from 'next/link';

interface TalentCardProps {
  talent: {
    id: number;
    title: string;
    description: string;
    user: {
      username: string;
    };
  };
}

export default function TalentCard({ talent }: TalentCardProps) {
    return (
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-2">{talent.title}</h2>
          <p className="text-gray-600 mb-4">{talent.description.substring(0, 100)}...</p>
          <p className="text-sm text-gray-500 mb-4">By {talent.user.username}</p>
          <Link href={`/talents/${talent.id}`} className="btn-primary">
            View Details
          </Link>
        </div>
      </div>
    );
  }
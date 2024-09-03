import { fetchAPI } from '@/lib/api';

export default async function TalentPage({ params }: { params: { id: string } }) {
  const talent = await fetchAPI(`/talents/${params.id}/`);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">{talent.title}</h1>
      <p className="text-gray-600 mb-2">By {talent.user.username}</p>
      <p className="mb-4">{talent.description}</p>
      <p className="text-sm text-gray-500">Category: {talent.category.name}</p>
      <h2 className="text-2xl font-bold mt-8 mb-4">Content</h2>
      {talent.contents.map((content: any) => (
        <div key={content.id} className="mb-4">
          <p>{content.description}</p>
          <p className="text-sm text-gray-500">Type: {content.content_type}</p>
        </div>
      ))}
    </div>
  );
}
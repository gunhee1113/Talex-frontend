'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { getUserProfile, getUserTalents } from '@/lib/api';
import TalentList from '@/components/talents/TalentList';
import { useParams } from 'next/navigation';

export default function ProfilePage() {
  const { user } = useAuth();
  const params = useParams();
  const userId = params.id as string;

  const [profile, setProfile] = useState(null);
  const [talents, setTalents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProfileData() {
      try {
        const profileResponse = await getUserProfile();
        setProfile(profileResponse.data);
        const talentsResponse = await getUserTalents(userId);
        setTalents(talentsResponse.data);
      } catch (e) {
        setError(e instanceof Error ? e.message : 'An unknown error occurred');
      } finally {
        setIsLoading(false);
      }
    }
    fetchProfileData();
  }, [userId]);

  if (isLoading) return <div>Loading profile...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!profile) return <div>Profile not found.</div>;

  const isOwnProfile = user && user.id === profile.id;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">{isOwnProfile ? 'Your Profile' : `${profile.username}'s Profile`}</h1>
      <div className="mb-8">
        <p><strong>Username:</strong> {profile.username}</p>
        {isOwnProfile && <p><strong>Email:</strong> {profile.email}</p>}
        {/* Add more profile fields as needed */}
      </div>
      {isOwnProfile && (
        <button className="bg-blue-500 text-white px-4 py-2 rounded mb-4">Edit Profile</button>
      )}
      <h2 className="text-2xl font-bold mb-4">
        {isOwnProfile ? 'Your Talents' : `${profile.username}'s Talents`}
      </h2>
      <TalentList talents={talents} isLoading={false} error={null} />
    </div>
  );
}
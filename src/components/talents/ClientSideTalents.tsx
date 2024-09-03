'use client';

import { useState, useEffect } from 'react';
import { getTalents } from '@/lib/api';
import TalentList from './TalentList';

export default function ClientSideTalents() {
  const [talents, setTalents] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchTalents() {
      try {
        const response = await getTalents();
        setTalents(response.data);
      } catch (e) {
        setError(e instanceof Error ? e.message : 'An unknown error occurred');
      } finally {
        setIsLoading(false);
      }
    }

    fetchTalents();
  }, []);

  return <TalentList talents={talents} isLoading={isLoading} error={error} />;
}
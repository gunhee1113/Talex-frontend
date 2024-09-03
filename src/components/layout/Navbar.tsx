'use client';

import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Talex
        </Link>
        <div className="space-x-4">
          <Link href="/talents" className="hover:text-gray-300">Talents</Link>
          {user ? (
            <>
              <Link href="/create-talent" className="hover:text-gray-300">Create Talent</Link>
              <Link href={`/profile/${user.id}`} className="hover:text-gray-300">Profile</Link>
              <button onClick={logout} className="hover:text-gray-300">Logout</button>
            </>
          ) : (
            <>
              <Link href="/login" className="hover:text-gray-300">Login</Link>
              <Link href="/register" className="hover:text-gray-300">Register</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
'use client';
import { useSession } from 'next-auth/react';

const ProfilePage = () => {
  const { data: session } = useSession();

  if (!session) return <p>Please login to view your profile.</p>;

  return (
    <div>
      <h1>Profile</h1>
      <p>Name: {session.user?.name}</p>
      <p>Email: {session.user?.email}</p>
    </div>
  );
};

export default ProfilePage;

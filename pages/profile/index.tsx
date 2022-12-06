import React from 'react';
import Image from 'next/image';
import { useUser } from '@auth0/nextjs-auth0/client';
import { MainLayout } from '../../components/layouts/Main';
export default function Profile() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <MainLayout>
      {user && (
          <div>
            <img src={user.picture || ''} alt={user.name || ''} width={40} height={40} />
            <h2>{user.name}</h2>
            <p>{user.email}</p>
          </div>
      ) || null }
      </MainLayout>
  );
}
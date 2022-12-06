import React from 'react';
import Image from 'next/image';
import { useUser } from '@auth0/nextjs-auth0/client';
import { MainLayout } from '../../components/layouts/ProtectedMain';
import { useRouter } from 'next/router';
export default function Profile() {
  const { user, error, isLoading } = useUser();
  const router = useRouter();
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if(!user){
    router.push('/')
  }

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
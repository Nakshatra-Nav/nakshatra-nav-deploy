
"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { LoadingAnimation } from '@/components/layout/LoadingAnimation';
import { useLocalUser } from '@/hooks/useLocalUser';

export default function RootEntryPoint() {
  const router = useRouter();
  const { userData, loading } = useLocalUser();

  useEffect(() => {
    if (!loading) {
      if (userData) {
        router.replace('/dashboard');
      } else {
        // This case should ideally not be hit if the provider creates a default user.
        // But as a fallback, we could redirect to a setup page or dashboard.
        router.replace('/dashboard');
      }
    }
  }, [loading, userData, router]);

  return <LoadingAnimation />;
}

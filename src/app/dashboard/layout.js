'use client'

import { DashboardLayout, Spinner } from '@/components/atoms';
import { Fragment } from 'react';
import { useAuthUser } from '@/lib/auth';
import { useRouter } from 'next/navigation';

export default function Layout({ children }) {
  const {isAuthenticated,isLoading} = useAuthUser()

  const router = useRouter()

  if(isLoading)return <Spinner isVerticallyCenter={true} />
  
  if(!isAuthenticated) return router.push("/login")

  return (
    <Fragment>
      <DashboardLayout>
          {children}
      </DashboardLayout>
    </Fragment> 
  )
}

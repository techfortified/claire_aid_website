import { MainNavBar } from '@/components/atoms';
import { Fragment } from 'react';

export const metadata = {
  title: 'Claire Aid Foundation',
  description: 'Helping people',
}

export default function RootLayout({ children }) {
  return (
    <Fragment>
      <MainNavBar />
      {children}
    </Fragment> 
  )
}

import { Fragment } from 'react';

export const metadata = {
  title: 'Volunteers - Dashboard - Claire Aid Foundation',
  description: 'Helping people',
}

export default function Layout({ children }) {
  return (
    <Fragment>
          {children}
    </Fragment> 
  )
}

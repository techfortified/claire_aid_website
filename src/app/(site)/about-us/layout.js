import { Fragment } from "react"

export const metadata = {
  title: 'About us - NGO',
  description: 'Helping people',
}

export default function AboutLayout({ children }) {
  return (
    <Fragment>
        {children}
    </Fragment>
  )
}



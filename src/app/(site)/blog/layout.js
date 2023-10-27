import { Fragment } from "react"

export const metadata = {
  title: 'Our Blog - NGO',
  description: 'Read more of our stories',
}

export default function BlogLayout({ children }) {
  return (
    <Fragment>
        {children}
    </Fragment>
  )
}



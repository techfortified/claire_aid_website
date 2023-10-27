import { Fragment } from "react"

export const metadata = {
    title: 'Volunnteers- NGO',
    description: 'Helping the society to grow',
  }
  
  export default function VolunteerLayout({ children }) {
    return (
      <Fragment>
          {children}
      </Fragment>
    )
  }
  
  
  
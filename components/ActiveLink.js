
import { withRouter } from 'next/router'

// typically you want to use `next/link` for this usecase
// but this example shows how you can also access the router
// using the withRouter utility.

const ActiveLink = ({ children, router, href }) => {
  const handleClick = e => {
    e.preventDefault()
    router.push(href)
  }

  return (
    <li className={router.pathname === href ? 'active' : ''}>
      <a href={href} onClick={handleClick}>
        {children}
      </a>
    </li>
  )
}

export default withRouter(ActiveLink)
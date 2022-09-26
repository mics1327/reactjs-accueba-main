import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function navbar() {
    return <nav className="nav">
        <Link to="/" className="site-title">Accueba</Link>
        <ul>
                <CustomLink to="/about">About</CustomLink> 
                <CustomLink to="/contact">Contact Us</CustomLink>
        </ul>
    </nav>
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  
    return (
      <li className={isActive ? "active" : ""}>
        <Link to={to} {...props}>
          {children}
        </Link>
      </li>
    )
  }
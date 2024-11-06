import { NavLink } from "react-router-dom";

export default function ErrorLayout() {
  return (
    <div>
      <h2>Page not found...</h2>
      <NavLink to={'/'}>Go home</NavLink>
    </div>
  )
}

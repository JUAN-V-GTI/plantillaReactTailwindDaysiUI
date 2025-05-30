import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          MiSitio
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li><Link to="/about">About</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
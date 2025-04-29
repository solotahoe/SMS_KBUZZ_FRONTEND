import { Link, NavLink } from "react-router-dom";

const navLinks = [
  { path: "/home/dashboard", label: "Dashboard" },
  { path: "/home/profile", label: "Profile" },
  { path: "/home/users", label: "Users" },
  { path: "/home/plans", label: "Plans" },
  { path: "/", label: "Logout" },
];

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white py-4 px-8 flex items-center justify-between">
      <div className="text-2xl font-bold">
        <Link to="/">Subscription App</Link>
      </div>
      <div className="flex space-x-6">
        {navLinks.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              isActive ? "text-yellow-300 font-semibold" : "hover:text-yellow-300"
            }
          >
            {link.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;

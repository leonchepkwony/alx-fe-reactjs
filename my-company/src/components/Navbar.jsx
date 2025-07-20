import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        padding: "10px",
        backgroundColor: "#eee",
        display: "flex",
        gap: "20px",
      }}
    >
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/services">Services</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}

export default Navbar;

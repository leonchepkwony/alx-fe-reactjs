function Footer() {
  return (
    <footer
      style={{ textAlign: "center", padding: "10px", backgroundColor: "#ddd" }}
    >
      &copy; {new Date().getFullYear()} My Company. All rights reserved.
    </footer>
  );
}

export default Footer;

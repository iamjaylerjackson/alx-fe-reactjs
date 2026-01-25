function Footer() {
  const footerStyle = {
    backgroundColor: "#333",
    color: "white",
    textAlign: "center",
    padding: "15px",
    marginTop: "20px",
  };

  return (
    <footer style={footerStyle}>
      <p>&copy; {new Date().getFullYear()} My Company. All rights reserved.</p>
    </footer>
  );
}

export default Footer;

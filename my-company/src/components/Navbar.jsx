import { Link } from "react-router-dom";

function Navbar() {
  const navStyle = {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#333",
    padding: "15px",
    marginBottom: "20px",
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    margin: "0 15px",
    padding: "8px 16px",
    borderRadius: "4px",
    transition: "background-color 0.3s",
  };

  const linkHoverStyle = {
    backgroundColor: "#555",
  };

  return (
    <nav style={navStyle}>
      <Link
        to="/"
        style={linkStyle}
        onMouseOver={(e) =>
          (e.target.style.backgroundColor = linkHoverStyle.backgroundColor)
        }
        onMouseOut={(e) => (e.target.style.backgroundColor = "")}
      >
        Home
      </Link>
      <Link
        to="/about"
        style={linkStyle}
        onMouseOver={(e) =>
          (e.target.style.backgroundColor = linkHoverStyle.backgroundColor)
        }
        onMouseOut={(e) => (e.target.style.backgroundColor = "")}
      >
        About
      </Link>
      <Link
        to="/services"
        style={linkStyle}
        onMouseOver={(e) =>
          (e.target.style.backgroundColor = linkHoverStyle.backgroundColor)
        }
        onMouseOut={(e) => (e.target.style.backgroundColor = "")}
      >
        Services
      </Link>
      <Link
        to="/contact"
        style={linkStyle}
        onMouseOver={(e) =>
          (e.target.style.backgroundColor = linkHoverStyle.backgroundColor)
        }
        onMouseOut={(e) => (e.target.style.backgroundColor = "")}
      >
        Contact
      </Link>
    </nav>
  );
}

export default Navbar;

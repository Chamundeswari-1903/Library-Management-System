import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { FaBook, FaUser, FaHome, FaBookOpen } from "react-icons/fa";

const Header = () => {
  return (
    <Navbar bg="primary" variant="primary" expand="lg">
      <Navbar.Brand as={Link} to="/">
        Library Management System
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar" />
      <Navbar.Collapse >
        <Nav >
          <Nav.Item>
            <Nav.Link as={Link} to="/Author">
             Add Author
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/Books">
            Add Book
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/AuthorPage">
              Authors
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/BooksPage">
               Books
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;

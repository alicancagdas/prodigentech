import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div style={{ height: "100vh", padding: "20px", backgroundColor: "#232323", color: "white" }}>
      <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>Homepage</h1>
      <p style={{ fontSize: "18px", marginBottom: "30px" }}>
        . Quickly use below links to navigate through all pages.
      </p>
      <ul style={{ listStyle: "none", padding: "0" }}>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/" style={{ color: "#87CEFA", textDecoration: "none" }}>
            Main
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/aboutme" style={{ color: "#87CEFA", textDecoration: "none" }}>
            Aboutme
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/iletisim" style={{ color: "#87CEFA", textDecoration: "none" }}>
            Iletisim
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;

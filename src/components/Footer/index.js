import { useState, useEffect } from "react";
import { Typography } from "antd";
import { Link, useLocation } from "react-router-dom";
import "./styles.scss";
import home from "src/assets/home.svg";
import home1 from "src/assets/hom1.png";
import user from "src/assets/user.png";
import search from "src/assets/search.png";

const Footer = () => {
  const location = useLocation();
  const [path, setPath] = useState("");
  const dataFooter = [
    { path: "/", icon: home, label: "Home" },
    { path: "/search", icon: search, label: "Search" },
    { path: "/saved", icon: home1, label: "Saved" },
    { path: "/profile", icon: user, label: "Profile" },
  ];
  useEffect(() => {
    if (location && location.pathname) {
      setPath(location.pathname);
    }
  }, [location.pathname]);

  return (
    <div className="footer">
      <div className="menu-box">
        {dataFooter.map((item, index) => (
          <Link to={item.path} key={index}>
            <img src={item.icon} alt={item.label} />
            <Typography.Text
              className={`text ${path === item.path ? "active" : ""}`}
            >
              {item.label}
            </Typography.Text>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Footer;

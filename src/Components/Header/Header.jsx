import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink, useParams } from "react-router-dom";

import { ChevronDown } from "react-bootstrap-icons";
import { List } from "react-bootstrap-icons";
import { X } from "react-bootstrap-icons";

import "./Header.css";

export default function Header({ children }) {
  const params = useParams()
  const [showMenu, setShowMenu] = useState(false);
  const jubElm = useRef(null);
  const pageElm = useRef(null);

  
  useEffect(() => {
    function checkScreen() {
      if (window.screen.width > 992) {
        setShowMenu(false);
      }
    }

    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const showSubMenu = (targetElm) => {
    targetElm.current.classList.toggle("show-sub-list");
  };

  return (
    <header className="Header">
      <div className="header-container position-relative">
        <div className="d-md-flex container-lg justify-content-between align-items-center py-2">
          <div className="left-header-box d-flex align-items-center justify-content-between justify-content-md-start gap-4">
            {showMenu ? (
              <X
                className="d-lg-none header-menu"
                onClick={() => setShowMenu(!showMenu)}
              />
            ) : (
              <List
                className="d-lg-none header-menu"
                onClick={() => setShowMenu(!showMenu)}
              />
            )}

            <Link to="/" className="header-logo">
              J<span className="header-logo-select">o</span>B
            </Link>
          </div>

          <div className="right-header-box d-flex align-items-center gap-5 d-none d-md-flex">
            <nav className="d-none d-lg-block navlist">
              <ul className="d-flex">
                <li className="navlist-item">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive
                        ? "navlink-item navlink-item-active"
                        : "navlink-item"
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li className="navlist-item">
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      isActive
                        ? "navlink-item navlink-item-active"
                        : "navlink-item"
                    }
                  >
                    About us
                  </NavLink>
                </li>
                <li className="navlist-item">
                  <NavLink
                    to="/job"
                    className={({ isActive }) =>
                      isActive
                        ? "navlink-item navlink-item-active"
                        : "navlink-item"
                    }
                  >
                    Job List
                    <ChevronDown size={15} className="ms-1" />
                    <ul className="sub-list white-b">
                      <li className="sub-list-item">
                        <Link className="sub-navlist-item">FrontEnd</Link>
                      </li>
                      <li className="sub-list-item">
                        <Link className="sub-navlist-item">BackEnd</Link>
                      </li>
                    </ul>
                  </NavLink>
                </li>
                <li className="navlist-item">
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      isActive
                        ? "navlink-item navlink-item-active"
                        : "navlink-item"
                    }
                  >
                    Contact us
                  </NavLink>
                </li>
              </ul>
            </nav>

            <button className="btn-c1">POST A JOB</button>
          </div>

          <nav className={`${showMenu ? "d-lg-none navlist-menu" : "d-none"}`}>
            <ul className="d-flex flex-column px-3">
              <li className="navlist-item">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "navlink-item navlink-item-active"
                      : "navlink-item"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="navlist-item">
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive
                      ? "navlink-item navlink-item-active"
                      : "navlink-item"
                  }
                >
                  About us
                </NavLink>
              </li>
              <li className="navlist-item" onClick={() => showSubMenu(jubElm)}>
                <span className="navlink-item">
                  Job List
                  <ChevronDown size={15} className="ms-1" />
                  <ul className="sub-list" ref={jubElm}>
                    <li className="sub-list-item">
                      <Link className="sub-navlist-item">FrontEnd</Link>
                    </li>
                    <li className="sub-list-item">
                      <Link className="sub-navlist-item">BackEnd</Link>
                    </li>
                  </ul>
                </span>
              </li>
              <li className="navlist-item">
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive
                      ? "navlink-item navlink-item-active"
                      : "navlink-item"
                  }
                >
                  Contact us
                </NavLink>
              </li>
              <li className="navlist-item" onClick={() => showSubMenu(pageElm)}>
                <span className="navlink-item">
                  Pages
                  <ChevronDown size={15} className="ms-1" />
                  <i className="bi bi-chevron-down"></i>
                  <ul className="sub-list" ref={pageElm}>
                    <li className="sub-list-item">
                      <Link className="sub-navlist-item">Services</Link>
                    </li>
                    <li className="sub-list-item">
                      <Link className="sub-navlist-item">Help Center</Link>
                    </li>
                    <li className="sub-list-item">
                      <Link className="sub-navlist-item">Team</Link>
                    </li>
                    <li className="sub-list-item">
                      <Link className="sub-navlist-item">Blog</Link>
                    </li>
                    <li className="sub-list-item">
                      <Link className="sub-navlist-item">Single post</Link>
                    </li>
                    <li className="sub-list-item">
                      <Link className="sub-navlist-item">Error 404</Link>
                    </li>
                  </ul>
                </span>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="header-banner">{children}</div>
    </header>
  );
}

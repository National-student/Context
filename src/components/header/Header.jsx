import React from "react";
import { NavLink } from "react-router-dom";
import { Language } from "../../pages/language/Language";
import "./Header.css";
import { ThemeContext } from "../../context/themecontext/ThemeContext";
import { LangContext } from "../../context/langcontext/LangContext";

const Header = () => {
  const { theme, handleTheme } = React.useContext(ThemeContext);
  const { lang, handleLang } = React.useContext(LangContext);

  return (
    <ul
      className={theme}
      style={{
        listStyle: "none",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "isActive link" : "link")}
          to={"/"}
        >
          {Language[lang].header.home}
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "isActive link" : "link")}
          to={"/users"}
        >
          {Language[lang].header.user}
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "isActive link" : "link")}
          to={"/posts"}
        >
          {Language[lang].header.post}
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "isActive link" : "link")}
          to={"/about"}
        >
          {Language[lang].header.about}
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "isActive link" : "link")}
          to={"/contact"}
        >
          {Language[lang].header.contact}
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "isActive link" : "link")}
          to={"/adress"}
        >
          {Language[lang].header.adress}
        </NavLink>
      </li>
      <li>
        <select onChange={(evt) => handleTheme(evt)}>
          <option value="light">{Language[lang].header.light}</option>
          <option value="dark">{Language[lang].header.dark}</option>
        </select>
      </li>
      <li>
        <select onChange={(evt) => handleLang(evt)}>
          <option value="uzb">uzb</option>
          <option value="eng">eng</option>
        </select>
      </li>
    </ul>
  );
};

export default Header;

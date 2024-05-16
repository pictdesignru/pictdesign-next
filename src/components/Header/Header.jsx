'use client'
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import NavigationLink from "../NavigationLink/NavigationLink";
import Logo from "../Logo/Logo";
import CategoryList from "../CategoryList/CategoryList";
import HeaderButton from "./HeaderButton";

const Header = ({categories}) => {

  const pathname = usePathname();

  const [activeHeader, setActiveHeader] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(false);

  function setHeader() {
    setActiveHeader(!activeHeader);
  }

  function setSubMenu() {
    setActiveSubMenu(!activeSubMenu);
  }

  useEffect(() => {
    document.addEventListener("keydown", (event) => {
      if (event.code === "Escape") {
        setActiveHeader(false);
        setActiveSubMenu(false);
      }
    });
    return () => document.removeEventListener("keydown", setHeader);
  }, [setHeader]);

  useEffect(() => {
    document.addEventListener("scroll", (event) => {
      setActiveSubMenu(false);
    });
    return () => document.removeEventListener("scroll", setSubMenu);
  }, [setSubMenu]);

  useEffect(() => {
    setActiveHeader(false);
    setActiveSubMenu(false);
  }, [pathname]);

  return (
    <>
      <HeaderButton isActive={activeHeader} setIsActive={setHeader}/>
      <div
        className={`header__button-overlay ${
          (activeHeader || activeSubMenu) ? "header__button-overlay_active" : ""
        }`}
        onClick={() => {
          console.log('click');
          setActiveHeader(false);
          setActiveSubMenu(false);
        }}
      />
      <header className={`header ${activeHeader ? "header_opened" : ""}`}>
        <Logo />
        <ul className="navigation__list">
          <li className="navigation__item navigation__item_bold">
            <NavigationLink title={'О нас'} link="/about" />
          </li>
          <li
            className="navigation__item navigation__item_bold"
            onClick={() => {
              setActiveSubMenu((activeSubMenu) => !activeSubMenu);
            }}
          >
            <div className="navigation__link navigation__button">
              Проекты
              <div className={`header__cat-container ${activeSubMenu? 'header__cat-container_active' : ''}`}>
                <CategoryList categories={categories} />
              </div>
            </div>
          </li>
          <li className="navigation__item navigation__item_bold">
            <NavigationLink title={'Контакты'} link="/contact" />
          </li>
        </ul>
      </header>
    </>
  );
};

export default Header;

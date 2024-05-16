import React from "react";
import NavigationLink from "../NavigationLink/NavigationLink";
import FooterLogo from "../FooterLogo/FooterLogo";
import CategoryList from "../CategoryList/CategoryList";
import { contacts } from "../../data/data";

const Footer = ({categories}) => {

  return (
    <footer className="footer">
      <nav className="footer__nav-list">
        <h3 className="footer__list-title">{'Проекты'}</h3>
          <CategoryList categories={categories} />
      </nav>
      <nav className="footer__nav-list">
        <h3 className="footer__list-title">
          <NavigationLink title={'Контакты'} link="/Contact" />
        </h3>
        <ul className="footer__list">
          {contacts.map((contact, i) => {
            return (
              <li key={i}>
                <NavigationLink
                  title={contact.title}
                  link={contact.link}
                  target="_blank"
                />
              </li>
            );
          })}
        </ul>
      </nav>
      <nav className="footer__nav-list">
        <h3 className="footer__list-title">
          <NavigationLink title={'О нас'} link="/about" />
        </h3>
      </nav>
      <nav className="footer__nav-list">
        <FooterLogo />
      </nav>
      <ul className="footer__list footer__list_mobile">
        <li>ИП Вохмянина М.А.</li>
        <li>ИНН 501006590538</li>
        <li>ОГРНИП 316435000087993</li>
      </ul>
    </footer>
  );
};

export default Footer;

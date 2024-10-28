import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const language = localStorage.getItem("i18nextLng");
  const handleChange = (event) => {
    const selectLanguage = event.target.value;
    i18n.changeLanguage(selectLanguage);
  };
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="flex justify-between md:block md:px-10 px-4">
        <div className="flex items-center justify-between py-7">
          <NavLink to="/">
            <img src="/icons/header__icon.png" alt="logo" className="w-36" />
          </NavLink>
          <ul className="md:flex md:gap-10 md:items-center text-white hidden">
            <li>
              <NavLink to="/shop">{t('navbar.toplam')}</NavLink>
            </li>
            <li>
              <NavLink to="/about">{t('navbar.haqida')}</NavLink>
            </li>
            <li>
              <NavLink to="/contact">{t('navbar.aloqa')}</NavLink>
            </li>
            <li>
              <div className="mr-20 md:mr-0 md:text-black">
                <select name="Lang" id="lng" onChange={handleChange} value={language}>
                  <option value="uz">{t('navbar.uzb')}</option>
                  <option value="ru">{t('navbar.rus')}</option>
                  <option value="en">{t('navbar.eng')}</option>
                </select>
              </div>
            </li>
          </ul>
        </div>

        <div className="md:hidden mt-6">
          <button className="text-sm" onClick={toggleNavbar}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {isOpen && (
        <ul className="flex flex-col basis-full items-center gap-10 fixed right-0 top-20 pt-[20%] w-80 h-full bg-white z-20 md:hidden text-2xl">
          <li onClick={toggleNavbar}>
            <NavLink to="/shop">{t('navbar.toplam')}</NavLink>
          </li>
          <li onClick={toggleNavbar}>
            <NavLink to="/about">{t('navbar.haqida')}</NavLink>
          </li>
          <li onClick={toggleNavbar}>
            <NavLink to="/contact">{t('navbar.aloqa')}</NavLink>
          </li>
          <li>
            <div>
              <select name="Lang" id="lng">
                <option value="uz">{t('navbar.uzb')}</option>
                <option value="ru">{t('navbar.rus')}</option>
                <option value="en">{t('navbar.eng')}</option>
              </select>
            </div>
          </li>
        </ul>
      )}
    </>
  );
};

export default Navbar;

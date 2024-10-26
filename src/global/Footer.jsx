import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Footer = () => {

  const {t, i18n} = useTranslation()
  return (
    <div>
      <div className="grid grid-cols-1 gap-7 md:grid-cols-4 md:gap-10 pl-5">
        <div>
          <img src="/icons/header__icon.png" alt="logo" className="w-80" />
          <p className="mt-14 w-3/4">
            {t('footer.body')}
          </p>
        </div>
        <div>
          <p className="my-10 text-2xl">{t('footer.menu')}</p>
          <ul className="flex flex-col gap-1">
            <li>
              <Link to="/about">{t('navbar.haqida')}</Link>
            </li>
            <li>
              <Link to="/shop">{t('navbar.toplam')}</Link>
            </li>
            <li>
              <Link to="/contact">{t('navbar.aloqa')}</Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="my-10 text-2xl">{t('navbar.aloqa')}</p>
          <p>
          {t('footer.body2')}
          </p>
        </div>
        <div>
          <p>{t('footer.email')}</p>

          <form className="max-w-md mx-auto">
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              {t('footer.search')}
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder={t('footer.emailPlace')}
                required
              />
              <button
                type="submit"
                className="text-white absolute end-2.5 bottom-2.5 bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                {t('footer.search')}
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="bg-black text-gray-500 p-5 mt-20">
        {t('footer.body3')}
      </div>
    </div>
  );
};

export default Footer;

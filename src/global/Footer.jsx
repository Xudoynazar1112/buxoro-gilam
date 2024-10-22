import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="grid grid-cols-4 gap-10">
        <div>
          <img src="/icons/header__icon.png" alt="logo" />
          <p className="mt-14 w-3/4">
            “Bukhara Natural Product” koʻp yillardan buyon butun dunyoda
            foydalanish uchun paxta matolari ishlab chiqaradigan kompaniya
            hisoblanadi.
          </p>
        </div>
        <div>
          <p className="my-10 text-2xl">Menu</p>
          <ul className="flex flex-col gap-1">
            <li>
              <a href="#">Uy</a>
            </li>
            <li>
              <a href="#">Biz haqimizda</a>
            </li>
            <li>
              <a href="#">To'plam</a>
            </li>
            <li>
              <a href="#">Akoqa</a>
            </li>
          </ul>
        </div>
        <div>
          <p className="my-10 text-2xl">Aloqa</p>
          <p>
            Buxoro, st. Alpomish 80. Bnpuz@bk.ru bnp_fabrik info@bnpfabric.com
            +998 93 383 75 85 +998 93 960 78 00
          </p>
        </div>
        <div>
          <p>
            Eleltron pochtamizga obuna bo'ling
          </p>
          <form>
            <input type="text" id="email-subcribe" placeholder="Elektron pochtangizni kiriting" className="bg-gray-300 rounded-xl focus:outline-none p-3" />
            <button>Obuna</button>
          </form>
        </div>
      </div>
      <div className="bg-black text-gray-500 p-5 mt-20">
        © 2024 MChJ "BUXORA NATURAL PRODUCT". Barcha huquqlar himoyalangan.
      </div>
    </div>
  );
};

export default Footer;

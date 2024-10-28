import React, { useState } from "react";
import mainData from "../data";
import { Link } from "react-router-dom";

const Toplam = () => {
  const filterBySeason = (season) => {
    return mainData.filter((a) => a.season === season);
  };
  
  const yoz = filterBySeason("yoz");

  let yozData = yoz?.map((d) => (
    <Link to={`/toplam/${d.id}`} key={d.id}>
      <img src={d.img} alt="photo" className="w-72 rounded-xl" />
      <p>{d.name}</p>
    </Link>
  ));

  const [searchQuery, setSearchQuery] = useState("");

  // Filter products based on the search input (case-insensitive).
  const filteredProducts = yoz.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="md:flex md:justify-between md:gap-5 w-full mb-20">
      <div className="w-[20%]">
        <div>
          <div className="md:flex flex flex-col">
            <form className="max-w-md">
              <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Search
              </label>
              <div className="relative">
                <input
                  type="search"
                  id="default-search"
                  className="block w-full p-4  text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  required
                />
              </div>
            </form>

            <h2 className="text-start text-4xl mt-5">To'plam</h2>
          </div>

          <ul className="flex flex-col pl-5 mt-7 gap-3">
            <li>
              <Link to="/shop/qish">Qish kalleksiyasi</Link>
            </li>
            <li>
              <Link to="/shop/kuz">Kuz kalleksiyasi</Link>
            </li>
            <li>
              <Link to="/shop/yoz">Yoz kalleksiyasi</Link>
            </li>
          </ul>
        </div>
      </div>
      <div data-aos="fade-up">
        <h1 className={`${searchQuery.length > 0 ? 'hidden' : 'block'} my-5`}>To'plam</h1>
        <div className={`${searchQuery.length > 0 ? 'hidden' : 'grid'} grid-cols-1 md:grid-cols-4 gap-5`}>
          {yozData}
        </div>
      </div>
      <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 ${searchQuery.length === 0 ? 'hidden' : 'block'}`}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <Link to={`/toplam/${product.id}`} key={product.id}>
              <img src={product.img} alt="photo" className="w-72 rounded-xl" />
              <p>{product.name}</p>
            </Link>
          ))
        ) : (
          <img src="/images/empty.jpg" alt="empty" />
        )}
      </div>
    </div>
  );
};

export default Toplam;

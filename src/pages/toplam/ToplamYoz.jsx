import React from "react";
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
  return (
    <div className="md:flex md:gap-10">
      <div>
        <div>
          <div className="md:flex flex flex-col">
            <input
              type="text"
              placeholder="Bu yerdan qidiring"
              className="bg-slate-300 p-1 rounded-xl"
            />
            <h2 className="text-start text-2xl">To'plam</h2>
          </div>

          <ul className="flex flex-col pl-5 mt-7">
            <li>
              <Link to="/shop/baxor">Bahor kalleksiyasi</Link>
            </li>
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
      <div>
        <h1 className="my-5">To'plam</h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
           {yozData}
        </div>
      </div>
    </div>
  );
};

export default Toplam;

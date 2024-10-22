import React from "react";
import mainData from "../data";
import { Link } from "react-router-dom";

const Toplam = () => {
  const filterBySeason = (season) => {
    return mainData.filter((a) => a.season === season);
  };
  const qish = filterBySeason("qish");
  const kuz = filterBySeason("kuz");
  const yoz = filterBySeason("yoz");

  let qishData = qish?.map((d) => (
    <Link to={`/toplam/${d.id}`} key={d.id}>
      <img src={d.img} alt="photo" className="w-72 rounded-xl" />
      <p>{d.name}</p>
    </Link>
  ));

  let kuzData = kuz?.map((d) => (
    <Link to={`/toplam/${d.id}`} key={d.id}>
      <img src={d.img} alt="photo" className="w-72 rounded-xl" />
      <p>{d.name}</p>
    </Link>
  ));

  let yozData = yoz?.map((d) => (
    <Link to={`/toplam/${d.id}`} key={d.id}>
      <img src={d.img} alt="photo" className="w-72 rounded-xl" />
      <p>{d.name}</p>
    </Link>
  ));
  return (
    <div className="flex gap-10">
      <div>
        <input
          type="text"
          placeholder="Bu yerdan qidiring"
          className="bg-slate-300 p-1 rounded-xl"
        />
        <div>
          <h2 className="text-start text-2xl">To'plam</h2>
          <ul className="flex flex-col pl-5 mt-7">
            <li>
              <a href="#">Bahor kalleksiyasi</a>
            </li>
            <li>
              <a href="#">Qish kalleksiyasi</a>
            </li>
            <li>
              <a href="#">Kuz kalleksiyasi</a>
            </li>
            <li>
              <a href="#">Yoz kalleksiyasi</a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <h1 className="my-5">To'plam</h1>
        <div className="grid grid-cols-4 gap-5">
          {qishData} {kuzData} {yozData}
        </div>
        {/* <div>{kuzData}</div>
        <div>{yozData}</div> */}
      </div>
    </div>
  );
};

export default Toplam;

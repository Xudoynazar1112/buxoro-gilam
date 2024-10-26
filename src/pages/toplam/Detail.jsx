import React from "react";
import { Link, useParams } from "react-router-dom";
import mainData from "../data";

const Detail = () => {
  const { id } = useParams(); // Get the ID from the URL

  const filterBySeason = (season) => {
    return mainData.filter((a) => a.season === season);
  };

  // Find the relevant item from the data
  console.log(id);

  const item = mainData.find((d) => d.id == id);
  console.log(item.season);

  const otherItems = filterBySeason(item.season).slice(0, 4);
  console.log(otherItems);

  let otherData = otherItems?.map((d, index) => (
    <Link to={`/toplam/${d.id}`} key={index}>
      <img src={d.img} alt="photo" className="w-72 rounded-xl" />
      <p>{d.name}</p>
    </Link>
  ));

  if (!item) {
    return <h1>Item not found</h1>;
  }

  return (
    <>
      <div className="md:flex md:justify-around flex w-full md:my-10 my-5">
        <img src={item.img} alt={item.name} className="md:w-1/2 w-full rounded-xl" />
        <div>
          <h1 className="text-3xl my-5">{item.name}</h1>
          <table className="border-collapse border border-slate-400">
            <tr>
              <td>Material:</td>
              <td>100% paxta flanel</td>
            </tr>
            <tr>
              <td>Yostiq kiyimi:</td>
              <td>50x70 sm (2 dona)</td>
            </tr>
            <tr>
              <td>Choyshab:</td>
              <td>260×280 sm (1 dona)</td>
            </tr>
            <tr>
              <td>Ko'rpa-to'shak:</td>
              <td>160x220 sm (2 dona)</td>
            </tr>
            <tr>
              <td>Hajmi:</td>
              <td>Maxsus o'lcham</td>
            </tr>
            <tr>
              <td>Ishlab chiqaruvchi:</td>
              <td>Buxoro tabiiy mahsuloti</td>
            </tr>
          </table>
          <p className="py-10 text-xl">
            Kategoriya: {item.season} kolleksiyasi
          </p>
        </div>
      </div>
      <hr />
      <div className="my-5">
        <h1 className="text-center md:my-10 md:text-4xl my-5 text-2xl">Shunga o'xshash mahsulotlar</h1>
        <div className="grid md:grid-cols-4 md:gap-10 grid-cols-2 gap-5">{otherData}</div>
      </div>
    </>
  );
};

export default Detail;

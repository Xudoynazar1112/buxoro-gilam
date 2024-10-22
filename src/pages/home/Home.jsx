import React from "react";
import mainData from "../data";
import { Link } from "react-router-dom";

const ArrowAd = ({ img, color }) => {
  return (
    <div
      className={`flex items-center justify-center h-80 my-52 rounded-2xl bg-[${color}] box-shadow transition-all`}
      style={{ backgroundColor: color }}
    >
      <div className="text-white pl-20">
        <p className="text-[70px] font-semibold">100%</p>
        <p>Material sifati</p>
      </div>
      <img src={img} className="w-[67%]" alt="photo" />
      <div className="pr-20 text-white flex flex-col gap-5">
        <p className="text-4xl">"Buxoro tabiiy mahsuloti"</p>
        <p>
          ko'p yillar davomida butun dunyoda foydalanish uchun paxta matolarini
          ishlab chiqaradigan kompaniya bo'lib kelgan
        </p>
        <a
          href="#"
          className="text-black text-center w-32 py-1 rounded-2xl bg-white"
        >
          To'plam
        </a>
      </div>
    </div>
  );
};

const Home = () => {
  const data = [
    {
      icon: "/icons/servicesIcon.svg",
      head: "Yetkazib berish bepul",
      body: "Barcha buyurtmalar uchun bepul yetkazib berish",
    },
    {
      icon: "/icons/servicesIcon2.svg",
      head: "Qaytish kafolati",
      body: "30 kunlik pulni qaytarish",
    },
    {
      icon: "/icons/servicesIcon3.svg",
      head: "24/7 onlayn qo'llab-quvvatlash",
      body: "24/7 texnik yordam",
    },
    {
      icon: "/icons/servicesIcon4.svg",
      head: "Xavfsiz to'lov",
      body: "Barcha to'lov usullari qabul qilinadi",
    },
  ];

  

  let iconData = data.map((e, i) => (
    <div key={i} className="flex items-center gap-7 py-10">
      <img src={e.icon} className="w-20" alt="icon" />
      <div>
        <p className="text-black text-lg">{e.head}</p>
        <p className="text-gray-400 w-[14rem]">{e.body}</p>
      </div>
    </div>
  ));
  const filterBySeason = (season) => {
    return mainData.filter((a) => a.season === season);
  };
  
  // Example usage:
  const qish = filterBySeason("qish");
  const kuz = filterBySeason("kuz");
  const yoz = filterBySeason("yoz");
  console.log(qish);

  let qishData = qish?.map((d, index) => (
    <Link to={`detail/${d.id}`} key={index}>
      <img src={d.img} alt="photo" className="w-72 rounded-xl" />
      <p>{d.name}</p>
    </Link>
  ));

  let kuzData = kuz?.map((d, index) => (
    <Link to={`detail/${d.id}`} key={index}>
      <img src={d.img} alt="photo" className="w-72 rounded-xl" />
      <p>{d.name}</p>
    </Link>
  ));


  let yozData = yoz?.map((d, index) => (
    <Link to={`detail/${d.id}`} key={index}>
      <img src={d.img} alt="photo" className="w-72 rounded-xl" />
      <p>{d.name}</p>
    </Link>
  ));

  return (
    <div data-aos="fade-in" className="w-full flex flex-col justify-center items-center">
      <div className="bg-gray-600 min-h-[600px] rounded-xl py-10 w-[100%]">
        <img
          src="/images/111-copy.png"
          className="w-[90%] absolute -left-64 top-20"
          alt="logo"
        />

        <div className="flex flex-col justify-end pt-24 text-white pr-3">
          <span className="text-[3rem] text-end">Buxoro</span>
          <span className="text-[6rem] text-end leading-none">Tabiiy</span>
          <span className="text-[10rem] text-end leading-none">Mahsulot</span>
        </div>
      </div>
      <div className="flex">{iconData}</div>
      <ArrowAd img={"/images/quality__img.png"} color={"#616884"} />
      <h1 className="font-semibold">Qish kolleksiyasi</h1>
      <div className="grid grid-cols-5 gap-10 mt-10">{qishData}</div>
      <ArrowAd img={"/images/q.png"} color={"#625686"} /> 
      <h1 className="font-semibold">Kuz kolleksiyasi</h1>
      <div className="grid grid-cols-5 gap-10 mt-10">{kuzData}</div>
      <ArrowAd img={"/images/quality__img3.png"} color={"#307E7A"} /> 
      <h1 className="font-semibold">Yozgi kolleksiyasi</h1>
      <div className="grid grid-cols-5 gap-10 mt-10">{yozData}</div>
    </div>
  );
};

export default Home;

import React from "react";
import mainData from "../data";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ArrowAd = ({ img, color }) => {

  const {t, i18n} = useTranslation()
  return (
    <div
      className={`md:flex md:flex-row flex flex-col md:px-10 items-center justify-center md:h-80 h-[30rem] md:my-52 my-20 rounded-2xl bg-[${color}] box-shadow transition-all`}
      style={{ backgroundColor: color }}>
      <div data-aos="fade-up" className="text-white  flex gap-3 md:flex md:flex-col">
        <p className="md:text-[70px] font-semibold text-base">100%</p>
        <p>{t('home.sifat')}</p>
      </div>
      <img src={img} className="md:w-[67%] w-[40%]" alt="photo" />
      <div data-aos="fade-down" className="md:pr-20 text-white md:flex md:flex-col flex flex-col items-center gap-5">
        <p className="md:text-4xl text-2xl text-center md:inline w-full">{t('home.buxoroMahsuloti')}</p>
        <p className="md:text-start text-center w-3/4">
        {t('home.buxoroMahsulotiBody')}
        </p>
        <Link
          to="/shop"
          className="text-black text-center w-32 py-1 rounded-2xl bg-white"
        >
          {t('navbar.toplam')}
        </Link>
      </div>
    </div>
  );
};

const Home = () => {

  const {t, i18n} = useTranslation()
  const data = [
    {
      icon: "/icons/servicesIcon.svg",
      head: t('home.data.head1'),
      body: t('home.data.body1'),
    },
    {
      icon: "/icons/servicesIcon2.svg",
      head: t('home.data.head2'),
      body: t('home.data.body2'),
    },
    {
      icon: "/icons/servicesIcon3.svg",
      head: t('home.data.head3'),
      body: t('home.data.body3'),
    },
    {
      icon: "/icons/servicesIcon4.svg",
      head: t('home.data.head4'),
      body: t('home.data.body4'),
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

  let qishData = qish?.map((d, index) => (
    <Link to={`toplam/${d.id}`} key={index}>
      <img src={d.img} alt="photo" className="w-72 rounded-xl" />
      <p>{d.name}</p>
    </Link>
  ));

  let kuzData = kuz?.map((d, index) => (
    <Link to={`toplam/${d.id}`} key={index}>
      <img src={d.img} alt="photo" className="w-72 rounded-xl" />
      <p>{d.name}</p>
    </Link>
  ));


  let yozData = yoz?.map((d, index) => (
    <Link to={`toplam/${d.id}`} key={index}>
      <img src={d.img} alt="photo" className="w-72 rounded-xl" />
      <p>{d.name}</p>
    </Link>
  ));

  return (
    <div data-aos="fade-in" className="w-full flex flex-col justify-center items-center">
      <div className="bg-gray-600 md:min-h-[600px] h-[400px] rounded-xl md:py-10 w-[100%]">
        <img
          src="/images/111-copy.png"
          className="md:w-[90%] md:absolute md:-left-64 md:top-20 md:inline hidden"
          alt="logo"
        />

        <div className="flex flex-col justify-end pt-24 text-white pr-3">
          <span className="md:text-[3rem] md:text-end text-center text-[1rem]">{t('home.buxoro')}</span>
          <span className="md:text-[6rem] md:text-end md:leading-none text-center text-[3rem]">{t('home.tabiiy')}</span>
          <span className="md:text-[10rem] md:text-end md:leading-none text-center text-[3.5rem]">{t('home.mahsuloti')}</span>
        </div>
      </div>
      <div data-aos="fade-up" className="md:flex block">{iconData}</div>
      <ArrowAd img={"/images/quality__img.png"} color={"#616884"} />
      <h1 className="font-semibold md:text-start md:text-6xl text-3xl text-center">{t('home.qish')}</h1>
      <div data-aos="fade-up" className="grid md:grid-cols-5 grid-cols-2 gap-10 my-10">{qishData}</div>
      <ArrowAd img={"/images/q.png"} color={"#625686"} /> 
      <h1 className="font-semibold md:text-start md:text-6xl text-3xl text-center">{t('home.kuz')}</h1>
      <div data-aos="fade-up" className="grid md:grid-cols-5 grid-cols-2 gap-10 my-10">{kuzData}</div>
      <ArrowAd img={"/images/quality__img3.png"} color={"#307E7A"} /> 
      <h1 className="font-semibold md:text-start md:text-6xl text-3xl text-center">{t('home.yoz')}</h1>
      <div data-aos="fade-up" className="grid md:grid-cols-5 grid-cols-2 gap-10 my-10">{yozData}</div>
    </div>
  );
};

export default Home;

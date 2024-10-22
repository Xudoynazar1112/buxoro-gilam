import React from "react";

const Contact = () => {
  return (
    <div className="flex w-full">
      <div className="w-1/2">
        <h1>Aloqa</h1>
        <form className="flex flex-col gap-5">
            <input className="bg-gray-300 w-1/2 p-2 rounded-xl" type="text" placeholder="Sizning elektron pochtangiz" />
            <input className="bg-gray-300 w-1/2 p-2 rounded-xl" type="number" placeholder="Telefon raqamingiz" />
            <input className="bg-gray-300 w-1/2 p-2 rounded-xl h-44 " type="text" placeholder="Sizning xabaringiz shu yerda" />
            <button className="w-1/4 bg-red-500 text-white">Yuborish</button>
        </form>
      </div>
      <div className="w-1/2">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d3067.647871695863!2d64.459557!3d39.74756!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMznCsDQ0JzUwLjgiTiA2NMKwMjcnMzUuOSJF!5e0!3m2!1suz!2sus!4v1729581907212!5m2!1suz!2sus"
          width="100%"
          height="450"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;

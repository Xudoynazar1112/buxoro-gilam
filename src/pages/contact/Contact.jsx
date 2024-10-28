import axios from "axios";
import React from "react";
import { toast } from "react-toastify";

const Contact = () => {

  const SendMessage = (event) => {
    event.preventDefault();
    const token = "1361985908:AAHThjmeSwnG-9iBNmVqjBpv4X2B2bwh66M";
    const chat_id = 843414567;
    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    const name = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;
    console.log(name, phone, message);
    


    const tg_messages = `Buxoro gilam sayti \n${name} dan buyurtma tushdi. \nRaqami: ${phone} \nXabar: ${message}`;

    axios({
      url: url,
      method: "POST",
      data: {
        chat_id: chat_id,
        text: tg_messages,
      },
    })
      .then((res) => {
        document.getElementById("forma").reset();
        toast.success("Muvaffaqiyatli jo'natildi!");
      })
      .catch((error) => {
        toast.error("Xatolik yuz berdi, iltimos qayta urinib ko'ring!");
        console.log("Xatolik yuz berdi: ", error);
      });
  };

  return (
    <div className="md:flex md:gap-10 w-full">
      <div data-aos="zoom-in" className="md:w-1/2 w-full">
        <h1 className="text-center mb-5">Aloqa</h1>
        <form className="flex flex-col gap-5" onSubmit={SendMessage} id="forma">
            <input className="bg-gray-100 w-full p-4 rounded-xl" type="text" name="email" id="email" placeholder="Sizning elektron pochtangiz" required />
            <input className="bg-gray-100 w-full p-4 rounded-xl" type="number" name="phone" id="phone" placeholder="Telefon raqamingiz" required />
            <input className="bg-gray-100 w-full p-4 rounded-xl h-28" type="text" name="message" id="message" placeholder="Sizning xabaringiz shu yerda" required />
            <button className="bg-red-500 text-white">Yuborish</button>
        </form>
      </div>
      <div data-aos="zoom-in-up" className="md:w-1/2 my-5">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d3067.647871695863!2d64.459557!3d39.74756!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMznCsDQ0JzUwLjgiTiA2NMKwMjcnMzUuOSJF!5e0!3m2!1suz!2sus!4v1729581907212!5m2!1suz!2sus"
          width="100%"
          className="md:h-[450px] h-[200px]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;

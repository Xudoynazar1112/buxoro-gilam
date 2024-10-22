import { RouterProvider } from "react-router-dom";
import router from "./provider/router";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useEffect } from "react";




const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,  // Animation duration (in milliseconds)
      offset: 50,       // Trigger animations at 50px from original trigger point
      easing: 'ease-in-out', // Easing function
      delay: 100,       // Delay before animation starts
    });
  }, []);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;


import { createBrowserRouter } from "react-router-dom";
import MainWrapper from "../../global/MainWrapper";
import Home from '../../pages/home/Home'
import Toplam from "../../pages/toplam/Toplam";
import Detail from "../../pages/toplam/Detail";
import About from "../../pages/about/About";
import NotFound from "../../pages/notFound/NotFound";
import Contact from "../../pages/contact/Contact";

const router = createBrowserRouter(
    MainWrapper([
        {
            path: "/",
            element: <Home />
        },
        {
            path: "/about",
            element: <About />
        },
        {
            path: "/contact",
            element: <Contact />
        },
        {
            path: "/shop",
            element: <Toplam />
        },
        {
            path: "detail/:id",
            element: <Detail />
        },
        {
            path: "*",
            element: <NotFound />
        },
    ])
)

export default router;
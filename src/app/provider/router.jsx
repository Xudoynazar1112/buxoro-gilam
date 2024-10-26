import { createBrowserRouter } from "react-router-dom";
import MainWrapper from "../../global/MainWrapper";
import Home from '../../pages/home/Home'
import Toplam from "../../pages/toplam/Toplam";
import ToplamQish from "../../pages/toplam/ToplamQish";
import ToplamKuz from "../../pages/toplam/ToplamKuz";
import ToplamYoz from "../../pages/toplam/ToplamYoz";
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
            path: "/shop/kuz",
            element: <ToplamKuz />
        },
        {
            path: "/shop/qish",
            element: <ToplamQish />
        },
        {
            path: "/shop/yoz",
            element: <ToplamYoz />
        },
        {
            path: "toplam/:id",
            element: <Detail />
        },
        {
            path: "*",
            element: <NotFound />
        },
    ])
)

export default router;
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../components/Home/Home";
import Donation from "../components/Home/Donation/Donation";
import Statistics from "../components/Home/Statistics/Statistics";
import CardsItem from "../components/CardComponents/CardsItem/CardsItem";
import ErrorPg from "../components/ErrorElement/ErrorPg";
// import ErrorElement from "../components/ErrorElement/ErrorElement";


const myCreatRouter = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:"/",
                element:<Home></Home>,
                errorElement:<ErrorPg></ErrorPg>,
                loader:()=>fetch('/data.json')
            },
            {
                path:"/donation",
                element:<Donation></Donation>
            },
            {
                path:"/statistics",
                element:<Statistics></Statistics>,
                loader:()=>fetch('/data.json')
            },
            {
                path:"/cardsItem/:id",
                element:<CardsItem></CardsItem>,
                loader:()=>fetch('/data.json')
            },
        ]
    }
])

export default myCreatRouter;
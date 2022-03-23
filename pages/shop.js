import React from "react";
import NavbarForAllPage from "../components/Layout/components/AllHeader/NavbarForAllPage";
import MobileMenu from "../components/Layout/components/AllHeader/MobileMenu";
import MainForShop from "../components/Layout/components/MainForShop/MainForShop";

export default function shop() {
    return (
        <div>
            <NavbarForAllPage/>
            <MobileMenu/>
            <MainForShop/>
        </div>
    )
}
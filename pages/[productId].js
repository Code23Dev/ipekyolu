import React from "react";
import NavbarForAllPage from "../components/Layout/components/AllHeader/NavbarForAllPage";
import MobileMenu from "../components/Layout/components/AllHeader/MobileMenu";
import MainForProduct from "../components/Layout/components/MainForProduct/MainForProduct";

export default function productId() {
    return (
        <div>
            <NavbarForAllPage/>
            <MobileMenu/>
            <MainForProduct/>
        </div>
    )
}
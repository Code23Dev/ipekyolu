import React from "react";
import NavbarForAllPage from "../components/Layout/components/AllHeader/NavbarForAllPage";
import MobileMenu from "../components/Layout/components/AllHeader/MobileMenu";
import Order from "../components/Layout/components/Order/Order";

export default function aboutUs() {
    return (
        <div>
            <NavbarForAllPage/>
            <MobileMenu/>
             <Order/>
        </div>
    )
}
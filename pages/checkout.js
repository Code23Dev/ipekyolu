import React from "react";
import NavbarForAllPage from "../components/Layout/components/AllHeader/NavbarForAllPage";
import MobileMenu from "../components/Layout/components/AllHeader/MobileMenu";
import Checkout from "../components/Layout/components/Checkout/Checkout";

export default function aboutUs() {
    return (
        <div>
            <NavbarForAllPage/>
            <MobileMenu/>
            <Checkout/>
        </div>
    )
}
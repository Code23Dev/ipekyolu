import React from "react";
import NavbarForAllPage from "../components/Layout/components/AllHeader/NavbarForAllPage";
import MobileMenu from "../components/Layout/components/AllHeader/MobileMenu";
import MainForVendor from "../components/Layout/components/MainForVendor/MainForVendor";

export default function shop() {
    return (
        <div>
            <NavbarForAllPage/>
            <MobileMenu/>
            <MainForVendor/>
        </div>
    )
}
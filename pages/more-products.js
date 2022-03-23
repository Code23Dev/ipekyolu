import React from "react";
import NavbarForAllPage from "../components/Layout/components/AllHeader/NavbarForAllPage";
import MobileMenu from "../components/Layout/components/AllHeader/MobileMenu";
import MainForMoreProducts from "../components/Layout/components/MainForMoreProducts/MainForMoreProducts";

export default function MoreProductsData() {
    return (
        <div>
            <NavbarForAllPage/>
            <MobileMenu/>
            <div className="mt-5 mb-5">
                <MainForMoreProducts/>
            </div>
        </div>
    )
}
import React from "react";
import NavbarForAllPage from "../components/Layout/components/AllHeader/NavbarForAllPage";
import MobileMenu from "../components/Layout/components/AllHeader/MobileMenu";
import Compare from "../components/Layout/components/Compare/Compare";

export default function faq() {
    return (
        <div>
            <NavbarForAllPage/>
            <MobileMenu/>
            <Compare/>
        </div>
    )
}
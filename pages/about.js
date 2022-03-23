import React from "react";
import NavbarForAllPage from "../components/Layout/components/AllHeader/NavbarForAllPage";
import MobileMenu from "../components/Layout/components/AllHeader/MobileMenu";
import About from "../components/Layout/components/About/About";

export default function about() {
    return (
        <div>
            <NavbarForAllPage/>
            <MobileMenu/>
            <About/>
        </div>
    )
}
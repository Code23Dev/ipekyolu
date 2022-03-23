import React from "react";
import axios from "axios";
import {apiUrl} from "../apiUrl/apiUrl";

export function productById(productId) {
    console.log(productId)
    const userProductsURL =`${apiUrl()}products/`
    let  token = localStorage.getItem('username')
    return  axios.get(`${userProductsURL+ productId}`, { 'headers': { 'Authorization': `Bearer ${token}` } }
    ).then((response) => response);
}
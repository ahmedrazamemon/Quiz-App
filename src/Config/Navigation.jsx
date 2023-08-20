import React from "react";
import { Route, Routes } from "react-router-dom";
import Basic from "../Components/Login";
import Questions from "../Components/Questions";
function Navigation() {

  return(
    <Routes>
        <Route path="/" element={<Basic/>}/>
        <Route path={"/questions"} element={<Questions/>}/>
    </Routes>
  )  

} export default Navigation;
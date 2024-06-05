import React from "react";
import homeImg from '../store/images/home.jpg'
import gardenCategory from '../store/images/gardenCat.jpg'
import gadgetsCategory from '../store/images/gadaetCat.jpg'
import kitchenCategory from '../store/images/kitchenCat.jpg'
import outletCategory from '../store/images/outletCat.jpg'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate()

  return (<>
    <center>
      <img src={homeImg} style={{ width: "100%" }}></img>
    </center>
    <div className="card-group" style={{justifyContent:"space-around"}}>
      

        <a href="./garden"> 
        <div class="card" style={{ width: "22rem"}}>
          <img src={gardenCategory} class="card-img-top" alt="..." />
          <div class="card-body">
            <center>
            <h5 class="link-success link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Garden</h5></center>
          </div>
      </div>
      </a>
      <a href="./outlet"> 
        <div class="card" style={{ width: "22rem" }}>
          <img src={outletCategory} class="card-img-top" alt="..." />
          <div class="card-body">
            <center>
            <h5 class="link-success link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Outlet</h5></center>
          </div>
      </div>
      </a>
      <a href="./kitchen"> 
        <div class="card" style={{ width: "22rem" }}>
          <img src={kitchenCategory} class="card-img-top" alt="..." />
          <div class="card-body">
            <center>
            <h5 class="link-success link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Kitchen</h5></center>
          </div>
      </div>
      </a>
      <a href="./gadget"> 
        <div class="card" style={{ width: "22rem" }}>
          <img src={gadgetsCategory} class="card-img-top" alt="..." />
          <div class="card-body">
            <center>
            <h5 class="link-success link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Gadgets</h5></center>
          </div>
      </div>
      </a>
    </div >
  </>)

}

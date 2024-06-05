import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../redux/actions/cartActions";
import { deleteFromCart } from "../redux/actions/cartActions"
import cart from '../store/images/cart.512x495.png'
import { addQty } from "../redux/actions/productAction"
import { decreaseQty } from "../redux/actions/productAction"
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import kitchenCategory from '../store/images/kitchenCat.jpg'
import ImageSwitcher from "./imageSwitcher";


function ShowProducts() {
    const products = useSelector((state) => state.productReducer)
    const dispatch = useDispatch()
    const [qty, setQty] = useState();
    const [qtyInCart, setQtyInCart] = useState();
    return (
        <>
            <center /*style={{ backgroundImage: `url(${kitchenCategory})`, width: "100%", height: "1000px" }}*/>
                <h1>Kitchen</h1>
                <h3>Make it easy!</h3>
            </center>
             <div class="card-deck mx-5"style={{justifyContent: "space-around", padding:"8em"}}>
            {/*  <div class="d-flex align-content-around flex-wrap"  > */}

                    {products.map((item) => (<> 
                    <div class="card-deck ">                
                        <div class="row"style={{paddingBottom:"6%", padding:"10%"}}>
                                <div>
                                    <ImageSwitcher img1={item.image1} img2={item.image2} />
                                    <div class="card-body ">
                                        <h5 class="card-title">{item.name}</h5>
                                        <p class="card-text">{item.description}</p>
                                        <p>In stock: {item.qty}</p>
                                        <p>Price: ${item.price}</p>
                                        <button class="btn btn-light " onClick={(e) => {
                                            e.preventDefault();
                                            if (item.qty > 0) {
                                                dispatch(decreaseQty(item.id));
                                                dispatch(addToCart(item, item.id));
                                                setQty(item.qty);
                                                setQtyInCart(item.qtyInCart++);
                                            }
                                        }}><img src={cart} style={{ width: "20px", height: "20px" }}></img></button>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </>
                    ))}
                {/* </div>*/}
            </div>
             
        </>
    )
}
export default ShowProducts

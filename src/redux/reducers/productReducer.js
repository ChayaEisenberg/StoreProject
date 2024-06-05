import pic1 from '../../store/images/baking/a1.jpg'
import pic2 from '../../store/images/baking/a3.jpg'
import pic3 from '../../store/images/baking/b1.jpg'
import pic4 from '../../store/images/baking/b2.jpg'
import pic5 from '../../store/images/baking/c1.jpg'
import pic6 from '../../store/images/baking/c3.jpg'
import pic7 from '../../store/images/baking/d1.jpg'
import pic8 from '../../store/images/baking/d2.jpg'
import pic9 from '../../store/images/baking/d3.jpg'
import pic10 from '../../store/images/baking/e1.jpg'
import pic11 from '../../store/images/baking/e2.jpg'
import pic12 from '../../store/images/baking/f2.jpg'
import pic13 from '../../store/images/baking/ff1.jpg'
import pic14 from '../../store/images/baking/gg.jpg'
import pic15 from '../../store/images/baking/h.jpg'
import pic16 from '../../store/images/baking/h1.jpg'
import pic17 from '../../store/images/baking/i1.jpg'
import pic18 from '../../store/images/baking/k1.jpg'
import pic19 from '../../store/images/baking/i3.jpg'
import pic20 from '../../store/images/baking/g1.jpg'

const products = [
    {
        id:0, 
        name:"set of pots", 
        qty:100, 
        image1: pic1,
        image2: pic2,  
        price:345, 
        description:"Amaizing basic set of pots",
       qtyInCart : 0
    },
    {
        id:1, 
        name:"bbb", 
        qty:100, 
        image1: pic3,
        image2: pic4,   
        price:200, 
        description:"bbbbbbb",
       qtyInCart : 0
    },
    {
        id:2, 
        name:"ccc", 
        qty:234, 
        image1: pic5,
        image2: pic6,   
        price:300, 
        description:"cccccccc",
       qtyInCart : 0
    },
    {
        id:3, 
        name:"ddd", 
        qty:40, 
        image1: pic7,
        image2: pic8,  
        price:400, 
        description:"ddddddd",
       qtyInCart : 0
    },
    {
        id:4, 
        name:"eee", 
        qty:50, 
        image1: pic9, 
        image2: pic10, 
        price:500, 
        description:"eeeeeeee",
       qtyInCart : 0,
       
    },
    {
        id:5, 
        name:"set of pots", 
        qty:100, 
        image1: pic11, 
        image2: pic12,  
        price:345, 
        description:"Amaizing basic set of pots",
       qtyInCart : 0
    },
    {
        id:6, 
        name:"bbb", 
        qty:100, 
        image1: pic13, 
        image2: pic14, 
        price:200, 
        description:"bbbbbbb",
       qtyInCart : 0
    },
    {
        id:7, 
        name:"ccc", 
        qty:234, 
        image1: pic15, 
        image2: pic16,  
        price:300, 
        description:"cccccccc",
       qtyInCart : 0
    }
    // {
    //     id:8, 
    //     name:"ddd", 
    //     qty:40, 
    //     image: pic9, 
    //     price:400, 
    //     description:"ddddddd",
    //    qtyInCart : 0
    // },
    // {
    //     id:9, 
    //     name:"eee", 
    //     qty:50, 
    //     image: pic10, 
    //     price:500, 
    //     description:"eeeeeeee",
    //    qtyInCart : 0,
       
    // }    ,
    // {
    //     id:10, 
    //     name:"set of pots", 
    //     qty:100, 
    //     image: pic11, 
    //     price:345, 
    //     description:"Amaizing basic set of pots",
    //    qtyInCart : 0
    // },
    // {
    //     id:11, 
    //     name:"bbb", 
    //     qty:100, 
    //     image: pic12, 
    //     price:200, 
    //     description:"bbbbbbb",
    //    qtyInCart : 0
    // },
    // {
    //     id:12, 
    //     name:"ccc", 
    //     qty:234, 
    //     image: pic13, 
    //     price:300, 
    //     description:"cccccccc",
    //    qtyInCart : 0
    // },
    // {
    //     id:13, 
    //     name:"ddd", 
    //     qty:40, 
    //     image: pic14, 
    //     price:400, 
    //     description:"ddddddd",
    //    qtyInCart : 0
    // },
    // {
    //     id:14, 
    //     name:"eee", 
    //     qty:50, 
    //     image: pic15, 
    //     price:500, 
    //     description:"eeeeeeee",
    //    qtyInCart : 0,
       
    // },
    // {
    //     id:15, 
    //     name:"set of pots", 
    //     qty:100, 
    //     image: pic16, 
    //     price:345, 
    //     description:"Amaizing basic set of pots",
    //    qtyInCart : 0
    // },
    // {
    //     id:16, 
    //     name:"bbb", 
    //     qty:100, 
    //     image: pic17, 
    //     price:200, 
    //     description:"bbbbbbb",
    //    qtyInCart : 0
    // },
    // {
    //     id:17, 
    //     name:"ccc", 
    //     qty:234, 
    //     image: pic18, 
    //     price:300, 
    //     description:"cccccccc",
    //    qtyInCart : 0
    // },
    // {
    //     id:18, 
    //     name:"ddd", 
    //     qty:40, 
    //     image: pic19, 
    //     price:400, 
    //     description:"ddddddd",
    //    qtyInCart : 0
    // },
    // {
    //     id:19, 
    //     name:"eee", 
    //     qty:50, 
    //     image: pic20, 
    //     price:500, 
    //     description:"eeeeeeee",
    //    qtyInCart : 0
       
    // }           
]

export const productReducer = (state = products, action)=>{
    switch (action.type){
        case ("DECREASEQTY"):
            const newState = [...state]
            newState[action.id].qty -= 1
            return newState
        
        case ("ADDQTY"):
            const newState1 = [...state]
            newState1[action.id].qty += 1
            return newState1
    }
    return products
}


import React from 'react'
import { useSelector } from 'react-redux';
import "./style.css"


export const Shopping = () => {
    const totalprice = useSelector((e) => e.cart);

    const carts= useSelector(s => s.countCart)

    console.log("carts : " , carts)
    // const name = carts.reduce((a , b) =>b.price , "")
    // console.log(name)

  return (
   <> 
   <h1 className="alert alert-success"> Shopping Total {totalprice}</h1>
           <div className='productsS'>
           {
   carts.map((e) =>

                    <div className="card" style={{ width: "18rem;", margin: "10px" }}>
 
 <div className="card-body">
 <h5 class="card-title">{e.name}</h5>
 <p class="card-text">Rs. {e.price}/-</p>

</div>
</div>
   
      
   
  )
  
  }
           </div>
 
   </>
  )
}



export default Shopping;
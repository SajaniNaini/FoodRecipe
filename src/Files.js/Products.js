import React from "react";


const Prodcuts = ({data} ) =>{
    return (
        <div>
            <div className="row"> 
            {data.map(data=>
            <div className ="card-md-4">
            <div className="card" style={{"width": "18rem"}}>
            <img class="card-img-top"  src={data.recipe.image}  alt="Card imge cap" />
            <div class="card-body">
            <center>
                <h5 class ="card-title">{data.label}</h5>
                <p class= "card-text">total Amount of calories :{Math.round (data.recipe.calories)} </p>
                <a href="#" class="btn-btn-primary">Buy</a>
            </center>
            </div>
            </div>
             </div>

            )
            }
          
            </div>
        </div>
    )
}
export default Prodcuts;
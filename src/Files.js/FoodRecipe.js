import React, { useState } from "react";
import Prodcuts from "./Products";


const FoodRecipe = () => {
    const [search, setSearch] = useState('');
    const [data, setData] = useState([]);
    const YOUR_APP_ID = "8aecf864";
    const YOUR_APP_KEY = "b460ca299374805ea2ad4be4f6ea08la";
    
    const submithandler = e =>{
        e.preventDefault();
        fetch(`ttps://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=12&calories=591-722&health=alcohol-free`).then(   response => response.json())
     
        .then(
           data=>setData(data.hits)
        )

    }
    return(
        <div>
        <center>
            <h4>Food Recipe App</h4><br />
            <form onSubmit= {submithandler}>
             <input type="text" value={search}onChange={(e)=> setSearch(e.target.value)} /><br /><br />
             <input type="submit"  className="btn btn-primary"value= "Search"/>
            </form>
            {data.length>=1 ?<Prodcuts  data= {data}/>:null}
        </center>
        </div>
    )
}
export default FoodRecipe;
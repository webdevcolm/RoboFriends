import React from "react";
import Cards from './Cards';


const CardList = ({robots})=>{

   return(
        <div>
        { robots.map((user)=>{
                return ( 
                < Cards name={user.name}
                id={user.id} 
                email={user.email}
                key={user.id}
                />
                       )
                         }) 
                                  }
        </div>
    )
}
export default CardList


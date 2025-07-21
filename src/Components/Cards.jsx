import React from "react";

const Cards = ({name , email , id})=>{
    return (
        <div className="tc grow bg-light-green dib ma2 bw2 br3 shawdow-5 ">
            <img src={`https://robohash.org/${id}?size=200x200`}
            alt="robot friends "/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Cards
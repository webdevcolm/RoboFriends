import React from "react";

const SearchField = ({searchChange}) =>{
return (
    <div className="pa2">
    <input 
            className="pa3 ba b--green bg-lightest-blue"
            type="sereach" 
            placeholder="search robots"
            onChange={searchChange}
     />
    </div>
)
}

export default SearchField
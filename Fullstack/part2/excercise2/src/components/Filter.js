import React from "react";

const Filter = (props) =>{
    return(
        <div>
            filter shown with a <input value={props.name} onChange={props.onChange}/>
        </div>
    );
}

export default Filter;
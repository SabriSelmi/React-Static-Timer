import React from "react";

const Mintime =({aff})=>{
    return (<div>{aff.minute<10? '0'+aff.minute+' :' : aff.minute+' :'}</div>)
}
export default Mintime;

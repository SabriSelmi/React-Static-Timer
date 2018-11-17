import React from "react";

const Hourtime=({aff})=>{
    return (<div>{aff.hour<10? '0'+aff.hour+' :' : aff.hour+' :'}</div>)
}
export default Hourtime;

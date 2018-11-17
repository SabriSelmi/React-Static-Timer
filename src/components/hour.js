import React from "react";

const Hourtime=({aff})=>{
    return (<div>{aff.hour<9? '0'+aff.hour+':' : aff.hour+':'}</div>)
}
export default Hourtime;
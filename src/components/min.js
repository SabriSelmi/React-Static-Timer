import React from "react";

const Mintime =({aff})=>{
    return (<div>{aff.minute<9? '0'+aff.minute+':' : aff.minute+':'}</div>)
}
export default Mintime;
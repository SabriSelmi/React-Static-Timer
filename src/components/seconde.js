import React from "react";


    const Secondetime=({aff})=>{
        return (<div>{aff.seconde<10? '0'+aff.seconde : aff.seconde}</div>)
    }

export default Secondetime;

import React from "react";


    const Secondetime=({aff})=>{
        return (<div>{aff.seconde<9? '0'+aff.seconde : aff.seconde}</div>)
    }

export default Secondetime;

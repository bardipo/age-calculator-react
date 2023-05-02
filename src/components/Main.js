import React from "react"


export default function Main(props){

    return(
        <div className="main-text">
            <h1 className="text-year"><span>{props.getAgeUser.year > 0 ? props.getAgeUser.year : "--"}</span> years</h1>
            <h1 className="text-month"><span>{props.getAgeUser.month > 0 ? props.getAgeUser.month : "--"}</span> months</h1>
            <h1 className="text-day"><span>{props.getAgeUser.day > 0 ? props.getAgeUser.day : "--"}</span> days</h1>
        </div>
    )


}
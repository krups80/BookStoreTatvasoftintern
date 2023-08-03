import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Booklist= () => {
    const  navigate = useNavigate()

    const handleButtonClick = () => {
        navigate('/')
    }
    return(
    <>
    <div>This is Books list</div>
    {/* <button onClick={handleButtonClick}>Click here</button> */}
    <Button variant="contained" onClick={handleButtonClick}>Click here</Button>
    </>
    )
}

export default Booklist
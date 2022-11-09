import React from 'react'
import {useNavigate} from 'react-router-dom';

const Header = () => {

    const nav = useNavigate();



    return (
        <h3 onClick={()=>{nav('/main')}}>JS(B)</h3>
    )
}

export default Header
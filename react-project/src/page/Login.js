import axios from 'axios';
import React from 'react'
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const idRef = useRef();
    const pwRef = useRef();
    
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        let loginData = {
            id:idRef.current.value,
            pw:pwRef.current.value
        }

        let url = 'http://127.0.0.1:3001/setData'
        axios.post(url,{
            user : loginData
        })
        .then((res)=>{
            if(res.data.result === 'loginSuccess' ){
                console.log(res)
                navigate('/')
            }
            else{
                console.log("x")
            }
        })
        .catch(()=>{
            console.log('catch')
        })
    }




    return (
        <div>
            <h3>로그인</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" ref={idRef} name="id" placeholder='ID를 입력하시오'></input><br/>
                <input type="password" ref={pwRef} name="pw" placeholder='PW를 입력하시오'></input><br/>
                <input type="submit" value='로그인'></input>
            </form>
        </div>
    )
}

export default Login
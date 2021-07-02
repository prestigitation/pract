import React from 'react'
import axios from 'axios'
import './index.css'

const Dashboard= () => {
    async function register() {
        console.log('axaxx')
        await fetch('http://localhost:8000/register',{
            method : 'POST',
            mode : 'cors',
            headers : {
            'Access-Control-Allow-Origin': '*',
            "Content-Type": "application/json",
            'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE',
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
        }}).then(res => res.json()).then(data => console.log(data))
    }
    return (
        <>
        <div> axaxaxxaxaxaaxaxax</div>
        <button className='btn' onClick={() => register()}>Отправить </button>
        </>
    );
} ;

// useParams
export default Dashboard
import axios from 'axios'
import React, { useState,useEffect } from 'react'
// import firebaseDB from './firebase'  
const Home = () => {
    const [data, setData] = useState({
        firstname: '',
        lastname: '',
        email: ''
    })
    useEffect(() => {

    },[])
    // const.log [getData,setGetData] = useState({})
    const {firstname,lastname,email} = {...data}
    const changeHandler = e => {
        setData({...data,[e.target.name]:e.target.value})
    }
    const submitHandler = async(e) => {
        e.preventDefault();
        console.log(data)
        await axios.post("https://test-1a58b-default-rtdb.firebaseio.com/test.json", data,
        err => {
            if (err){
                console.log(err);
            }
            else{alert("data added")
            }
        setData({
            firstname: '',
            lastname: '',
            email: '' 
        })
        }
        )

    }
    return (    
        <div>
        <center>
            <h2 style={{"textAlign":"center"}}>Register  Form</h2> <br />
            <form className='from-horizontal' onSubmit={submitHandler} autoComplete="off">
                <div className='form-group'>
                    <label className='control-label col-sm-2'>First Name</label>
                    <div className='col-sm-4'>
                        <input  type='text' 
                        className='form-control' 
                        placeholder='First Name' 
                        name='firstname' 
                        value={firstname} 
                        onChange={changeHandler} />
                    </div>
                </div>

                <div className='form-group'>
                    <label className='control-label col-sm-2'>Last Name</label>
                    <div className='col-sm-4'>
                        <input type='text'
                        className='form-control'
                        placeholder='Last Name'
                        name='lastname'
                        value={lastname}
                        onChange={changeHandler} />
                    </div>

                    <div className='from-group'>
                        <label className='control-label col-sm-2'> Email:</label>
                        <div className='col-sm-4'>
                            <input type='email' 
                            className='form-control' 
                            placeholder='Enter Email' 
                            name='email' 
                            value={email} 
                            onChange={changeHandler} />
                        </div>
                    </div>
                    <div className='form-group'>
                        <div className='col-sm-offset-2 col-sm-10'>
                            <input type='submit' className='btn btn-success' value='submit'  />
                        </div>
                    </div>

                </div>
            </form>
        </center>
        </div>
    )
}

export default Home;
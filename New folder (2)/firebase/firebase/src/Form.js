import React, {useState} from "react";
import axios from 'axios'

const Form = () => {
    const [data, setData] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        message: ""
    });
    const {name, email, phone, address, message} = data;

    const getUserData = e => {
        setData({ ...data,[e.target.name]: e.target.value})
    };

    const submitHandler = e => {
        e.preventDefault();
        console.log(data)
        axios.post('https://netflix-clone-e4dd6-default-rtdb.firebaseio.com/register.json',
        data).then(() => alert("summited succussfully"))

    }
    
    
    return(
        <div>
            <center >
                    <form autoComplete='off' onSubmit={submitHandler}> FORM
                        <input type="text" name="name" value={name} placeholder="Enter your name" onChange={getUserData} /><br />
                        <input type="email" name="email" value={email} placeholder="Enter your email" onChange={getUserData} /><br />
                        <input type="phone" name="phone" value={phone} placeholder="Enter your phone number " onChange={getUserData} /><br />
                        <input type="address" name="address" value={address} placeholder="Enter your address" onChange={getUserData} /><br />
                        <input type="message" name="message" value={message}placeholder="Enter your message" onChange={getUserData} /><br />
                        <input type="submit" name="submit" /><br/>
                    </form>
                </center>
        </div>
    )
}

export default Form;
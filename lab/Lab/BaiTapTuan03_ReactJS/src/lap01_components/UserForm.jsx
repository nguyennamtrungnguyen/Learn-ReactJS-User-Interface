import React, { useState } from 'react'
import './UserForm.css'

const UserForm = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        age: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target;

        setUser({
            ...user,
            [name]: value
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user);
    }
    return (
        <div className='main'>
            <form className='form' action={handleSubmit}>
                <div className='header'>
                    <h1 id='title'>Vui Lòng Điền Thông Tin</h1>
                </div>
                <div className="content">
                    <label htmlFor="name">Name:</label>
                    <input className='input-infor' type="text" name='name' value={user.name} onChange={handleChange} />

                    <label htmlFor="email" >Email:</label>
                    <input className='input-infor' type="email" name='email' value={user.email} onChange={handleChange} />

                    <label htmlFor="age">Age</label>
                    <input className='input-infor' type="number" name='age' value={user.age} onChange={handleChange} />

                    <div className="footer">
                        <button className='btn' onClick={(e) => handleSubmit(e)}>Send Information</button>
                    </div>
                </div>

                <div className="export-infor">
                    <span className='result' id='name'>{`Tên của bạn: ${user.name}`}</span>
                    <span className='result' id='email'>{`Email của bạn: ${user.email}`}</span>
                    <span className='result' id='age'>{`Tuổi của bạn: ${user.age}`}</span>
                </div>
            </form>
        </div>
    )
}

export default UserForm

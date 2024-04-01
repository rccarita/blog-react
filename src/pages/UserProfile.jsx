import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Avatar from '../assets/img/avatar5.jpg'
import { FaEdit, FaCheck } from 'react-icons/fa'

const UserProfile = () => {
    const [avatar, setAvatar] = useState(Avatar)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [currentPassword, setCurrentPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmNewPassword, setConfirmNewPassword] = useState('')


    return (
        <section className="profile">
            <div className="container profile__container">
                <Link to={'/myposts/sfs'} className='btn'>My posts</Link>

                <div className="profile__details">
                    <div className="avatar__wrapper">
                        <div className="profile__avatar">
                            <img src={avatar} alt="" />
                        </div>
                        {/* Form to update avatar */}
                        <form className='avatar__form' action="">
                            <input type="file" name='avatar' id='avatar' onChange={e => setAvatar(e.target.files[0])}
                                accept='png, jpg, jpeg' />
                            <label htmlFor="avatar"><FaEdit /></label>
                        </form>
                        <button className='profile__avatar-btn'><FaCheck /></button>
                    </div>
                    <h1>Sydney Sweeney</h1>
                    {/* Form to update user details */}
                    <form className='form profile__form' action="">
                        <p className="form__error-message">This is an error message</p>
                        <input type="text" placeholder='Full Name' value={name} onChange={e => setName(e.target.value)}/>
                        <input type="text" placeholder='Email' value={email} onChange={e => setEmail(e.target.value)}/>
                        <input type="text" placeholder='Current Password' value={currentPassword} onChange={e => setCurrentPassword(e.target.value)}/>
                        <input type="text" placeholder='New Password' value={newPassword} onChange={e => setNewPassword(e.target.value)}/>
                        <input type="text" placeholder='Confirm New Password' value={confirmNewPassword} onChange={e => setConfirmNewPassword(e.target.value)}/>
                        <button className='btn primary' type='submit'>Update my details</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default UserProfile
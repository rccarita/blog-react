import React from 'react'
import { Link } from 'react-router-dom'
import Avatar from '../assets/img/avatar.jpg'

const PostAuthor = () => {
    return (
        <Link to={`/posts/users/sdfsdf`} className='post__author'>
            <div className="post__author-avatar">
                <img src={Avatar} alt="avatar" />
            </div>
            <div className="post__author-details">
                <h5>By: Rue Ccarita</h5>
                <small>Just Now</small>
            </div>
        </Link>
    )
}

export default PostAuthor
import React from 'react'
import { Link } from 'react-router-dom'
import '@fortawesome/fontawesome-free/css/all.css';

export default function Social() {
return (
    <div className='space-x-5'>
        <a href="https://facebook.com" >
            <i className="fab fa-facebook"></i>
        </a>
        <a href="https://twitter.com" >
            <i className="fab fa-twitter"></i>
        </a>
        <a href="https://linkedin.com" >
            <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://yourwebsite.com" >
            <i className="fas fa-globe"></i>
        </a>
    </div>
)
}

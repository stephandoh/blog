import React from 'react'
import './Signin.css'
import fb from './images/fb.jpg'
import twitter from './images/twitter.png'
import linkedin from './images/linkedin.png'
import instagram from './images/instagram.png'

function Signin() {
    const handleClick = () => {
        
    }
    return (
        <div className = 'cont'>
            <div className="form sign-in">
                <h2>Sign In</h2>
                <label>
                    <span>Email Address</span>
                    <input type="email" name="email"/>
                </label>
                <label>
                    <span>Password</span>
                    <input type="password" name="password"/>
                </label>
                <button className="submit" type="button" onClick = {handleClick}>Sign In</button>
                <p class="forgot-pass">Forgot Password ?</p>
            </div>
            <div className="social-media">
                <ul>
                    <img src={fb}/>
                    <li><img src={twitter}/></li>
                    <li><img src={linkedin}/></li>
                    <li><img src={instagram}/></li>
                </ul>
            </div>
            <div className="sub-cont">
                <div className="img">
                    <div className="img-text m-up">
                        <h2>New here?</h2>
                        <p>Sign up and discover great amount of new opportunities!</p>
                    </div>
                    <div className="img-text m-in">
                        <h2>One of us?</h2>
                        <p>If you already has an account, just sign in. We've missed you!</p>
                    </div>
                    <div className="img-btn">
                        <span class="m-up">Sign Up</span>
                        <span class="m-in">Sign In</span>
                    </div>
                </div>
                <div classname="form sign-up">
                    <h2>Sign Up</h2>
                    <label>
                        <span>Name</span>
                        <input type="text"/>
                    </label>
                    <label>
                        <span>Email</span>
                        <input type="email"/>
                    </label>
                    <label>
                        <span>Password</span>
                        <input type="password"/>
                    </label>
                    <label>
                        <span>Confirm Password</span>
                        <input type="password"/>
                    </label>
                    <button type="button" className="submit" >Sign Up Now</button>
                </div>
            </div>
        </div>
    )
}

export default Signin;

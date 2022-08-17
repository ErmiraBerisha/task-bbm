import "./NewsletterSection.css"

import React, { useState } from 'react'

const NewsletterSection = () => {
    const [email, setEmail]=useState('')
    const [error, setError]=useState(false)
    const [success, setSuccess]=useState(false)


    const handleSubmit=(e)=>{
       e.preventDefault();
        if (email.length===0) {
            setError(true)
            setSuccess(false)  
        }
        else{
            setSuccess(true)
        } 
    }


  return (
    <div className="newsletter-section">
        <div className="form-section">
            <div className="wrapper">
                <div className="right-side">
                    <h3>Get a gift box</h3>
                    <button>Get Started</button>
                </div>
                <div className="left-side">
                    <h5>LET'S TALK</h5>
                    <h3>Our newsletter</h3>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <input onChange={e=>setEmail(e.target.value)} type="email" placeholder="johndoe@hotmail.com"/>
                            {error&&email.length<=0?<label>E-mail cant be empty</label>:""}
                            {success&&email.length!==0?<label>Thank you for subscribing!</label>:""}
                            <button>Sign Up</button>
                            
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div className="shape1">


        </div>
        <div className="shape2">

        </div>
    </div>
  )
}

export default NewsletterSection
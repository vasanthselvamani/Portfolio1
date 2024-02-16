import React from 'react';
import "./error.css";


const Errorpage = () => {
  return (
    <section className="home section error__landing">
        <div className="container error">
        <div class="error__page"> 
        <h1 className='section__title'>We are sorry, page not found</h1>
        <div className="button__flex">

        <a href="/" className='error__home button'>Back to homepage</a>
        </div>
        </div>
       <h1 class="fof">404</h1>
           
        </div>
    </section>
  )
}

export default Errorpage
import React from 'react'
// arrow functions
const AboutMe=()=>{
  return (
    <div className='container py-5'>
        <div className='row'>
            <div className='col-lg-6 col-xm-12'>
                <div className='photo-wrap mb-5'>
                    <img className='profile-img' src="https://source.unsplash.com/random" alt="" />
                </div>
            </div>

            <div className='col-lg-6 col-xm-12'>
                 <h1 className='about-heading'>About Me</h1>
                 <p className='p-text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti debitis id temporibus quas ducimus, placeat deserunt unde tempore voluptates dignissimos voluptas non est eligendi consequuntur sunt magnam dicta delectus eos necessitatibus illum adipisci rerum. Animi aperiam adipisci sapiente voluptatum laboriosam natus ab possimus excepturi ea repudiandae!</p>
            </div>

        </div>

    </div>
  )
}

export default AboutMe
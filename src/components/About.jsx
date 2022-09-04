import React from 'react'

const About = () => {
  return (
    <div name="about"
    className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4'>
                   About 
                </p>
            </div>
            <p className='text-xl mt-20'>
            Nadjm Boudjellal is a software developer, computer science engineer, who is committed to professionalism, highly organized, and able to see the big picture while paying attention to small details.
            </p>
            <br/>
            <p className='text-xl'>
            Nadjm Boudjellal is a software developer, computer science engineer, who is committed to professionalism, highly organized, and able to see the big picture while paying attention to small details.
            </p>
        </div>
    </div>
  )
}

export default About
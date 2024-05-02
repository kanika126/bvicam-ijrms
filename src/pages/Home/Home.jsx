import React from 'react';
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className='home-page'>
        <header className='h-screen min-h-screen flex items-center justify-center text-white bg-gray-900'>
            <div className='container mx-auto text-center'>
                <h2>Welcome To</h2>
                <h1 className='text-4xl font-semibold'>IJRMS</h1>
                <p className='max-w-md mx-auto mt-4'>International Journal of Research in Multidisciplinary Studies (IJRMS) , ISSN 0973-5658, is a bi-annual peer-reviewed refereed research journal of Bharati Vidypeeth’s Institute of Computer Applications and Management (BVICAM), New Delhi, published by The Institution of Media Professionals (IMP), New Delhi.</p>
            </div>
        </header>

        <div className="py-5">
            {/* Add your additional content here */}
        </div>
    </div>
  )
}

export default Home;

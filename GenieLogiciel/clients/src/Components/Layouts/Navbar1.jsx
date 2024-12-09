import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import { FaTime } from 'react-icons';


const Navbar1 = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    
    const content =
        <>

            <div className="absolute left-0 right-0 block w-full transition lg:hidden top-16 bg-slate-900 ">
                <ul className='p-20 text-xl text-center'>
                    <Link  to="/">
                        <li className='my-4 border-b border-blue-950 hover:bg-blue-900 hover:rounded '>Home</li>
                    </Link>

                    <Link  to="/event">
                        <li className='my-4 border-b border-blue-950 hover:bg-blue-900 hover:rounded '>Eventy</li>
                    </Link>

                    <Link  to="/a_propos">
                        <li className='my-4 border-b border-blue-950 hover:bg-blue-900 hover:rounded '>A propos</li>
                    </Link>

                    <Link  to="/contact">
                        <li className='my-4 border-b border-blue-950 hover:bg-blue-900 hover:rounded '>Contact</li>
                    </Link>
                </ul>
            </div>

        </>
    return (
        <nav>
            <div className='z-20 flex justify-between flex-1 px-20 py-4 text-white shadow-lg bg-blue-950 h-10vh lg:py-5 backdrop-blur-md'>
                <div className='flex items-center flex-1 '>
                    <span className='text-3xl font-bold'>Gest Event</span>
                </div>
                <div className='justify-end hidden font-normal lg:flex md:flex lg:flex-1 items center'>
                    <div className='flex-10'>
                        <ul className='flex gap-8 mr-16 text-[18px]'>
                            <Link to="/">
                                <li className='transition border-b-2 cursor-pointer hover:text-yellow-400 border-blue-950 hover:border-yellow-400'>Home</li>
                            </Link>

                            <Link to="/event">
                                <li className='transition border-b-2 cursor-pointer hover:text-yellow-400 border-blue-950 hover:border-yellow-400'>Eventy</li>
                            </Link>

                            <Link to="/a_propos">
                                <li className='transition border-b-2 cursor-pointer hover:text-yellow-400 border-blue-950 hover:border-yellow-400'>A propos</li>
                            </Link>

                            <Link to="/contact">
                                <li className='transition border-b-2 cursor-pointer hover:text-yellow-400 border-blue-950 hover:border-yellow-400'>Contact</li>
                            </Link>
                        </ul>

                    </div>
                </div>

                <div>
                    {click && content}
                </div>
                <button className='block transition sm:hidden ' onClick={handleClick}>
                    <img src="" alt="" />
                </button>
            </div>
        </nav>
    );
};

export default Navbar1;
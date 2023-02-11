import React, {useState} from 'react';
import Link from "next/link";
import {useRouter} from "next/router";
import {BsSearch} from "react-icons/bs";

const Header = () => {
     const router = useRouter()
     const [searchTerm, setSearchTerm] = useState<string>(router.query.query as string)
     const SearchPost = () =>{

     }

     return (
          <div className='bg-white text-gray-200 shadow transition border-b-2 border-gray-300 border-solid  w-full h-16 sm:h-32 flex items-center justify-center px-4 fixed z-10'>
               <div className='max-w-screen-xl w-screen flex sm:flex-col-reverse sm:w-full sm:h-full sm:justify-evenly items-center justify-center'>
                    <div className='flex w-4/5 sm:w-full sm:h-16 sm:h-full sm:flex sm: items-center'>
                         <Link href='/' passHref className="sm:hidden">
                              <h1 className='text-indigo-500 text-center font-extrabold sm:hidden text-3xl hover:cursor-pointer hover:text-blue-700'>Comic Vine App</h1>
                         </Link>
                         <div className={`${router.pathname === '/post/new' && 'hidden'} bg-gray-100 p-1 border-2 border-solid border-gray-600 rounded-md w-1/2 mx-2 flex sm:h-3/4 sm:items-center sm:justify-center  md:w-80`}>
                              <input
                                   value={searchTerm}
                                   onChange={(e) => setSearchTerm(e.target.value)}
                                   type='text'
                                   placeholder='Search......'
                                   className='p-1 bg-gray-100 ml-2 h-8 w-4/5 flex-1 outline-none text-black  '
                              />
                              <div className='hover:bg-gray-300 rounded'>
                                   <button disabled={searchTerm === ''} className='p-2' onClick={SearchPost}>
                                        <BsSearch color='black'/>
                                   </button>
                              </div>
                         </div>
                         <div className='w-full flex justify-end hidden '>
                              <button disabled={searchTerm === ''} className='p-2 font-bold text-2xl'>
                                   <BsSearch color='black'/>
                              </button>
                         </div>
                    </div>
                    <div className='flex sm:1/2  sm:w-full justify-end sm:justify-evenly'>
                         <div className="w-1/2 flex justify-start xl:hidden">
                              <Link href='/' passHref>
                                   <h1 className='text-indigo-500 text-center font-bold  text-2xl hover:cursor-pointer hover:text-blue-700'>Comic Vine App</h1>
                              </Link>
                         </div>
                         <div className="flex">

                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Header;

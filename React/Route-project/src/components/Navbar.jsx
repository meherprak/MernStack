import React from 'react'
import {Navlink} from 'react-router-dom'
const Navbar = () => {
  const Linksdata =[
      {
        title :'Home',
        path:'/'

      },
      {
        title:'Products',
        path:'/'

      },
      {
        title:'Contact',
        path:'/'
      }


  ]

  return (
  <>
    <div className='w-screen h-14 shadow-purple-500 shadow-md flex flex-row justify-center items-center'>
      <div className='w-[40%] flex justify-start items-center  font-bold text-2x1 text-purple-500'>
        Meher Store
      </div>
      <div className='w-[40%] flex justify-end items-center'>
          {/* <ul className='w-full flex flex-row justify-end items-center list-none gap-8 font-semibold'>
            <li>Home</li>
            <li>Products</li>
            <li>Contact</li>
          </ul>
           */}

           <div className='W-full justify-end items-center flex flex-row gap-8 font-semibold' >
            {Linksdata.map((link,index) =>(
              <Navlink to ={link.path} key={index} className='h-[65%] hover:bg-purple-400 hover:text-white flex justify-center items-center' >
                {link.title}
              </Navlink>

            ))}

           </div>
      </div>
    </div>
  </>
  )
}

export default Navbar
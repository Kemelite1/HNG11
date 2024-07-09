
import { Link} from 'react-router-dom';
import { useState } from 'react';

import {ReactComponent as TimbuCarrt} from "../../assets/fonts/TimbuCart.svg"
import {ReactComponent as HAmburger} from "../../assets/fonts/TimbuBurger.svg"
import {ReactComponent as Search} from "../../assets/fonts/TimbuSearch.svg"
import {ReactComponent as CAncel} from "../../assets/fonts/TimbuX.svg"
import {ReactComponent as Arrow} from "../../assets/fonts/TimbuArrow.svg"
import {ReactComponent as Profiles} from "../../assets/fonts/TimbuProfile.svg" 
import {ReactComponent as LoginProfile} from "../../assets/fonts/loginProfile.svg" 
import {ReactComponent as Box} from "../../assets/fonts/Box.svg" 
import {ReactComponent as Truck} from "../../assets/fonts/Truck.svg" 
import {ReactComponent as QuestionMark} from "../../assets/fonts/QuestionMark.svg" 


const ToolBar = () => {
// const location =  useLocation();
// const pathname = location.pathname;

const [isOpen, setIsOpen] = useState(false);
const toggleMenu = () => setIsOpen(!isOpen);


  return (
    <nav className="bg-white text-white flex items-center justify-between md:gap-2 font-Inter h-20 top-7 left-0  z-50  " >
      
          <div className="flex justify-center items-center  gap-8 " id='main-div'>
            <div className='flex items-center pl-8'>
              <span className="font-bold text-xl md:text-4xl whitespace-nowrap text-primary font-plus-jakarta-bold font-['Plus Jakarta Sans'] ">Timbu cloud shop</span>
            </div>
          </div>

            <div className='flex md:hidden items-center  gap-3 pr-3' id='hamburger'>
                    {isOpen ? (
                      <>
                        <CAncel onClick={toggleMenu} className='' />
                      </>
                    ) : (
                      <>
                        <Search />
                        <TimbuCarrt />
                        <HAmburger onClick={toggleMenu} />
                      </>
                    )}
            </div>

        

        {isOpen && (
          <div className="md:hidden absolute z-50 left-1/2 bg-white space-y-8 text-base font-semibold  px-4 mt-[41rem] shadow-md overflow-hidden text-black flex flex-col justify-around " style={{ width: '50%' }}>
              <div className='flex flex-col gap-6 pt-10 '>
                    <div className='flex justify-between items-center '>
                      <p>All Product</p>
                      <Arrow/>
                    </div>

                    <div className='flex justify-between items-center '>
                      <p>Men</p>
                      <Arrow/>
                    </div>

                    <div className='flex justify-between items-center '>
                      <p>Women</p>
                      <Arrow/>
                    </div>

                    <div className='flex justify-between items-center '>
                      <p>Kids </p>
                      <Arrow/>
                    </div>
              </div>

              <div className='flex flex-col gap-5 pt-14 pb-32 font-normal'>
                <div className='flex gap-4 text-base'>
                  <LoginProfile/>
                  <p className=''>Login/sign up</p>
                </div>
                
                <div className='flex gap-4 text-base'>
                  <Box/>
                  <p >Order status</p>
                </div>

                <div className='flex gap-4 text-base'>
                  <Truck/>
                  <p>Return order</p>
                </div>

                <div className='flex gap-4 text-base'>
                  <QuestionMark/>
                  <p>FAQ</p>
                </div>
              </div>
          </div>
        )}




               <ul className="hidden md:flex gap-16 text-sm md:text-xl text-black">
                <li>
                  <Link to="/" className={``}>All Products</Link>
                </li>
                <li>
                  <Link to="/products" className={``}>Men</Link>
                </li>
                <li>
                  <Link to="/about" className={``}>Women</Link>
                </li>
                <li>
                  <Link to="/contact" className={``} >
                    Kids
                  </Link>
                </li>
              </ul>

          <div className="hidden md:flex items-center gap-6 pr-16" id="interactions">
            <Search />
            <Profiles/>
            <TimbuCarrt />
          </div>

          

    </nav>

  );
};

export default ToolBar;
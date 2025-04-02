import React, { useEffect, useState } from 'react'
import logo_big from '../assets/logo_big.png'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { PiShoppingCartFill } from "react-icons/pi";
import '../App.css'
import { useCard } from "../context/CardContext";

const Navbar = () => {

    const [isNavbarVisible, setIsNavbarVisible] = useState(false);
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScroll(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    const { count } = useCard();


    return (
        <>
            <div className={`shadow-2xs flex justify-between items-center xl:px-30 lg:px-15 md:px-10 px-7 py-2.5 z-10 sticky top-0 max-w-[1521px] mx-auto transition-all duration-300 ${scroll ? "bg-white/30 backdrop-blur-lg" : "bg-white"}`}>
                <div className='flex items-center gap-2'>
                    <img className='md:w-[60px] w-[50px]' src={logo_big} alt="logo_big" />
                    <h1 className='font-semibold text-2xl md:text-3xl'>SHOPPER</h1>
                </div>
                <div className='hidden lg:flex gap-1 text-[#212020] text-[17px]' >
                    <NavLink className={({ isActive }) => `hover:bg-[#ff4141] hover:text-white transition duration-300 px-5 py-2 rounded-3xl ${isActive ? 'text-red-600' : ''}`} to="/">Shop</NavLink>
                    <NavLink className={({ isActive }) => `hover:bg-[#ff4141] hover:text-white transition duration-300 px-5 py-2 rounded-3xl ${isActive ? 'text-red-600' : ''}`} to="/men">Men</NavLink>
                    <NavLink className={({ isActive }) => `hover:bg-[#ff4141] hover:text-white transition duration-300 px-5 py-2 rounded-3xl ${isActive ? 'text-red-600' : ''}`} to="/women">Women</NavLink>
                    <NavLink className={({ isActive }) => `hover:bg-[#ff4141] hover:text-white transition duration-300 px-5 py-2 rounded-3xl ${isActive ? 'text-red-600' : ''}`} to="/kids">Kids</NavLink>
                </div>
                <div className='text-[#212020] text-[17px] flex gap-5 lg:gap-7 items-center'>
                    <div className='hidden gap-5 lg:gap-7 md:flex'>
                        <Link to='/login'><button className='border-1 border-[#00000069] px-10 py-3 rounded-4xl'>Login</button></Link>
                        <Link to='/card'><button className='hover:bg-[#efecec] hover:transition duration-300 px-3 rounded-4xl py-3 relative'><PiShoppingCartFill size={28} /><p className='bg-red-600 rounded-2xl text-[12px] absolute top-1 right-0 px-[5px] text-white'>{count}</p></button></Link>
                    </div>
                    <div className={`flex flex-col ${isNavbarVisible ? 'gap-0' : 'gap-1'}  lg:hidden`} onClick={function () {
                        setIsNavbarVisible(!isNavbarVisible);
                    }}>
                        <span className={`w-[20px] border-2 ${isNavbarVisible ? 'rotate-45 absolute transition duration-250' : 'rotate-0 transition duration-250'}`}></span>
                        {!isNavbarVisible && <span className='w-[20px] border-2'></span>}
                        <span className={`w-[20px] border-2 ${isNavbarVisible ? '-rotate-45 transition duration-250' : 'rotate-0 transition duration-250'}`}></span>
                    </div>
                </div>
            </div>

            <div className={`h-[100vh] fixed right-0 z-5  w-[100vw] top-0 flex justify-end items-center ${isNavbarVisible ? 'sliderX' : 'slider'} transition duration-400 `} onClick={function () {
                setIsNavbarVisible(!isNavbarVisible)
            }}>
                <div className='shadow-2xl flex flex-col px-3 gap-3 h-[100vh] w-[60%] justify-center bg-white' onClick={function (e) {
                    e.stopPropagation();
                }}>
                    <NavLink className={({ isActive }) => (
                        isActive ? 'text-white bg-black' : 'bg-[#f7f2f2]')} to='/'><button className='w-[100%] py-3' >Shop</button></NavLink>
                    <NavLink className={({ isActive }) => (isActive ? 'text-white bg-black' : 'bg-[#f7f2f2]')} to='/men' > <button className='w-[100%] py-3' >Men</button></NavLink>
                    <NavLink className={({ isActive }) => (
                        isActive ? 'text-white bg-black' : 'bg-[#f7f2f2]')} to='/women' > <button className='w-[100%] py-3' >Women</button></NavLink>
                    <NavLink className={({ isActive }) => (
                        isActive ? 'text-white bg-black' : 'bg-[#f7f2f2]')} to='/kids' > <button className='w-[100%] py-3' >Kids</button></NavLink >
                    <NavLink className={({ isActive }) => (
                        isActive ? 'text-white bg-black' : 'bg-[#f7f2f2]')} to='/login' > <button className='w-[100%] py-3' >Login</button></ NavLink >
                    <NavLink className={({ isActive }) => (
                        isActive ? 'text-white bg-black' : 'bg-[#f7f2f2]')} to='/card' > <button className='w-[100%] py-3' >Card</button></ NavLink>
                </div >
            </div >
        </>
    )
}

export default Navbar
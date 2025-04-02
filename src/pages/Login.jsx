import React, { useState } from 'react'
import Navbar from '../components/Navbar'
const Login = () => {

    const [isVisible, setIsVisible] = useState(true);
    const [loginValue, setLoginValue] = useState({
        email: '',
        password: '',
    })
    const [loginError, setLoginError] = useState({
        email: '',
        password: '',
    })

    function handleChange(e) {
        setLoginValue((prev) => ({ ...prev, [e.target.name]: e.target.value }));
        setLoginError((prev) => ({ [e.target.name]: '' }));
    }

    function handleSubmit(e) {
        e.preventDefault();

        let errors = {}

        if (!e.target.email.value) {
            errors.email = 'Please fill the email feild!'
        }
        if (!e.target.password.value) {
            errors.password = 'Please fill the password feild!'
        }

        setLoginError(errors);

        if (Object.keys(errors).length > 0) {
            return
        }

        alert('submitted');
        console.log(loginValue);
        setLoginValue({ email: '', password: '' });
    }


    const [signupValue, setSignupValue] = useState({
        name: '',
        email: '',
        password: '',
    })
    const [signupError, setSignupError] = useState({
        name: '',
        email: '',
        password: '',
    })

    function handleChange2(e) {
        setSignupValue((prev) => ({ ...prev, [e.target.name]: e.target.value }));
        setSignupError((prev) => ({ [e.target.name]: '' }));
    }

    function handleSubmit2(e) {
        e.preventDefault();
        let errors2 = {}

        if (!e.target.name.value) {
            errors2.name = 'Please fill the name feild!'
        }
        if (!e.target.email.value) {
            errors2.email = 'Please fill the email feild!'
        }
        if (!e.target.password.value) {
            errors2.password = 'Please fill the password feild!'
        }

        setSignupError(errors2);

        if (Object.keys(errors2).length > 0) {
            return
        }

        alert('submitted');
        console.log(signupValue);
        setSignupValue({ name: '', email: '', password: '' });
    }

    return (
        <div>
            <Navbar />
            <div className='max-h-[100vh] max-w-[100vw] bg-gradient-to-b from-[#eaa7fb]/30 to-[#ffffff] py-10'>
                {isVisible ?
                    <div className='sm:max-w-[580px] flex flex-col gap-10 py-8 px-6 bg-white mx-auto max-w-[90%] shadow-2xl'>
                        <h1 className='text-4xl font-medium'>Login</h1>
                        <form className='flex flex-col gap-5' onSubmit={handleSubmit}>
                            <div>
                                <input className='py-3 px-4 border-1 border-[#0000004b] text-[18px] w-[100%] [@media(max-width:500px)]:text-[16px]' type="text" name='email' value={loginValue.email} onChange={handleChange} placeholder='Email Address' />
                                {loginError.email && <p className='text-red-500 font-medium pl-2 text-[14px] mt-1'>{loginError.email}</p>}
                            </div>
                            <div>
                                <input className='py-3 px-4 border-1 border-[#0000004b] text-[18px] w-[100%] [@media(max-width:500px)]:text-[16px]' type="password" name='password' value={loginValue.password} onChange={handleChange} placeholder='Password' />
                                {loginError.password && <p className='text-red-500 font-medium pl-2 text-[14px] mt-1' >{loginError.password}</p>}
                            </div>
                            <input className='py-3 px-4 text-[18px] cursor-pointer bg-[#ff4141] text-white [@media(max-width:500px)]:text-[16px]' type="submit" value="Continue" />
                        </form>
                        <p className='text-[18px] text-[#3a3737] [@media(max-width:500px)]:text-[16px]'>Don't have an account? <span className='text-[#ff4141] font-medium text-[18px] cursor-pointer [@media(max-width:500px)]:text-[16px]' onClick={function () {
                            setIsVisible(!isVisible);
                            setLoginError({ email: '', password: '', });
                        }}>SignUp here</span></p>
                    </div> :
                    <div className='sm:max-w-[580px] flex flex-col gap-10 py-8 px-6 max-w-[90%] bg-white mx-auto shadow-2xl'>
                        <h1 className='text-4xl font-medium'>Sign Up</h1>
                        <form className='flex flex-col gap-5' onSubmit={handleSubmit2}  >
                            <div>
                                <input className='py-3 px-4 border-1 border-[#0000004b] text-[18px] w-[100%] [@media(max-width:500px)]:text-[16px]' type="text" name='name' value={signupValue.name} placeholder='Your Name' onChange={handleChange2} />
                                {signupError.name && <p className='text-red-500 font-medium pl-2 text-[14px] mt-1'>{signupError.name}</p>}
                            </div>
                            <div>
                                <input className='py-3 px-4 border-1 border-[#0000004b] text-[18px] w-[100%] [@media(max-width:500px)]:text-[16px]' type="text" name='email' value={signupValue.email} placeholder='Email Address' onChange={handleChange2} />
                                {signupError.email && <p className='text-red-500 font-medium pl-2 text-[14px] mt-1'>{signupError.email}</p>}
                            </div>
                            <div>
                                <input className='py-3 px-4 border-1 border-[#0000004b] text-[18px] w-[100%] [@media(max-width:500px)]:text-[16px]' type="password" name='password' value={signupValue.password} placeholder='Password' onChange={handleChange2} />
                                {signupError.password && <p className='text-red-500 font-medium pl-2 text-[14px] mt-1'>{signupError.password}</p>}
                            </div>
                            <input className='py-3 px-4 text-[18px] cursor-pointer bg-[#ff4141] text-white [@media(max-width:500px)]:text-[16px]' type="submit" value="Continue" />
                            <div className='flex items-center gap-2 text-[#3a3737]'>
                                <input type="checkbox" id='checkbox' required />
                                <label htmlFor="checkbox">By continuing, I agree to the terms of use &amp; privacy policy.</label>
                            </div>
                        </form>
                        <p className='text-[18px] text-[#3a3737] [@media(max-width:500px)]:text-[16px]'>Already have an account? <span className='text-[#ff4141] font-medium text-[18px] cursor-pointer [@media(max-width:500px)]:text-[16px]' onClick={function () {
                            setIsVisible(!isVisible);
                            setSignupError({ name: '', email: '', password: '' });
                        }}>Login here</span></p>
                    </div>}
            </div>
        </div>
    )
}

export default Login

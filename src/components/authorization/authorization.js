import { Outlet, Routes, Route } from 'react-router-dom';


import PlatformIcon from '../../assets/icons/platform-icon.svg';
import AuthorizationIcon from '../../assets/icons/authorization-page-icon.svg';

import './authorization.css';
import '../../assets/styles/main.css'

import LogIn from './log-in/log-in';
import RegistrationForm from './registration/components/registration-form/registration-form';
import RegistrationVerify from './registration/components/registration-verify/registration-verify';
import ForgotPassForm from './forgot-password/components/forgot-pass-form/forgot-pass-form';
import ForgotPassVerify from './forgot-password/components/forgot-pass-verify/forgot-pass-verify';
import NewPassword from './forgot-password/components/new-password/new-password';



export default function AuthorizationRouter() {
    const Layout = () => {
        return (
            <>
                <div className='authorization'>
                    <div className='logo-section'>
                        <div className='platform-header'>
                            <img src={PlatformIcon} alt=''></img>
                            <span>Profile logo</span>
                        </div>
                        <div className='authorization-image'>
                            <img src={AuthorizationIcon} alt=''></img>
                        </div>
                    </div>
                    <div className='authorization-content'>
                        <Outlet />
                    </div>
                </div>
            </>
        )
    }

    const AuthorizationRoutes = () => {
        return (
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route path='/' element={<LogIn />} />
                    <Route path="/registration" element={<RegistrationForm />} />
                    <Route path="/registration-verify" element={<RegistrationVerify />} />

                    <Route path="/forgot-password" element={<ForgotPassForm />} />
                    <Route path="/forgot-password-verify" element={<ForgotPassVerify />} />

                    <Route path="/new-password" element={<NewPassword />} />
                </Route>
            </Routes>
        )
    }


    return (
        <AuthorizationRoutes />
    )

}
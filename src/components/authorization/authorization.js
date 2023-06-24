import { Outlet, BrowserRouter, Routes, Route } from 'react-router-dom';


import PlatformIcon from '../../assets/icons/platform-icon.svg';
import AuthorizationIcon from '../../assets/icons/authorization-page-icon.svg';
import '../authorization/authorization.css';

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
                <div class='authorization'>
                    <div class='logo-section'>
                        <div class='platform-header'>
                            <img src={PlatformIcon} alt=''></img>
                            <span>Profile logo</span>
                        </div>
                        <div class='authorization-image'>
                            <img src={AuthorizationIcon} alt=''></img>
                        </div>
                    </div>
                    <div class='authorization-content'>
                        <Outlet />
                    </div>
                </div>
            </>
        )
    }

    const AuthorizationRoutes = () => {
        return (
            <BrowserRouter>
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
            </BrowserRouter>
        )
    }


    return (
        <AuthorizationRoutes/>
    )

}
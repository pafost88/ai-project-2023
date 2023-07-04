import { Outlet, Routes, Route } from 'react-router-dom';

import './user-settings.css';
import '../../assets/styles/main.css';
import ArrowLeft from '../../assets/icons/arrow-left-dark.svg';

import Profile from './profile/profile';
import Security from './security/security';
import Billing from './billing/billing';
import Footer from '../core/footer/footer';


export default function UserSettingsRouter() {
    const Layout = () => {
        return (
            <>
                <div className='settings-page'>
                    <div className='menu-section'>
                        <div className='menu-header'>
                            <a href='/'><img src={ArrowLeft} alt=''></img></a>
                            <span className='headline-h6'>Settings</span>
                        </div>
                        <div className='profile-menu-info'>
                            <div className='profile-menu-inner'>
                                <span className='menu-avatar'></span>
                                <div className='user-names'>
                                    <span className='bold-body-2'>Kianna Press</span>
                                    <span className='caption-regular'>@kianna</span>
                                </div>
                            </div>
                        </div>
                        <div className='menu-items'>
                            <div className='menu-items-inner'>
                                <div className='menu-nav'>
                                    <span className='overline-regular'>Personal</span>
                                </div>
                                <div className='menu-content'>
                                    <div className='menu-item'>Profile</div>
                                    <div className='menu-item'>Security</div>
                                    <div className='menu-item'>Billing</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='inner-content'>
                        <Outlet />
                        <Footer />
                    </div>
                </div>
            </>
        )
    }

    const UserSettingsRoutes = () => {
        return (
            <Routes>
                <Route path='/settings' element={<Layout />}>
                    <Route path='/settings/profile' element={<Profile />} />
                    <Route path="/settings/security" element={<Security />} />
                    <Route path="/settings/billing" element={<Billing />} />
                </Route>
            </Routes>
        )
    }

    return (
        <UserSettingsRoutes />
    )
}

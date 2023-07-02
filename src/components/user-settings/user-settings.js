import { Outlet, BrowserRouter, Routes, Route } from 'react-router-dom';

import './user-settings.css';
import ArrowLeft from '../../assets/icons/arrow-left-dark.svg'
import ProfileAvatar from '../../assets/avatars/Base.jpg'

import Profile from './profile/profile'
import Security from './security/security'
import Billing from './billing/billing'


export default function UserSettingsRouter() {
    const Layout = () => {
        return (
            <>
                <div className='settings-page'>
                    <div className='menu-section'>
                        <div className='menu-header'>
                            <a href='/'><img src={ArrowLeft} alt=''></img></a>
                            <span>Settings</span>
                        </div>
                        <div className='profile-info'>
                            <div className='profile-inner'>
                                <div className='profile-avatar'>
                                    <img scr={ProfileAvatar}></img>
                                </div>
                                <div className='user-names'>
                                    <span className='bold-body-2'>Kianna Press</span>
                                    <span className='caption-regular'>@kianna</span>
                                </div>
                            </div>
                        </div>
                        <div className='menu-items'>
                            <div className='menu-items-inner'>
                                <div className='menu-nav'>
                                    <span>Personal</span>
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

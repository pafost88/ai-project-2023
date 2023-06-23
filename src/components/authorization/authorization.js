import PlatformIcon from '../../assets/icons/platform-icon.svg';
import AuthorizationIcon from '../../assets/icons/authorization-page-icon.svg';
import LogIn from './log-in/log-in';
import '../authorization/authorization.css';

import RegistrationForm from './registration/components/registration-form/registration-form';
import RegistrationVerify from './registration/components/registration-verify/registration-verify';
import ForgotPassForm from './forgot-password/components/forgot-pass-form/forgot-pass-form';
import ForgotPassVerify from './forgot-password/components/forgot-pass-verify/forgot-pass-verify';
import NewPassword from './forgot-password/components/new-password/new-password';


export default function Authorization() {
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
                    <NewPassword/>
                </div>
            </div>
        </>
    )
}
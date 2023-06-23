import PlatformIcon from '../../assets/icons/platform-icon.svg';
import AuthorizationIcon from '../../assets/icons/authorization-page-icon.svg';
import LogIn from './log-in/log-in';


import '../authorization/authorization.css';


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
                    <LogIn/>
                </div>
            </div>
        </>
    )
}
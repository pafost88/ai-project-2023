import {Outlet, Route, Routes} from "react-router-dom";
import PlatformIcon from "../../assets/icons/platform-icon.svg";

import './pages.css'
import Form from "react-bootstrap/Form";
import Search from '../../assets/icons/search-zoom.svg';
import HomeIcon from '../../assets/icons/home.svg';
import StudyIcon from '../../assets/icons/study.svg';
import WorkIcon from '../../assets/icons/work.svg';
import BusinessIcon from '../../assets/icons/business.svg';
import WorkspaceIcon from '../../assets/icons/workspace.svg';
import More from '../../assets/icons/more-vertical.svg';
import ExtraHelp from '../../assets/icons/extra-help-icon.svg';

import InputGroup from "react-bootstrap/InputGroup";
import {WorkResult} from "./work/work-result/work-result";
import {Work} from "./work/work";
export default function PagesRouting() {

    const Layout = () => {
        return (
            <>
                <div className='app'>
                    <div className='app-menu'>
                        <div className='menu-section'>
                            <div className='menu-header'>
                                <img src={PlatformIcon} alt=''></img>
                                <span>Profile logo</span>
                            </div>
                            <div className='menu-content'>
                                <form data-bs-theme="dark">
                                    <InputGroup>
                                        <InputGroup.Text className='transparent-background search'><img src={Search} alt=''/></InputGroup.Text>
                                        <Form.Control
                                            type='search'
                                            name='search'
                                            className='transparent-background search'
                                            placeholder="Search"
                                        />
                                    </InputGroup>
                                </form>
                                <div className='menu-items'>
                                    <div className='menu-item'><img src={HomeIcon} alt='' />Dashboard</div>
                                    <div className='menu-item'><img src={WorkIcon} alt='' />Work</div>
                                    <div className='menu-item'><img src={StudyIcon} alt='' />Study</div>
                                    <div className='menu-item'><img src={BusinessIcon} alt='' />Business</div>
                                    <div className='menu-item'><img src={WorkspaceIcon} alt='' />Workspace</div>
                                </div>
                            </div>
                        </div>
                        <div className='user-section'>
                            <div className='extra-help'>
                                <img src={ExtraHelp} alt='' />
                                <span className='bold-body-2'>Need some extra help?</span>
                            </div>
                            <div className='menu-items'>
                                <div className='menu-item'><img src={HomeIcon} alt='' />Work history</div>
                                <div className='menu-item'><img src={WorkIcon} alt='' />Plans</div>
                            </div>
                            <div className='profile-section'>
                                <div className='profile-content'>
                                    <span className='menu-avatar'></span>
                                    <div className='user-names'>
                                        <span className='bold-body-2'>Kianna Press</span>
                                        <span className='caption-regular'>@kianna</span>
                                    </div>
                                </div>
                                <div>
                                    <img src={More} alt=''/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='page-content'>
                        <Outlet />
                    </div>
                </div>
            </>
        );
    }

    const PagesRouting = () => {
        return (
            <Routes>
                <Route path='/app' element={<Layout/>}>
                    <Route path='/app/work' element={<Work/>}/>
                    <Route path='/app/work/result' element={<WorkResult/>}/>
                </Route>
            </Routes>
        );
    }

    return (
        <PagesRouting/>
    )
}
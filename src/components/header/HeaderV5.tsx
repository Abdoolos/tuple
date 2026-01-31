"use client";
import useSidebarMenu from '@/hooks/useSidebarMenu';
import HeaderLogoV1 from './HeaderLogoV1';
import MainMenu from './MainMenu';
import useStickyMenu from '@/hooks/useStickyMenu';
import useMenuToggle from '@/hooks/useMenuToggle';

const HeaderV5 = () => {

    const isSticky = useStickyMenu();
    const { isOpen, openMenu, closeMenu } = useSidebarMenu();
    const { toggleSubMenu, toggleMegaMenu } = useMenuToggle();

    return (
        <>
            <header>
                <nav className={`navbar navbar-common mobile-sidenav navbar-sticky navbar-default validnavs navbar-fixed dark no-background ${isSticky ? "sticked" : ""}`}>
                    <div className="container d-flex justify-content-between align-items-center">
                        <HeaderLogoV1 openMenu={openMenu} />
                        <MainMenu isOpen={isOpen} closeMenu={closeMenu} toggleSubMenu={toggleSubMenu} toggleMegaMenu={toggleMegaMenu} />
                        <div className="attr-right">
                            <div className="attr-nav flex">
                                <ul>
                                    <li className="contact">
                                        <div className="call">
                                            <div className="icon">
                                                <i className="fa-solid fa-comments-dollar"></i>
                                            </div>
                                            <div className="info">
                                                <p>Have any Questions?</p>
                                                <h5><a href="mailto:info@crysta.com">info@atozen.com</a></h5>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={`overlay-screen ${isOpen ? "opened" : ""}`}></div>
                </nav>
            </header>
        </>
    );
};

export default HeaderV5;
"use client";
import MainMenu from './MainMenu';
import Link from "next/link";
import HeaderLogoV1 from './HeaderLogoV1';
import useStickyMenu from '@/hooks/useStickyMenu';
import useSidebarMenu from '@/hooks/useSidebarMenu';
import useMenuToggle from '@/hooks/useMenuToggle';

interface DataType {
    logoColor?: boolean;
}

const HeaderV3 = ({ logoColor = false }: DataType) => {

    const isSticky = useStickyMenu();
    const { isOpen, openMenu, closeMenu } = useSidebarMenu();
    const { toggleSubMenu, toggleMegaMenu } = useMenuToggle();

    return (
        <>
            <header>
                <nav className={`navbar mobile-sidenav navbar-sticky navbar-default validnavs navbar-fixed dark no-background ${isSticky ? "sticked" : ""}`}>
                    <div className="container-fill d-flex justify-content-between align-items-center">
                        <HeaderLogoV1 logoColor={logoColor} openMenu={openMenu} />
                        <MainMenu isOpen={isOpen} closeMenu={closeMenu} toggleSubMenu={toggleSubMenu} toggleMegaMenu={toggleMegaMenu} />
                        <div className="attr-right">
                            <div className="attr-nav">
                                <ul>
                                    <li className="button">
                                        <Link href="/contact-us">Free Trial</Link>
                                        <Link href="/contact-us">Login</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className={`overlay-screen ${isOpen ? "opened" : ""}`}></div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
};

export default HeaderV3;
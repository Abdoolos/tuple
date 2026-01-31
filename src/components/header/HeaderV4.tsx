"use client";
import HeaderTopV1 from './HeaderTopV1';
import MainMenu from './MainMenu';
import HeaderSidebarMenu from './HeaderSidebarMenu';
import HeaderLogoV3 from './HeaderLogoV3';
import HeaderSearch from './HeaderSearch';
import useStickyMenu from '@/hooks/useStickyMenu';
import useSearchBar from '@/hooks/useSearchBar';
import useSidebarMenu from '@/hooks/useSidebarMenu';
import useMenuToggle from '@/hooks/useMenuToggle';
import useSidebarInfo from '@/hooks/useSidebarInfo';

interface DataType {
    logoColor?: boolean;
}

const HeaderV4 = ({ logoColor = false }: DataType) => {

    const isSticky = useStickyMenu();
    const { openSearch, searchOpen, searchClose } = useSearchBar();
    const { isOpen, openMenu, closeMenu } = useSidebarMenu();
    const { toggleSubMenu, toggleMegaMenu } = useMenuToggle();

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { navbarClass, isSidebarOpen, addClasses, removeClasses } = useSidebarInfo();

    return (
        <>
            <HeaderTopV1 />
            <header>
                <nav className={`navbar mobile-sidenav navbar-default validnavs dark ${isSticky ? "sticked" : "no-background"}`}>
                    <HeaderSearch openSearch={openSearch} searchClose={searchClose} />
                    <div className="container d-flex justify-content-between align-items-center">
                        <HeaderLogoV3 logoColor={logoColor} openMenu={openMenu} />
                        <MainMenu isOpen={isOpen} closeMenu={closeMenu} toggleSubMenu={toggleSubMenu} toggleMegaMenu={toggleMegaMenu} />
                        <HeaderSidebarMenu removeClasses={removeClasses} isSidebarOpen={isSidebarOpen} addClasses={addClasses} searchOpen={searchOpen} />
                    </div>
                    <div className={`overlay-screen ${isOpen ? "opened" : ""}`}></div>
                </nav>
            </header>
        </>
    );
};

export default HeaderV4;
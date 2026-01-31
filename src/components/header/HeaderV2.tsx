"use client";
import MainMenu from './MainMenu';
import HeaderSidebarMenu from './HeaderSidebarMenu';
import HeaderSearch from './HeaderSearch';
import HeaderLogoV2 from './HeaderLogoV2';
import useStickyMenu from '@/hooks/useStickyMenu';
import useSearchBar from '@/hooks/useSearchBar';
import useSidebarInfo from '@/hooks/useSidebarInfo';
import useSidebarMenu from '@/hooks/useSidebarMenu';
import useMenuToggle from '@/hooks/useMenuToggle';

interface DataType {
    logoColor?: boolean;
}

const HeaderV2 = ({ logoColor = false }: DataType) => {

    const isSticky = useStickyMenu();
    const { openSearch, searchOpen, searchClose } = useSearchBar();
    const { isOpen, openMenu, closeMenu } = useSidebarMenu();
    const { toggleSubMenu, toggleMegaMenu } = useMenuToggle();

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { navbarClass, isSidebarOpen, addClasses, removeClasses } = useSidebarInfo();

    return (
        <>
            <header>
                <nav className={`${isSticky ? "sticked white" : "no-background"}  ${openSearch ? "smooth-search" : ""} navbar mobile-sidenav navbar-sticky navbar-default validnavs navbar-fixed white`}>
                    <HeaderSearch openSearch={openSearch} searchClose={searchClose} />
                    <div className="container-fill d-flex justify-content-between align-items-center">
                        <HeaderLogoV2 logoColor={logoColor} openMenu={openMenu} />
                        <MainMenu isOpen={isOpen} closeMenu={closeMenu} toggleSubMenu={toggleSubMenu} toggleMegaMenu={toggleMegaMenu} />
                        <HeaderSidebarMenu removeClasses={removeClasses} isSidebarOpen={isSidebarOpen} addClasses={addClasses} searchOpen={searchOpen} />
                    </div>
                    <div className={`overlay-screen ${isOpen ? "opened" : ""}`}></div>
                </nav>
            </header>
        </>
    );
};

export default HeaderV2;
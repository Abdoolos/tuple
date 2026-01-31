"use client";
import HeaderSidebarMenu from './HeaderSidebarMenu';
import MainMenu from './MainMenu';
import HeaderSearch from './HeaderSearch';
import HeaderLogoV1 from './HeaderLogoV1';
import useStickyMenu from '@/hooks/useStickyMenu';
import useSearchBar from '@/hooks/useSearchBar';
import useSidebarMenu from '@/hooks/useSidebarMenu';
import useSidebarInfo from '@/hooks/useSidebarInfo';
import useMenuToggle from '@/hooks/useMenuToggle';

interface DataType {
    headerClass?: string;
    logoColor?: boolean;
}

const HeaderV1 = ({ headerClass, logoColor = false }: DataType) => {

    const isSticky = useStickyMenu();
    const { openSearch, searchOpen, searchClose } = useSearchBar();
    const { isOpen, openMenu, closeMenu } = useSidebarMenu();
    const { toggleSubMenu, toggleMegaMenu } = useMenuToggle();

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { navbarClass, isSidebarOpen, addClasses, removeClasses } = useSidebarInfo();

    return (
        <>
            <header>
                <nav
                    className={`${isSticky ? "sticked" : "no-background"} ${isOpen ? "navbar-responsive" : ""} navbar mobile-sidenav navbar-sticky navbar-default validnavs navbar-fixed on menu-center no-full ${headerClass} ${openSearch ? "smooth-search" : ""}`}
                >
                    <HeaderSearch openSearch={openSearch} searchClose={searchClose} />
                    <div className="container-fill d-flex justify-content-between align-items-center">
                        <HeaderLogoV1 logoColor={logoColor} openMenu={openMenu} />
                        <MainMenu isOpen={isOpen} closeMenu={closeMenu} toggleSubMenu={toggleSubMenu} toggleMegaMenu={toggleMegaMenu} />
                        <HeaderSidebarMenu removeClasses={removeClasses} isSidebarOpen={isSidebarOpen} addClasses={addClasses} searchOpen={searchOpen} />
                    </div>
                    <div className={`overlay-screen ${isOpen ? "opened" : ""}`}></div>
                </nav>
            </header>
        </>
    );
};

export default HeaderV1;

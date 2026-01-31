'use client';

import Link from "next/link";
import Image from 'next/image';
import { useLocale } from '@/hooks/useLocale';
import LanguageSwitcher from './LanguageSwitcher';

interface DataType {
    isOpen: boolean;
    closeMenu: () => void;
    toggleSubMenu: (e: React.MouseEvent<HTMLAnchorElement>) => void;
    toggleMegaMenu: (e: React.MouseEvent<Element>) => void;
}

const MainMenu = ({ isOpen, closeMenu, toggleSubMenu, toggleMegaMenu }: DataType) => {
    const { t } = useLocale();

    return (
        <>
            <div className={`collapse navbar-collapse collapse-mobile ${isOpen ? "show" : ""}`} id="navbar-menu">
                <Image 
                    src="/assets/img/logo/logo3.png" 
                    alt="Tuple Logo" 
                    width={250} 
                    height={85}
                    style={{ objectFit: 'contain' }}
                />
                <button type="button" className="navbar-toggle" onClick={closeMenu}>
                    <i className="fa-solid fa-times"></i>
                </button>
                <ul className="nav navbar-nav navbar-center">
                    <li>
                        <Link href="/">{t.nav.home}</Link>
                    </li>
                    
                    {/* Brand & Growth - Direct Link to Section */}
                    <li>
                        <Link href="/#brand-growth" style={{ color: '#6366f1' }}>
                            <i className="fas fa-chart-line me-1"></i> {t.brandGrowth.badge}
                        </Link>
                    </li>

                    {/* Engineering Lab - Direct Link to Section */}
                    <li>
                        <Link href="/#engineering-lab" style={{ color: '#10b981' }}>
                            <i className="fas fa-code me-1"></i> {t.engineeringLab.badge}
                        </Link>
                    </li>

                    <li><Link href="/contact-us">{t.nav.contact}</Link></li>
                    
                    {/* Language Switcher - Mobile Only */}
                    <li className="mobile-only-lang-item" style={{ marginTop: '20px', padding: '10px 0' }}>
                        <LanguageSwitcher />
                    </li>
                </ul>
                <style>{`
                    @media (min-width: 992px) {
                        .mobile-only-lang-item {
                            display: none !important;
                        }
                    }
                `}</style>
            </div>
        </>
    );
};

export default MainMenu;
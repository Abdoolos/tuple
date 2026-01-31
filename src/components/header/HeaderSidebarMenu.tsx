import SocialShare2 from '../others/SocialShare2';
import Link from "next/link";
import { toast } from 'react-toastify';
import Image from 'next/image';
import LanguageSwitcher from './LanguageSwitcher';

interface DataType {
    removeClasses?: () => void;
    isSidebarOpen?: boolean;
    addClasses?: () => void;
    searchOpen?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

const HeaderSidebarMenu = ({ isSidebarOpen, removeClasses, addClasses, searchOpen }: DataType) => {

    const handleEmail = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.target as HTMLFormElement;
        form.reset();
        toast.success("Thanks for your Email");
    }

    return (
        <>
            <div className="attr-right">
                <div className="attr-nav flex">
                    <ul>
                        <li className="lang-switch" style={{ marginRight: '15px', display: 'inline-flex', alignItems: 'center' }}>
                            <LanguageSwitcher />
                        </li>
                        <li className="search"><Link href="#" scroll={false} onClick={searchOpen}><i className="fa-solid fa-search"></i></Link></li>
                        <li className="side-menu">
                            <Link href="#" scroll={false} onClick={addClasses}>
                                <span className="bar-1"></span>
                                <span className="bar-2"></span>
                                <span className="bar-3"></span>
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className={`side ${isSidebarOpen ? "on" : ""}`}>
                    <Link href="#" scroll={false} className="close-side" onClick={removeClasses}><i className="icon_close"></i></Link>
                    <div className="widget">
                        <div className="logo">
                            <Image 
                                src="/assets/img/logo/logo3.png" 
                                alt="Tuple Logo" 
                                width={250} 
                                height={85}
                                style={{ objectFit: 'contain' }}
                            />
                        </div>
                    </div>
                    <div className="widget">
                        <p>
                            Digital marketing is the component of marketing that uses the Internet and online based digital technologies such as desktop computers, mobile phones and other digital media and platforms to promote products and services.
                        </p>
                    </div>
                    <div className="widget address">
                        <div>
                            <ul>
                                <li>
                                    <div className="content">
                                        <p>Address</p>
                                        <strong>Oslo, Norway</strong>
                                    </div>
                                </li>
                                <li>
                                    <div className="content">
                                        <p>Email</p>
                                        <strong><a href="mailto:fauzifb7@gmail.com" className='color-para'>fauzifb7@gmail.com</a></strong>
                                    </div>
                                </li>
                                <li>
                                    <div className="content">
                                        <p>Contact</p>
                                        <strong><a href="tel:+4797392700" className='color-para'>+47 973 92 700</a></strong>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="widget newsletter">
                        <h4 className="title">Get Subscribed!</h4>
                        <form onSubmit={handleEmail}>
                            <div className="input-group stylish-input-group">
                                <input type="email" placeholder="Enter your e-mail" className="form-control" name="email" autoComplete='off' required />
                                <span className="input-group-addon">
                                    <button type="submit">
                                        <i className="arrow_right"></i>
                                    </button>
                                </span>
                            </div>
                        </form>
                    </div>
                    <div className="widget social">
                        <ul className="link">
                            <SocialShare2 />
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeaderSidebarMenu;
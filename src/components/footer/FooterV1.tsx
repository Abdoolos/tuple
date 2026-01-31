"use client";
import Link from "next/link";
import { toast } from 'react-toastify';
import Image from "next/image";
import shape6 from "@/assets/img/shape/6.png";
import SocialShare from "../others/SocialShare";
import { useLocale } from '@/hooks/useLocale';

interface FormEventHandler {
    (event: React.FormEvent<HTMLFormElement>): void;
}

const FooterV1 = () => {
    const { locale } = useLocale();

    const content = {
        en: {
            description: 'We build digital brands that people actually care about. Brand & Growth + Engineering Lab.',
            company: 'Company',
            companyProfile: 'Company Profile',
            about: 'About',
            helpCenter: 'Help Center',
            career: 'Career',
            pricing: 'Plans & Pricing',
            contact: 'Contact',
            contactInfo: 'Contact Info',
            address: 'Address',
            email: 'Email',
            phone: 'Phone',
            newsletter: 'Newsletter',
            newsletterText: 'Join our subscribers list to get the latest news and special offers.',
            emailPlaceholder: 'Your Email',
            copyright: 'Tuble Labs. All Rights Reserved',
            thankYou: 'Thanks for subscribing!'
        },
        no: {
            description: 'Vi bygger digitale merkevarer som folk faktisk bryr seg om. Merkevare & Vekst + Teknologilabben.',
            company: 'Selskap',
            companyProfile: 'Selskapsprofil',
            about: 'Om Oss',
            helpCenter: 'Hjelpesenter',
            career: 'Karriere',
            pricing: 'Planer & Priser',
            contact: 'Kontakt',
            contactInfo: 'Kontaktinfo',
            address: 'Adresse',
            email: 'E-post',
            phone: 'Telefon',
            newsletter: 'Nyhetsbrev',
            newsletterText: 'Bli med på abonnentlisten vår for å få de siste nyhetene og spesialtilbudene.',
            emailPlaceholder: 'Din E-post',
            copyright: 'Tuble Labs. Alle Rettigheter Reservert',
            thankYou: 'Takk for at du abonnerer!'
        }
    };

    const t = content[locale];

    const handleSearch: FormEventHandler = (event) => {
        event.preventDefault()
        const form = event.target as HTMLFormElement;
        form.reset()
        toast.success(t.thankYou)
    }

    return (
        <>
            <footer className="bg-dark text-light" style={{ backgroundImage: "url(/assets/img/shape/5.png)" }}>
                <div className="container">
                    <div className="f-items default-padding-bottom pt-70 pt-xs-0">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 footer-item mt-50">
                                <div className="footer-animated-shape">
                                    <Image src={shape6} alt="Image Not Found" />
                                </div>
                                <div className="f-item about pr-50 pr-xs-0 pr-md-0">
                                    <Image 
                                        src="/assets/img/logo/logo3.png" 
                                        alt="Tuple Logo" 
                                        width={480} 
                                        height={160}
                                        style={{ objectFit: 'contain', marginBottom: '20px' }}
                                    />
                                    <p>
                                        {t.description}
                                    </p>
                                    <div className="footer-social mt-30">
                                        <ul>
                                            <SocialShare />
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 mt-50 footer-item pl-50 pl-md-15 pl-xs-15">
                                <div className="f-item link">
                                    <h4 className="widget-title">{t.company}</h4>
                                    <ul>
                                        <li>
                                            <Link href="/about-us">{t.companyProfile}</Link>
                                        </li>
                                        <li>
                                            <Link href="/about-us">{t.about}</Link>
                                        </li>
                                        <li>
                                            <Link href="/faq">{t.helpCenter}</Link>
                                        </li>
                                        <li>
                                            <Link href="/contact-us">{t.career}</Link>
                                        </li>
                                        <li>
                                            <Link href="/pricing">{t.pricing}</Link>
                                        </li>
                                        <li>
                                            <Link href="/contact-us">{t.contact}</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 footer-item mt-50">
                                <div className="f-item contact">
                                    <h4 className="widget-title">{t.contactInfo}</h4>
                                    <ul>
                                        <li>
                                            <div className="content">
                                                <strong>{t.address}:</strong>
                                                Oslo, Norway
                                            </div>
                                        </li>
                                        <li>
                                            <div className="content">
                                                <strong>{t.email}:</strong>
                                                <a href="mailto:fauzifb7@gmail.com">fauzifb7@gmail.com</a>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="content">
                                                <strong>{t.phone}:</strong>
                                                <a href="tel:+4797392700">+47 973 92 700</a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 footer-item mt-50">
                                <div className="f-item newsletter">
                                    <h4 className="widget-title">{t.newsletter}</h4>
                                    <p>
                                        {t.newsletterText}
                                    </p>
                                    <form onSubmit={handleSearch}>
                                        <input type="email" placeholder={t.emailPlaceholder} className="form-control" name="email" autoComplete='off' required />
                                        <button type="submit"><i className="fas fa-arrow-right"></i></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom bg-dark text-light text-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <p>
                                    Copyright &copy; {(new Date().getFullYear())} {t.copyright}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default FooterV1;
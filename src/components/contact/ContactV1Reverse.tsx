import ContactForm from '../form/ContactForm';
import ContactInfo from './ContactInfo';
import shape18 from "@/assets/img/shape/18.png";
import Image from 'next/image';

const ContactV1Reverse = () => {
    return (
        <>
            <div className="contact-area overflow-hidden default-padding" style={{ backgroundImage: "url(/assets/img/shape/map.png)" }}>
                <div className="shape-right-bottom">
                    <Image src={shape18} alt="Shape" />
                </div>
                <div className="container">
                    <div className="row align-center">
                        <div className="col-tact-stye-one col-lg-6">
                            <ContactForm />
                        </div>
                        <div className="col-tact-stye-one col-lg-5 offset-lg-1 mt--80 mt-md-50 mt-xs-50">
                            <ContactInfo />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactV1Reverse;
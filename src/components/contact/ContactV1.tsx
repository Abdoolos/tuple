import ContactForm from '../form/ContactForm';
import ContactInfo from './ContactInfo';
import shape18 from "@/assets/img/shape/18.png";
import Image from 'next/image';

interface DataType {
    contactClass?: string;
}

const ContactV1 = ({ contactClass }: DataType) => {
    return (
        <>
            <div className={`contact-area overflow-hidden default-padding ${contactClass}`} style={{ backgroundImage: "url(/assets/img/shape/map.png)" }}>
                <div className="shape-right-bottom">
                    <Image src={shape18} alt="Shape" />
                </div>
                <div className="container">
                    <div className="row align-center">
                        <div className="col-tact-stye-one col-lg-5">
                            <ContactInfo />
                        </div>
                        <div className="col-tact-stye-one col-lg-6 offset-lg-1">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactV1;
import BreadCrumb from "@/components/breadCrumb/BreadCrumb";
import ContactV1Reverse from "@/components/contact/ContactV1Reverse";
import LayoutV1 from "@/components/layouts/LayoutV1";

export const metadata = {
    title: "Dilabs - Contact Us"
};

const ContactPage = () => {
    return (
        <>
            <LayoutV1>
                <BreadCrumb breadCrumb="contact-us" title1="Get in touch with us" bottomSpace="pb-0" />
                <ContactV1Reverse />
            </LayoutV1>
        </>
    );
};

export default ContactPage
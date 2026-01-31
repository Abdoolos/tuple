"use client"
import { toast } from "react-toastify";

const BannerV3NewsLetter = () => {

    interface EmailFormElements extends HTMLFormControlsCollection {
        email: HTMLInputElement;
    }

    interface EmailFormElement extends HTMLFormElement {
        readonly elements: EmailFormElements;
    }

    const handleEmail = (event: React.FormEvent<EmailFormElement>) => {
        event.preventDefault();
        event.currentTarget.reset();
        toast.success("Thanks for Email");
    }

    return (
        <>
            <form onSubmit={handleEmail}>
                <input type="email" placeholder="Your Email" className="form-control" name="email" autoComplete='off' required />
                <button type="submit">Get Started</button>
            </form>
        </>
    );
};

export default BannerV3NewsLetter;
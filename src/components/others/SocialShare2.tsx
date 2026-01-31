import Link from 'next/link';

const SocialShare2 = () => {
    return (
        <>
            <li><Link href="http://facebook.com" target='_blank' ><i className="fab fa-facebook-f"></i></Link></li>
            <li><Link href="http://twitter.com" target='_blank' ><i className="fab fa-twitter"></i></Link></li>
            <li><Link href="https://www.pinterest.com" target='_blank' ><i className="fab fa-pinterest"></i></Link></li>
            <li><Link href="https://www.linkedin.com" target='_blank' ><i className="fab fa-linkedin-in"></i></Link></li>
        </>
    );
};

export default SocialShare2;
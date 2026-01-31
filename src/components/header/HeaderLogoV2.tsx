import Link from "next/link";
import Image from 'next/image';

interface DataType {
    logoColor?: boolean;
    openMenu?: () => void;
}

const HeaderLogoV2 = ({ logoColor = false, openMenu }: DataType) => {
    return (
        <>
            <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu" onClick={openMenu}>
                    <i className="fa-solid fa-bars"></i>
                </button>
                <Link className="navbar-brand" href="/">
                    <Image 
                        src="/assets/img/logo/logo3.png" 
                        className="logo" 
                        alt="Tuple Logo" 
                        width={280} 
                        height={95}
                        style={{ objectFit: 'contain' }}
                    />
                </Link>
            </div>
        </>
    );
};

export default HeaderLogoV2;
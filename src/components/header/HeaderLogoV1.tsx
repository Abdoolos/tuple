import Link from "next/link";

interface DataType {
    logoColor?: boolean;
    openMenu?: () => void;
}

const HeaderLogoV1 = ({ logoColor = false, openMenu }: DataType) => {
    return (
        <>
            <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu" onClick={openMenu}>
                    <i className="fa-solid fa-bars"></i>
                </button>
                <Link className="navbar-brand" href="/">
                    <img 
                        src="/assets/img/logo/logo3.png" 
                        alt="Tuple Logo" 
                        style={{ width: '270px', height: '100px', objectFit: 'contain' }}
                    />
                </Link>
            </div>
        </>
    );
};

export default HeaderLogoV1;
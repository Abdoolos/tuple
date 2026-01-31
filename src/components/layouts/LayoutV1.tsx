import FooterV1 from '../footer/FooterV1';
import HeaderV5 from '../header/HeaderV5';

interface DataType {
    children?: React.ReactNode;
}

const LayoutV1 = ({ children }: DataType) => {
    return (
        <>
            <HeaderV5 />
            {children}
            <FooterV1 />
        </>
    );
};

export default LayoutV1;
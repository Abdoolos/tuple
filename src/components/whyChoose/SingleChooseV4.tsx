import Link from 'next/link';
import Animate from '../animation/Animate';

interface DataType {
    id?: number;
    listTitle?: string;
    listText?: string;
    listIcon?: string;
    animationDelay?: string;
}

const SingleChooseV4 = ({ choose }: { choose: DataType }) => {
    const { id, listTitle, listText, listIcon, animationDelay } = choose

    return (
        <>
            <Animate className='animate__animated animate__fadeInLeft' delay={animationDelay}>
                <li>
                    <div className="info">
                        <Link href={`/services-details/${id}`}>{listTitle}</Link>
                        <p>{listText}</p>
                    </div>
                    <div className="link">
                        <Link href={`/services-details/${id}`}><i className={listIcon}></i></Link>
                    </div>
                </li>
            </Animate>
        </>
    );
};

export default SingleChooseV4;
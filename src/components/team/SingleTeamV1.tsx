import SocialShare from '../others/SocialShare';
import Link from "next/link";
import Image from 'next/image';

interface DataType {
    id?: number;
    thumb?: string;
    icon1?: string;
    icon2?: string;
    member?: string;
    memberLink?: string;
    designation?: string;
}

const SingleTeamV1 = ({ team }: { team: DataType }) => {
    const { id, thumb, icon1, icon2, member, designation } = team

    return (
        <>
            <div className="team-style-one">
                <div className="thumb">
                    <Image src={`/assets/img/team/${thumb}`} alt="Image Not Found" width={800} height={950} />
                    <div className="team-info">
                        <div className="team-social">
                            <div className="share-link">
                                <i className={icon1}></i>
                                <ul>
                                    <SocialShare />
                                </ul>
                            </div>
                            <Link href="#"><i className={icon2}></i></Link>
                        </div>
                        <div className="content">
                            <h4><Link href={`/team-details/${id}`}>{member}</Link></h4>
                            <span>{designation}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleTeamV1;
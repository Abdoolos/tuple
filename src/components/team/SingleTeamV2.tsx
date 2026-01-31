import Link from "next/link";
import Image from 'next/image';

interface DataType {
    id?: number;
    thumb?: string;
    name?: string;
    profession?: string;
    memberLink?: string;
}

const SingleTeamV2 = ({ team }: { team: DataType }) => {
    const { id, thumb, name, profession } = team

    return (
        <>
            <div className="team-style-two">
                <div className="thumb">
                    <Image src={`/assets/img/team/${thumb}`} alt="Image Not Found" width={800} height={950} />
                    <div className="team-info">
                        <div className="content">
                            <h4><Link href={`/team-details/${id}`}>{name}</Link></h4>
                            <span>{profession}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleTeamV2;
import Link from "next/link";
import Image from 'next/image';

interface DataType {
    id?: number;
    bgThumb?: string;
    thumb?: string;
    name?: string;
    position?: string;
}

const SingleTeamV3 = ({ team }: { team: DataType }) => {
    const { id, bgThumb, thumb, name, position } = team

    return (
        <>
            <div className="team-style-three">
                <div className="thumb" style={{ backgroundImage: `url(/assets/img/shape/${bgThumb}` }}>
                    <Image src={`/assets/img/team/${thumb}`} alt="Image Not Found" width={800} height={800} />
                </div>
                <div className="content">
                    <h4><Link href={`/team-details/${id}`}>{name}</Link></h4>
                    <span>{position}</span>
                </div>
            </div>
        </>
    );
};

export default SingleTeamV3;
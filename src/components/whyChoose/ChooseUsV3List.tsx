import Link from 'next/link';

interface DataType {
    id?: number;
    listName?: string;
    listIcon?: string;
}

const ChooseUsV3List = ({ list }: { list: DataType }) => {
    const { id, listName, listIcon } = list

    return (
        <>
            <li>
                <h4><Link href={`/services-details/${id}`}>{listName} <i className={listIcon}></i></Link></h4>
            </li>
        </>
    );
};

export default ChooseUsV3List;
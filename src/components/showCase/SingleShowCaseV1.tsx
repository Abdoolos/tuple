interface DataType {
    id?: number;
    listTitle?: string;
    listText?: string;
}

const SingleShowCaseV1 = ({ service }: { service: DataType }) => {
    const { listTitle, listText } = service

    return (
        <>
            <li>
                <h5>{listTitle}</h5>
                <p>{listText}</p>
            </li>
        </>
    );
};

export default SingleShowCaseV1;
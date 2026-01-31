interface DataType {
    name?: string;
    icon?: string;
}

const SingleQualification = ({ qualification }: { qualification: DataType }) => {
    const { name, icon } = qualification

    return (
        <>
            <div className="qualification-item">
                <i className={icon}></i>
                <h4>{name}</h4>
            </div>
        </>
    );
};

export default SingleQualification;
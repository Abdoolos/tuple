import Counter from "../counter/Counter";

interface DataType {
    icon?: string;
    end: number;
    info1?: string;
    info2?: string;
}

const SingleAchievementV1 = ({ achievement }: { achievement: DataType }) => {
    const { icon, end, info1, info2 } = achievement

    return (
        <>
            <li>
                <div className="icon">
                    <i className={icon}></i>
                </div>
                <div className="fun-fact">
                    <div className="counter">
                        <div className="timer">
                            <Counter end={end} />
                        </div>
                        <div className="operator">+</div>
                    </div>
                    <span className="medium">{info1} <br /> {info2}</span>
                </div>
            </li>
        </>
    );
};

export default SingleAchievementV1;
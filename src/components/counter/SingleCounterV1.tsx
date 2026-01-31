import Counter from './Counter';

interface DataType {
    id?: number;
    end: number;
    operator?: string;
    text?: string;
}

const SingleCounterV1 = ({ counter }: { counter: DataType }) => {
    const { end, operator, text } = counter

    return (
        <>
            <li>
                <div className="fun-fact">
                    <div className="counter">
                        <div className="timer">
                            <Counter end={end} />
                        </div>
                        <div className="operator">{operator}</div>
                    </div>
                    <span className="medium">{text}</span>
                </div>
            </li>
        </>
    );
};

export default SingleCounterV1;
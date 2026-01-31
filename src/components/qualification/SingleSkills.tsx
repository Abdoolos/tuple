"use client";
import { useEffect } from 'react';
import { useState } from 'react';

interface DataType {
    title?: string;
    end: number;
}

const SingleSkills = ({ skills }: { skills: DataType }) => {
    const { title, end } = skills

    const [progressWidth, setProgressWidth] = useState(0);

    useEffect(() => {
        setProgressWidth(end);
    }, [end]);

    return (
        <>
            <div className="progress-box">
                <h5>{title}</h5>
                <div className="progress">
                    <div className="progress-bar" role="progressbar" data-width={end} style={{ width: `${progressWidth}%` }}>
                        <span>{`${end}%`}</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleSkills;
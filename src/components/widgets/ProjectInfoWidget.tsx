import ProjectWidgetData from '@/assets/jsonData/ProjectWidgetData.json';

const ProjectInfoWidget = () => {
    return (
        <>
            <ul className="gallery-project-basic-info" style={{ backgroundImage: `url(/assets/img/shape/26.png)` }}>
                {ProjectWidgetData.map(info =>
                    <li key={info.id}>
                        <div className="info">
                            {info.infoName} <span>{info.infoValue}</span>
                        </div>
                    </li>
                )}
            </ul>
        </>
    );
};

export default ProjectInfoWidget;
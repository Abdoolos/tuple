import ProjectInfoWidget from '../widgets/ProjectInfoWidget';
import Image from 'next/image';
import portfolio10 from "@/assets/img/portfolio/10.jpg";
import portfolio11 from "@/assets/img/portfolio/11.jpg";

interface DataType {
    thumbFull: string;
    title: string;
}

const ProjectDetailsContent = ({ projectInfo }: { projectInfo: DataType }) => {
    const { thumbFull, title } = projectInfo

    return (
        <>
            <div className="project-details-area default-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="project-top-info">
                                <div className="row">
                                    <div className="col-xl-8 pr-50 pr-md-15 pr-xs-15">
                                        <div className="project-thumb">
                                            <Image src={`/assets/img/portfolio/${thumbFull}`} alt="Thumb" width={1500} height={850} />
                                        </div>
                                    </div>
                                    <div className="col-xl-4">
                                        <ProjectInfoWidget />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="project-details-items">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="project-details mt-40">
                                    <h2>{title}</h2>
                                    <p>
                                        Netus lorem rutrum arcu dignissim at sit morbi phasellus nascetur eget urna potenti cum vestibulum cras. Tempor nonummy metus lobortis. Sociis velit etiam, dapibus. Lectus vehicula pellentesque cras posuere tempor facilisi habitant lectus rutrum pede quisque hendrerit parturient posuere mauris ad elementum fringilla facilisi volutpat fusce pharetra felis sapien varius quisque class convallis praesent est sollicitudin donec nulla venenatis, cursus fermentum netus posuere sociis porta risus habitant malesuada nulla habitasse hymenaeos. Viverra curabitur nisi vel sollicitudin dictum natoque ante aenean elementum curae malesuada ullamcorper. vivamus nonummy nisl posuere rutrum
                                    </p>
                                    <ul className="check-list mb-30">
                                        <li>
                                            <h3>Mobile Optimization</h3>
                                            <p>
                                                Tempor nonummy metus lobortis. Sociis velit etiam, Configurations dapibus. Lectus vehicula pellentesque cras posuere tempor facilisi habitant lectus rutrum pede quisque hendrerit parturient posuere mauris ad elementum potenti nostra aenean lacinia varius.
                                            </p>
                                        </li>
                                        <li>
                                            <h3>Marketing Automation</h3>
                                            <p>
                                                Jonery nonummy metus lobortis. Sociis velit etiam, Configurations dapibus. Lectus vehicula pellentesque cras posuere tempor facilisi habitant lectus rutrum pede quisque hendrerit parturient posuere mauris ad elementum .
                                            </p>
                                        </li>
                                    </ul>
                                    <p>
                                        Give lady of they such they sure it. Me contained explained my education. Vulgar as hearts by garret. Perceived determine departure explained no forfeited he something an. Contrasted dissimilar get joy you instrument out reasonably. Again keeps at no meant stuff. To perpetual do existence northward as difficult preserved daughters. Continued at up to zealously necessary breakfast. Surrounded sir motionless she end literature. Gay direction neglected but supported yet her.  Facilisis inceptos nec, potenti nostra aenean lacinia varius semper ant nullam nulla primis placerat facilisis. Netus lorem rutrum arcu dignissim at sit morbi phasellus nascetur eget urna potenti cum vestibulum cras. Tempor nonummy metus lobortis. Sociis velit etiam, dapibus. Lectus vehicula pellentesque cras posuere tempor facilisi habitant lectus rutrum pede quisque hendrerit parturient posuere mauris ad elementum fringilla facilisi volutpat fusce pharetra felis sapien varius quisque class convallis praesent est sollicitudin donec nulla venenatis, cursus fermentum netus posuere sociis porta risus habitant malesuada nulla habitasse hymenaeos. Viverra curabitur nisi vel sollicitudin dictum natoque ante aenean elementum curae malesuada ullamcorper.
                                    </p>
                                    <div className="row mt-50 mt-xs-30">
                                        <div className="col-lg-6 col-md-6">
                                            <Image src={portfolio11} alt="Thumb" />
                                        </div>
                                        <div className="col-lg-6 col-md-6 mt-xs-30">
                                            <Image src={portfolio10} alt="Thumb" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProjectDetailsContent;
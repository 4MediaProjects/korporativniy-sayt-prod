import styles from './ProjectsList.module.scss';
import ButtonList from '../../../../../widgets/ui/ButtonList';
import { useNavigate } from 'react-router-dom';
interface IProject {
    imageName?: string;
    header: string;
    secondaryText: string;
    linksList: any[];
    buttonText: string;
    buttonLink: string;
}

interface IProjectsListProps {
    projects: IProject[];
}

export const ProjectsList = ({ projects }: IProjectsListProps) => {
    const navigate = useNavigate();
    return (
        <div className={styles.container}>
            <div className={styles.title}>Проекты</div>
            <div className={styles.projectsList}>
                {projects.map((project, index) => (
                    <div key={index} className={styles.card}>
                        <div className={styles.imageWrapper}>
                            {project.imageName && (
                                <img
                                    className={styles.img}
                                    src={`/${project.imageName}.svg`}
                                    alt={project.header}
                                />
                            )}
                        </div>
                        <h3 className={styles.header}>{project.header}</h3>
                        <p className={styles.secondaryText}>
                            {project.secondaryText}
                        </p>
                        <div className={styles.footer}>
                            <div className={styles.bottomPart}>
                                <div className={styles.linksList}>
                                    {project.linksList.map((link, i) => (
                                        <a
                                            className={styles.link}
                                            key={i}
                                            href={link.href}
                                            rel="noopener noreferrer"
                                        >
                                            {link.text}
                                        </a>
                                    ))}
                                </div>
                                <div className={styles.buttonList}>
                                    <button
                                        className={styles.reverseOrangeButton}
                                        onClick={() =>
                                            navigate(project.buttonLink)
                                        }
                                    >
                                        Подробнее
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

import styles from './ProjectsList.module.scss';
import ButtonList from '../../../../../widgets/ui/ButtonList';
interface IProject {
  imageName?: string;
  header: string;
  secondaryText: string;
  linksList: any[];
  buttonText: string;
}

interface IProjectsListProps {
  projects: IProject[];
}

export const ProjectsList = ({ projects }: IProjectsListProps) => {
  return (
    <div>
      <div className={styles.title}>Проекты</div>
      <div className={styles.projectsList}>
        {projects.map((project, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.imageWrapper}>
              {project.imageName && (
                <img src={`/${project.imageName}.svg`} alt={project.header} />
              )}
            </div>
            <h3 className={styles.header}>{project.header}</h3>
            <p className={styles.secondaryText}>{project.secondaryText}</p>
            <div className={styles.footer}>
              <div className={styles.bottomPart}>
                <div className={styles.linksList}>
                  {project.linksList.map((link, i) => (
                    <a
                      key={i}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.text}
                    </a>
                  ))}
                </div>
                <ButtonList reverseOrangeButton={project.buttonText} />
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>

  );
};

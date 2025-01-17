import { useLanguage } from '../../contexts/LanguageContext';

function ProjectList({ projects }) {
  const { currentLanguage } = useLanguage();
  const { translations } = currentLanguage;

  const getProjectTranslation = (project) => {
    const projectKey = Object.keys(translations.portfolio.projects).find(
      (key) => translations.portfolio.projects[key].id === project.projectId
    );
    return translations.portfolio.projects[projectKey];
  };

  return projects.map((project) => {
    const translatedProject = getProjectTranslation(project);
    return {
      ...project,
      name: translatedProject.name,
      subtitle: translatedProject.subtitle,
      description: {
        intro: translatedProject.intro,
        body: translatedProject.body,
        ending: translatedProject.ending,
      },
    };
  });
}

export default ProjectList;

import Text from '@/common/components/text/text';
import Chip from '@/common/components/chip/chip';
import Button from "@/common/components/buttons/button/button";

import ProjectCard from "@/app/_widgets/project-card";

import { projectTypes } from '@/app/_lib/data/projects';
import ArrowRight from "@/app/_lib/icons/arrow-right";
import ProjectsIcon from "@/app/_lib/icons/projects";

export default async function Projects({
  lang,
  dictionary
}: {
  lang: string;
  dictionary: {
    projectsTitleText: string;
    seeAllText: string;
    projectsDataPlaceholderText: string;
    privateText: string;
    seeProjectText: string;
  }
}) {
  const projectTypesList = await projectTypes(lang);
  const randomType = projectTypesList[Math.floor(Math.random() * projectTypesList.length)];
  const randomProject = randomType.projects[Math.floor(Math.random() * randomType.projects.length)];

  return (
    <section className="col gap-l custom-section-fullvh custom-on-scroll-section">
      <div className="col my cross-axis-center">
        <div className="flex gap main-axis-center cross-axis-center">
          <ProjectsIcon className="icon-xl" />
          <Text text={dictionary.projectsTitleText} type="title" />
        </div>

        <Chip text={dictionary.projectsDataPlaceholderText} />
      </div>

      <div className="flex flex-end">
        <Button
          href="/projects"
          type="filled"
          supportText={dictionary.seeAllText}
          trailing={<ArrowRight className="icon" />}
        >
          <Text text={dictionary.seeAllText} />
        </Button>
      </div>

      <ProjectCard
        project={randomProject}
        privateText={dictionary.privateText}
        seeProjectText={dictionary.seeProjectText}
      />
    </section>
  );
}

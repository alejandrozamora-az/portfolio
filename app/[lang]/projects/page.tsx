import dynamic from 'next/dynamic';

import { getDictionary } from "@/get-dictionary";
import { projectTypes } from '@/app/_lib/data/projects';

import Chip from '@/common/components/chip/chip';
import Text from '@/common/components/text/text';
import Button from "@/common/components/buttons/button/button";

import ArrowLeft from '@/app/_lib/icons/arrow-left';
import ProjectsIcon from '@/app/_lib/icons/projects';

const ProjectCard = dynamic(() => import('@/app/_widgets/project-card'));

export default async function Projects({
    params: { lang },
}: {
    params: { lang: string };
}) {
    const dictionary = await getDictionary(lang);

    return (
        <div className="col gap-l mx">
            <div className="flex">
                <Button
                    href="/"
                    type="filled"
                    supportText={dictionary.common.back}
                    leading={<ArrowLeft className="icon" />}
                >
                    <Text text={dictionary.common.back} />
                </Button>
            </div>

            <div className="col my cross-axis-center">
                <div className="flex gap main-axis-center cross-axis-center">
                    <ProjectsIcon className="icon-xl" />
                    <Text text={dictionary.projects_section.title} type="title" />
                </div>

                <Chip text={dictionary.projects_section.projects_data_placeholder} />
            </div>

            {(await projectTypes(lang)).map((type, index) => {
                return (
                    <div key={index} className="col my gap-l">
                        <Text className="text-center secondary-color" type="bodyLarge" text={type.type} />

                        <div className="col gap">
                            {
                                type.projects.map((project, index) => (
                                    <ProjectCard
                                        key={index}
                                        type="outlined"
                                        project={project}
                                        privateText={dictionary.projects_section.private}
                                        seeProjectText={dictionary.common.see_project}
                                    />
                                ))
                            }
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
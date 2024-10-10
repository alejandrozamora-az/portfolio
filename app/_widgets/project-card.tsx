import Image from 'next/image';

import { Project } from '@/common/definitions';

import Text from '@/common/components/text/text';
import Chip from '@/common/components/chip/chip';
import Button from '@/common/components/buttons/button/button';
import Card from '@/common/components/card/card';
import Details from '@/common/components/details/details';

export default function ProjectCard({
    project,
    type = "default",
    privateText,
    seeProjectText
}: {
    project: Project;
    type?: "default" | "outlined";
    privateText: string;
    seeProjectText: string;
}) {
    return (
        <Card
            shine={false}
            type={type}
            borderRadius="large"
            className="flex"
        >
            <div className="col flex-1 px-s py">
                <div className="col flex-1 gap main-axis-center cross-axis-center">
                    <Image
                        src={project.image}
                        alt={project.title}
                        className="custom-project-image-responsive"
                        width={500}
                        height={430}
                    />

                    {project.technologies && (
                        <div className="flex gap">
                            {
                                project.technologies.map((Technology, index) => (
                                    <Technology key={index} className="icon" />
                                ))
                            }
                        </div>
                    )}

                    <div className="flex my gap">
                        <Chip text={project.year.toString()} />

                        {project.url != null ? (
                            <Button href={project.url} supportText={seeProjectText}>
                                <Text text={seeProjectText} />
                            </Button>
                        ) : (
                            <Chip text={privateText} />
                        )}
                    </div>
                </div>

                <Details title={<Text text={project.title} type="bodyLarge" />} className="hidden-laptop">
                    <Card shine={false} type={type === "default" ? "outlined" : "default"} className="col gap py px">
                        {project.description.map((paragraph, index) => (
                            <Text key={index} type="bodySmall" text={paragraph} />
                        ))}
                    </Card>
                </Details>
            </div>

            <div className="col flex-1 gap px-s py-s hidden-mobile">
                <Text text={project.title} type="bodyLarge" className="my text-center" />
                {project.description.map((paragraph, index) => (
                    <Text key={index} type="bodySmall" text={paragraph} />
                ))}
            </div>
        </Card>
    );
};

import dynamic from "next/dynamic";

import { getDictionary } from "@/get-dictionary";

const HeaderSection = dynamic(() => import('@/app/_sections/header'));
const ProjectsSection = dynamic(() => import('@/app/_sections/projects'));
const AboutSection = dynamic(() => import('@/app/_sections/about'));
const BadgesSection = dynamic(() => import('@/app/_sections/badges'));
const ContactSection = dynamic(() => import('@/app/_sections/contact'));

export default async function Home({
  params: { lang }
}: {
  params: { lang: string };
}) {
  const dictionary = await getDictionary(lang);

  return (
    <div className="col gap-l mx">
      <HeaderSection dictionary={{
        iamText: dictionary.common.iam,
        autorText: dictionary.common.autor,
        labelPositionText: dictionary.common.label_position,
        primaryPositionText: dictionary.common.primary_position,
        titleText: dictionary.contact_section.title
      }} />
      <ProjectsSection lang={lang} dictionary={{
        projectsTitleText: dictionary.projects_section.title,
        seeAllText: dictionary.projects_section.see_all,
        projectsDataPlaceholderText: dictionary.projects_section.projects_data_placeholder,
        privateText: dictionary.projects_section.private,
        seeProjectText: dictionary.common.see_project
      }} />
      <AboutSection dictionary={dictionary.about_section} />
      <BadgesSection dictionary={{
        badgesTitleText: dictionary.about_section.badges,
        seeText: dictionary.common.see
      }} />
      <span id="contact-section"></span>
      <ContactSection dictionary={{
        sectionTitleText: dictionary.contact_section.title,
        copiedToClipboardText: dictionary.common.copied_to_clipboard,
        seeMoreText: dictionary.contact_section.see_more
      }} />
    </div>
  );
}

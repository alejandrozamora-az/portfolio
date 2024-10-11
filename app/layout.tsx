import '@/common/styles/tokens.css';
import '@/common/styles/globals.css';
import '@/common/styles/theme.css';
import '@/app/custom.css';

import type { Metadata } from 'next';
import dynamic from "next/dynamic";

import { i18n } from "@/i18n";
import { getDictionary } from "@/get-dictionary";
import { mainFont } from '@/app/fonts';

import IconButton from '@/common/components/buttons/icon-button/icon-button';
import Text from '@/common/components/text/text';
import Chip from '@/common/components/chip/chip';
import Card from '@/common/components/card/card';

import SelectLanguageButton from "@/app/_widgets/select-language-button";
import GithubIcon from "@/app/_lib/icons/github";
import ArrowUpIcon from "@/app/_lib/icons/arrow-up";
import Logo from "@/app/_widgets/logo";

const Progress = dynamic(() => import('@/app/_widgets/progress/progress'));
const InfoApp = dynamic(() => import('@/app/_widgets/info-app-text'));

const GtagInit = dynamic(() => import('@/app/_lib/helpers/gtag').then((mod) => mod.init));

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale.code }));
}

export async function generateMetadata(
  { params,
  }: {
    params: { lang: string };
  }
): Promise<Metadata> {
  const dictionary = (await getDictionary(params.lang)).common;

  return {
    title: dictionary.title,
    description: dictionary.description,
    authors: [{ name: dictionary.autor }],
    keywords: dictionary.keywords,
  }
}

export default async function RootLayout({
  children, params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  const dictionary = (await getDictionary(params.lang)).common;

  return (
    <html lang={params.lang} className="custom-root-html">
      <head>
        <GtagInit />
      </head>
      <body className={`${mainFont.className} antialiased`}>
        <Progress />
        <header id="header" className="flex main-axis-between cross-axis-center px-s py">
          <Logo />
          <SelectLanguageButton variant="secondary" />
        </header>

        <main>
          {children}
        </main>

        <div className="custom-action-button">
          <IconButton
            href="#header"
            supportText="Go to Top"
            type="filled"
          >
            <ArrowUpIcon className="icon-l" />
          </IconButton>
        </div>

        <footer>
          <Card shine={false} className="custom-footer gap-l py px main-axis-center cross-axis-center">
            <div className="col gap-s main-axis-center cross-axis-center">
              <Chip text={dictionary.see_project} textType="body">
                <IconButton
                  href="https://github.com/alejandrozamora-az/portfolio"
                  hrefExternal={true}
                  supportText="Github"
                >
                  <GithubIcon className="icon" />
                </IconButton>
              </Chip>

              <Text type="bodySmall" text="Template by Alejandro Zamora" />
              <InfoApp />
            </div>

            <div className="col gap-s main-axis-center cross-axis-center">
              <Logo />
              <Text text={dictionary.developed_in} type="bodySmall" className="text-center" />
              <Chip text={dictionary.tag_google_analytics} />
            </div>
          </Card>
        </footer>
      </body>
    </html >
  )
}

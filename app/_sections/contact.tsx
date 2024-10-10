import dynamic from 'next/dynamic';
import Image from 'next/image';

import Text from '@/common/components/text/text';
import Button from '@/common/components/buttons/button/button';
import IconButton from '@/common/components/buttons/icon-button/icon-button';

import CopyEmailToClipboardChip from '@/app/_widgets/copy-email-to-clipboard-chip';

const EmailIcon = dynamic(() => import('@/app/_lib/icons/email'));
const ContactIcon = dynamic(() => import('@/app/_lib/icons/contact'));
const LinkedinIcon = dynamic(() => import('@/app/_lib/icons/linkedin'));

export default function Contact({
    dictionary
}: {
    dictionary: {
        sectionTitleText: string;
        copiedToClipboardText: string;
    }
}) {
    return (
        <section className="flex gap-s py-l custom-section-fullvh custom-on-scroll-section">
            <div className="col flex-1 main-axis-center cross-axis-center hidden-mobile">
                <Image width={455} height={400} src="https://i.postimg.cc/6pGW9N4Z/large-vector.webp" alt="Abstract background with geometric design - Image by freepik" />
            </div>

            <div className="col flex-1 gap-l main-axis-center cross-axis-center">
                <div className="flex gap cross-axis-center main-axis-center my">
                    <ContactIcon className="icon-xl" />
                    <Text text={dictionary.sectionTitleText} type="title" />
                </div>

                <CopyEmailToClipboardChip copiedToClipboardText={dictionary.copiedToClipboardText} variant="primary" />

                <div className="flex gap">
                    <IconButton
                        href="mailto:alejandrozamora.engineer@gmail.com"
                        hrefExternal={true}
                        type="filled"
                        supportText="Go to link Email"
                    >
                        <EmailIcon className="icon" />
                    </IconButton>
                    <IconButton
                        href="https://www.linkedin.com/in/alejandrozamora-az"
                        hrefExternal={true}
                        type="filled"
                        supportText="Go to link Linkedin"
                    >
                        <LinkedinIcon className="icon" />
                    </IconButton>
                </div>
            </div>
        </section>
    );
}

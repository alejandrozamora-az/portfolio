import dynamic from 'next/dynamic';
import Image from 'next/image';

import Text from '@/common/components/text/text';

const LinkedinProfileCard = dynamic(() => import('@/app/_widgets/linkedin-profile-card'));
const AboutIcon = dynamic(() => import('@/app/_lib/icons/about'));

export default function About({
    dictionary
}: {
    dictionary: {
        title: string;
        badges: string;
        about000: string;
        about011: string;
        about012: string;
        about013: string;
        about014: string;
        about015: string;
        about02: string;
        about03: string;
    }
}) {
    return (
        <section className="col gap py-l custom-on-scroll-section">
            <div className="flex gap cross-axis-center main-axis-center">
                <AboutIcon className="icon-xl" />
                <Text text={dictionary.title} type="title" />
            </div>

            <div>
                <Text text={dictionary.about000} type="body" className="text-inline" />
                <Text text={dictionary.about011} type="bodyLarge" className="text-inline gradient-color" />
                <Text text={dictionary.about012} type="body" className="text-inline" />
                <Text text={dictionary.about013} type="bodyLarge" className="text-inline primary-color" />
                <Text text={dictionary.about014} type="body" className="text-inline" />
                <Text text={dictionary.about015} type="body" className="text-inline secondary-color" />
            </div>

            <div className="flex">
                <div className="col flex-1 gap main-axis-center cross-axis-center">
                    <Text text={dictionary.about02} type="body" />

                    <LinkedinProfileCard />
                </div>
                <div className="col flex-1 main-axis-center cross-axis-center hidden-mobile">
                    <Image width={400} height={400} src="https://res.cloudinary.com/dlyfwab7x/image/upload/v1713744589/vectors/right_qdr0q9.webp" alt="Abstract modern right - Image by freepik" />
                </div>
            </div>

            <div className="flex">
                <div className="col flex-1 main-axis-center cross-axis-center hidden-mobile">
                    <Image width={400} height={400} src="https://res.cloudinary.com/dlyfwab7x/image/upload/v1713744595/vectors/left_cu5vvy.webp" alt="Abstract modern left - Image by freepik" />
                </div>
                <div className="col flex-1 main-axis-center cross-axis-center">
                    <Text text={dictionary.about03} type="body" />
                </div>
            </div>
        </section>
    );
}

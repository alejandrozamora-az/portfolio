import dynamic from 'next/dynamic';

import { badges } from '@/app/_lib/data/badges';

import Text from '@/common/components/text/text';

const BadgeCard = dynamic(() => import('@/app/_widgets/badge-card'));
const BadgeIcon = dynamic(() => import('@/app/_lib/icons/badge'));

export default function Badges({
    dictionary
}: {
    dictionary: {
        badgesTitleText: string;
        seeText: string;
    }
}) {
    return (
        <section className="col gap-l custom-on-scroll-section">
            <div className="flex gap cross-axis-center main-axis-center">
                <BadgeIcon className="icon-xl" />
                <Text type="title" text={dictionary.badgesTitleText} />
            </div>

            <div className="flex custom-badges-grid gap-s cross-axis-center main-axis-center">
                {badges.map((badge, index) => (
                    <BadgeCard key={index} badge={badge} seeText={dictionary.seeText} />
                ))}
            </div>
        </section>
    );
}
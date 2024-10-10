import Image from 'next/image';

import { Badge } from "@/common/definitions";

import Card from '@/common/components/card/card';
import Text from '@/common/components/text/text';
import Button from '@/common/components/buttons/button/button';

export default function BadgeCard({
    badge,
    seeText
}: {
    badge: Badge;
    seeText: string;
}) {
    return (
        <Card type="outlined" className="col cross-axis-center px py gap-s">
            <Image src={badge.imageUrl} alt={badge.alt} width={150} height={150} />
            <Button
                href={badge.href}
                hrefExternal={true}
                supportText={seeText}
                variant="secondary"
                className="w-expand"
            >
                <Text text={seeText} />
            </Button>
        </Card>
    );
}
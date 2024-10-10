import pkgJson from "@/package.json";

import Text from '@/common/components/text/text';

export default function InfoAppText() {
    return (
        <Text type="bodySmall" text={`${pkgJson.name} ${pkgJson.version}`} />
    );
}
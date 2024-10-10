import Text from '@/common/components/text/text';
import Chip from '@/common/components/chip/chip';
import Button from '@/common/components/buttons/button/button';

import ContactIcon from '@/app/_lib/icons/contact';
import DevProductivity from '@/app/_lib/icons/dev_productivity';

export default function Header({
    dictionary
}: {
    dictionary: {
        iamText: string;
        autorText: string;
        labelPositionText: string;
        primaryPositionText: string;
        titleText: string;
    }
}) {
    return (
        <section className={"flex custom-header-section-fullvh"}>
            <div className="col gap-l main-axis-center flex-1 text-center">
                <div>
                    <Text text={dictionary.iamText} />
                    <Text text={dictionary.autorText} type="bodyLarge" />
                </div>

                <div>
                    <Text text={dictionary.labelPositionText} type="bodySmall" />
                    <Text text={dictionary.primaryPositionText} className="gradient-color" type="headline" />
                </div>

                <div className="flex main-axis-center">
                    <Chip>
                        <Button
                            href="#contact-section"
                            variant="secondary"
                            leading={<ContactIcon className="icon-xl" />}
                            className="border-radius">
                            <Text text={dictionary.titleText} type="title" />
                        </Button>
                    </Chip>
                </div>
            </div>

            <div className="col flex-1 hidden-mobile">
                <DevProductivity className="w-expand" />
            </div>
        </section>
    )
}
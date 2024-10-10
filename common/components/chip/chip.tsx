import structureChip from './chip.structure.module.css';
import colorsChip from './chip.colors.module.css';

import Text from '@/common/components/text/text';

/**
 * Renders a chip component.
 *
 * A chip is a compact element that can be used to display information.
 *
 * @param {Object} props - Properties for the chip.
 * @param {string} [props.text] - Text to render inside the chip.
 * @param {"headline" | "title" | "bodyLarge" | "body" | "bodySmall"} [props.textType] - Type of text to render inside the chip.
 * @param {string} [props.className] - Additional CSS class for the chip.
 * @param {JSX.Element} [props.children] - Child element of the chip.
 * @return {JSX.Element} Chip component.
 */
export default function Chip({
    text,
    textType = "bodySmall",
    className,
    children
}: {
    text?: string;
    textType?: "headline" | "title" | "bodyLarge" | "body" | "bodySmall";
    className?: string;
    children?: JSX.Element;
}): JSX.Element {
    return (
        <div className={`
            ${structureChip.container}
            ${colorsChip.default}
            ${className}
        `}>
            {children}

            {text && <Text type={textType} text={text} />}
        </div>
    );
}

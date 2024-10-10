import cardEffects from "./card.effects.module.css";
import cardColors from "./card.colors.module.css";
import cardStructure from "./card.structure.module.css";

/**
 * Renders a card component.
 *
 * @param {Object} props - Properties for the card.
 * @param {string} [props.type='default'] - Type of the card.
 * @param {string} [props.borderRadius='normal'] - Border radius of the card.
 * @param {boolean} [props.shine=true] - Whether the card should have a shine effect.
 * @param {string} [props.className] - Additional CSS class for the card.
 * @param {any} props.children - Child elements of the card.
 * @return {JSX.Element} Card component.
 */
export default function Card({
    type = 'default',
    borderRadius = "normal",
    shine = true,
    className,
    children
}: {
    type?: 'default' | 'outlined';
    borderRadius?: 'normal' | 'large';
    shine?: boolean;
    className?: string;
    children: any;
}): JSX.Element {
    const borderRadiusSelected = (() => {
        switch (borderRadius) {
            case 'normal':
                return cardStructure.borderRadiusNormal;
            case 'large':
                return cardStructure.borderRadiusLarge;
        }
    })();

    return (
        <div className={`
            ${shine && cardEffects.shine}
            ${cardColors[type]}
            ${borderRadiusSelected}
            ${className}`}
        >
            {children}
        </div>
    );
}
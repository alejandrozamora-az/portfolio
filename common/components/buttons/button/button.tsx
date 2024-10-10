import Link from 'next/link';

import textButtonEffects from './button.effects.module.css'
import textButtonStructure from './button.structure.module.css';
import textButtonColors from './button.colors.module.css';

/**
 * Renders a button component.
 *
 * @param {Object} props - Properties for the button.
 * @param {string} props.href - URL for the button to navigate to.
 * @param {boolean} [props.isExternal=false] - Whether the button should open in a new tab.
 * @param {string} [props.type='default'] - Type of the button.
 * @param {string} [props.variant='primary'] - Variant of the button.
 * @param {string} [props.className] - Additional CSS class for the button.
 * @param {JSX.Element} [props.leading] - Element to render before the text.
 * @param {JSX.Element} [props.trailing] - Element to render after the text.
 * @param {string} [props.supportText] - Support text for accessibility.
 * @param {() => void} props.onClick - Function to be called when the button is clicked.
 * @param {JSX.Element} props.children - Child elements of the button, Typically used for text.
 * @return {JSX.Element} Button component.
 */
export default function Button({
    href,
    hrefExternal = false,
    type = 'default',
    variant = 'primary',
    className,
    leading,
    trailing,
    supportText,
    onClick,
    children
}: {
    href: string;
    hrefExternal?: boolean;
    type?: 'default' | 'filled';
    variant?: 'primary' | 'secondary',
    className?: string;
    leading?: JSX.Element;
    trailing?: JSX.Element;
    supportText?: string;
    onClick?: () => void;
    children: JSX.Element;
}): JSX.Element {
    return (
        <Link
            href={href}
            onClick={onClick}
            title={supportText}
            target={hrefExternal ? "_blank" : undefined}
            rel={hrefExternal ? "noreferrer" : undefined}
            className={`
                ${textButtonStructure.container}
                ${textButtonEffects.ripple}
                ${textButtonColors.common}
                ${textButtonColors[type] || textButtonColors.default}
                ${textButtonColors[variant] || textButtonColors.primary}
                ${className && className}`
            }
        >
            {leading}
            {children}
            {trailing}
        </Link>
    );
}

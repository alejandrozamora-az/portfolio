import Link from 'next/link';

import iconButtonEffects from './icon-button.effects.module.css';
import iconButtonColors from './icon-button.colors.module.css';
import iconButtonStructure from './icon-button.structure.module.css';

/**
 * Renders a button component with icon.
 *
 * @param {Object} props - Properties for the button.
 * @param {string} props.href - URL for the button to navigate to.
 * @param {boolean} [props.isExternal=false] - Whether the button should open in a new tab.
 * @param {string} [props.type='default'] - Type of the button.
 * @param {string} [props.variant='primary'] - Variant of the button.
 * @param {string} [props.className] - Additional CSS class for the button.
 * @param {string} [props.supportText] - Support text for accessibility.
 * @param {() => void} props.onClick - Function to be called when the button is clicked.
 * @param {JSX.Element} props.children - Child elements of the button, Typically used for icon.
 * @return {JSX.Element} Button component.
 */
export default function IconButton({
    href,
    hrefExternal = false,
    type = 'default',
    variant = 'primary',
    className,
    supportText,
    onClick,
    children
}: {
    href: string;
    hrefExternal?: boolean;
    type?: 'default' | 'filled';
    variant?: 'primary' | 'secondary';
    className?: string;
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
                ${iconButtonStructure.container}
                ${iconButtonEffects.ripple}
                ${iconButtonColors.common}
                ${iconButtonColors[type] || iconButtonColors.default}
                ${iconButtonColors[variant] || iconButtonColors.primary}
                ${className && className}`
            }
        >
            {children}
        </Link>
    );
}

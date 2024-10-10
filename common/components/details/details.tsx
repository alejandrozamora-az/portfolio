import detailColors from './details.colors.module.css';
import detailStructure from './details.structure.module.css';

export default function Details(
    {
        title,
        variant = "primary",
        className,
        children
    }: {
        title: JSX.Element;
        variant?: "primary" | "secondary";
        className?: string;
        children: any;
    }): JSX.Element {
    return (
        <details className={className}>
            <summary className={`
            ${detailStructure.containerButton}
            ${detailColors.buttonDefault}
            ${detailColors[variant] || detailColors.primary}
            `}>
                {title}
            </summary>

            {children}
        </details>
    );
}
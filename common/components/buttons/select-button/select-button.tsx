import selectButtonStructure from "./select-button.structure.module.css";
import selectButtonColors from "./select-button.colors.module.css";
import selectButtonEffects from "./select-button.effects.module.css";

import Text from "@/common/components/text/text";
import Button from "@/common/components/buttons/button/button";

import { SelectItem } from "@/common/definitions";
import { useState } from "react";

/**
 * Renders a button that displays a list of options to select from.
 *
 * @param {Object} props - Properties for the button.
 * @param {string} props.text - The text to display in the button.
 * @param {SelectItem} props.currentOption - The currently selected option.
 * @param {SelectItem[]} props.options - List of options to select from.
 * @param {(option: SelectItem) => void} props.onChange - Function to call when an option is selected.
 * @param {"primary"|"secondary"} [props.variant="primary"] - The variant of the button.
 * @param {JSX.Element} [props.icon] - The icon to display before the text in the button.
 * @return {JSX.Element} The rendered button component.
 */
export default function SelectButton(
    {
        text,
        currentOption,
        options,
        onChange,
        variant = "primary",
        icon
    }: {
        text: string;
        currentOption: SelectItem;
        options: SelectItem[];
        onChange: (option: SelectItem) => void;
        variant?: "primary" | "secondary";
        icon?: JSX.Element
    }): JSX.Element {
    const [isOpen, setOpen] = useState(false);

    return (
        <div className={`${selectButtonStructure.container}`}>
            <Button
                href="#"
                type="default"
                variant={variant}
                onClick={() => setOpen(!isOpen)}
                supportText={text}
                leading={icon}
                className={`${isOpen && selectButtonColors.surface}`}
            >
                <Text type="body" text={text} />
            </Button>

            <div className={`
                    ${selectButtonStructure.items}
                    ${isOpen && selectButtonEffects.open}
                    ${selectButtonColors.surface}
                `}>
                {options.map((option) => (
                    <button
                        key={option.key}
                        title={option.display}
                        onClick={() => option.key !== currentOption.key && onChange(option)}
                        className={`
                            ${selectButtonStructure.itemButton}
                            ${selectButtonEffects.ripple}
                            ${selectButtonColors.default}
                            ${selectButtonColors[variant]}
                            ${option.key === currentOption.key && selectButtonColors.selected}
                        `}
                    >
                        <Text type="body" text={option.display} />
                    </button>
                ))}
            </div>
        </div>
    );
}

'use client'

import { usePathname, useRouter } from "next/navigation";

import { i18n } from "@/i18n";
import SelectButton from "@/common/components/buttons/select-button/select-button";

import LanguageIcon from "@/app/_lib/icons/language";

/**
 * Renders a button to select the language of the app.
 *
 * @param {Object} props - Properties for the button.
 * @param {string} [props.variant='primary'] - The variant of the button.
 * @return {JSX.Element} The rendered button component.
 */
export default function SelectLanguageButton({
  variant = "primary"
}: {
  variant?: "primary" | "secondary" | undefined
}): JSX.Element {
  const pathName = usePathname();
  const router = useRouter();

  const currentLocale = i18n.locales.find((locale) => locale.code === pathName.split("/")[1]) || i18n.defaultLocale;

  function changeLanguage(selected: string) {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = selected;
    router.replace(segments.join("/"));
  };

  return (
    <SelectButton
      text={currentLocale.display}
      variant={variant}
      icon={<LanguageIcon className="icon" />}
      onChange={(option) => changeLanguage(option.value)}
      currentOption={
        { key: currentLocale.code, display: currentLocale.display, value: currentLocale.code }
      }
      options={
        i18n.locales.map((locale) => ({
          key: locale.code,
          display: locale.display,
          value: locale.code,
        }))
      }
    />
  );
}

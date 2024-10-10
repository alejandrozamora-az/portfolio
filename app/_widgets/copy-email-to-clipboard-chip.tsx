'use client'

import { useState } from 'react';
import dynamic from 'next/dynamic';

import Chip from '@/common/components/chip/chip';
import IconButton from '@/common/components/buttons/icon-button/icon-button';

const CopyIcon = dynamic(() => import('@/app/_lib/icons/copy'));

export default function CopyEmailToClipboardChip({
    copiedToClipboardText,
    variant
}: {
    copiedToClipboardText: string;
    variant: "primary" | "secondary";
}) {
    const email = "alejandrozamora.engineer@gmail.com";
    const [copied, setCopied] = useState(false);

    const handleCopyToClipboard = () => {
        if (!navigator.clipboard) {
            return;
        }

        navigator.clipboard.writeText(email).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }).catch(() => { setCopied(false) });
    };

    return (
        <Chip text={copied ? copiedToClipboardText : email}>
            <IconButton
                href="#contact-section"
                variant={variant}
                onClick={handleCopyToClipboard}
                supportText="Copy Email"
            >
                <CopyIcon className="icon" />
            </IconButton>
        </Chip>
    );
}
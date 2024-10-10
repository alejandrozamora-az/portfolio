import Image from 'next/image';

import IconButton from '@/common/components/buttons/icon-button/icon-button';

export default function Logo() {
    return (
        <IconButton href="/" supportText="Home">
            <Image
                src="https://res.cloudinary.com/dlyfwab7x/image/upload/v1725241350/AZ_white_dox6za.webp"
                alt="Logo Alejandro Zamora"
                width={80}
                height={80}
                className="icon-xl px-s py-s"
            />
        </IconButton>
    );
}
import Script from 'next/script';

export default function LinkedinProfileCard() {
    return (
        <div>
            <div className="badge-base LI-profile-badge" data-locale="en_US" data-size="large" data-theme="dark" data-type="HORIZONTAL" data-vanity="alejandrozamora-az" data-version="v1"></div>
            <Script strategy="lazyOnload" src="https://platform.linkedin.com/badges/js/profile.js" async defer type="text/javascript" />
        </div>
    );
}

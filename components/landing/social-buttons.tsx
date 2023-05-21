import Image from 'next/image';

const socialLinks = [
  {
    image: '/assets/images/icons/social/facebook.svg',
    name: 'facebook',
    link: 'https://www.facebook.com/JDLandscapingLLC/',
  },
  {
    image: '/assets/images/icons/social/instagram.svg',
    name: 'instagram',
    link: 'https://www.instagram.com/jdlandscapingllc/',
  },
  {
    image: '/assets/images/icons/social/pinterest.svg',
    name: 'pinterest',
    link: 'https://www.pinterest.com/jdlandscapingllc/',
  },
  {
    image: '/assets/images/icons/social/google.svg',
    name: 'google',
    link: 'https://g.co/kgs/qszrXw',
  },
];

export function SocialButtons() {
  return (
    <>
      {socialLinks.map((social, i) => (
        <a
          href={social.link}
          target="_blank"
          rel="noreferrer"
          className="py-10 mx-10"
          key={i}
        >
          <Image src={social.image} width={14} height={14} alt={social.name} />
        </a>
      ))}
    </>
  );
}

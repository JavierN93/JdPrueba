import Link from 'next/link';
import Image from 'next/image';

import { SocialButtons } from '../landing/social-buttons';

const footer = [
  {
    title: 'Customer',
    links: [
      { label: 'Login', href: 'https://app.jdlandscaping.net/login' },
      { href: '/idea-board', label: 'Idea Board' },
      {
        href: 'https://estimate.jdlandscaping.net/request-estimate/step-1',
        label: 'Request Estimate',
      },
    ],
  },
  {
    title: 'Company',
    links: [
      { href: '/about', label: 'About us' },
      { href: '/why-choose-us', label: 'Why choose us' },
      { href: '/services', label: 'Services' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { href: '/contact', label: 'Contact us' },
      { label: 'Call 860 324 6218', href: 'tel:18603246218' },
    ],
  },
];

export function Footer() {
  return (
    <footer className="text-12 text-white text-center md:text-left">
      <section className="bg-gray py-80">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-3 gap-20">
            <div className="mb-40 lg:mb-0">
              <Link href="/">
                <a>
                  <Image
                    src="/assets/images/logo.svg"
                    height={62}
                    width={171}
                    alt="J & D Landscaping"
                  />
                </a>
              </Link>
              <div className="flex flex-col font-medium mt-30 lg:mt-65">
                <p className="text-white">Need help?</p>
                <a href="tel:18603246218" className="font-bold text-white">
                  Call 860 324 6218
                </a>
                <div className="my-20 md:mb-0 w-1/2 mx-auto md:mx-0">
                  J & D Landscaping LLC
                  <br />
                  123 South Main St.
                  <br />
                  East Windsor, CT, 06088
                </div>
              </div>
            </div>
            <div className="lg:col-span-2 text-white">
              <div className="grid lg:grid-cols-4 mt-5">
                {footer.map((group, i) => (
                  <div key={i}>
                    <div className="font-bold mb-10 md:mb-40 mt-20 md:mt-0">
                      {group.title}
                    </div>
                    <ul className="flex flex-col">
                      {group.links.map((item, j) => (
                        <li className="py-10" key={j}>
                          {item.href && (
                            <Link href={item.href}>
                              <a className="text-white font-medium cursor-pointer">
                                {item.label}
                              </a>
                            </Link>
                          )}
                          {!item.href && (
                            <a className="text-white cursor-pointer">
                              {item.label}
                            </a>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                <div>
                  <div className="font-bold mb-10 md:mb-40 mt-20 md:mt-0">
                    Follow us
                  </div>
                  <SocialButtons />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black text-10 py-10">
        <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between">
          <div>© 2022. J & D Landscaping. All rights reserved.</div>
          <div className="mb-10 md:mb-0">
            <Link href="/privacy" passHref>
              <a className="text-white">Privacy Policy</a>
            </Link>
            <span className="mx-5">|</span>
            <Link href="/legal-notice" passHref>
              <a className="text-white">Legal Notice</a>
            </Link>
          </div>
        </div>
      </section>
    </footer>
  );
}

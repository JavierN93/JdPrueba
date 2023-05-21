import Link from 'next/link';

import { SocialButtons } from '../landing/social-buttons';

interface Props {
  isSticky: boolean;
}

export function Header({ isSticky }: Props) {
  return (
    <>
      {!isSticky && (
        <section className="text-12 py-15 absolute top-0 left-0 right-0 z-50 hidden xl:block">
          <div className="container mx-auto flex justify-between">
            <div>
              <SocialButtons />
              <a
                className="text-white ml-50 cursor-pointer"
                href="tel:18603246218"
              >
                Need help? Call 860 324 6218
              </a>
            </div>
            <div>
              <Link href="https://app.jdlandscaping.net/login" passHref>
                <a className="btn btn-warning btn-mini">Login</a>
              </Link>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

Header.defaultProps = {
  isSticky: true,
};

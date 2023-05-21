import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

interface Props {
  children: any;
}

export default function InstallationServiceContentSection({ children }: Props) {
  const router = useRouter();
  const [currentPath, setCurrentPath] = useState<string>('');
  useEffect(() => {
    setCurrentPath(router.asPath);
  }, [router.asPath]);
  const categories = [
    { name: 'Patios', link: '/services/installation/patios' },
    { name: 'Walkways', link: '/services/installation/walkways' },
    { name: 'Retaining Walls', link: '/services/installation/retaining-walls' },
    { name: 'Driveways', link: '/services/installation/driveways' },
    { name: 'Pool Patios', link: '/services/installation/pool-patios' },
    {
      name: 'Complete Transformations',
      link: '/services/installation/complete-transformations',
    },
    { name: 'Design Services', link: '/services/installation/design-services' },
    {
      name: 'Steps & Staircases',
      link: '/services/installation/steps-and-staircases',
    },
    {
      name: 'Inlays & Borders',
      link: '/services/installation/inlay-and-borders',
    },
    {
      name: 'Pavers VS Concrete',
      link: '/services/installation/pavers-vs-concrete',
    },
  ];
  return (
    <section>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-0 lg:gap-x-40">
          <div className="col-span-1">
            <ul className="border-r-2 border-primary-75">
              {categories.map((category, categoryIndex: number) => (
                <li className="py-15" key={categoryIndex}>
                  <Link href={category.link} passHref>
                    <a
                      className={
                        currentPath === category.link
                          ? 'text-primary'
                          : 'text-light-400'
                      }
                    >
                      {category.name}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-3 mt-30 mb-100" id="content_root">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}

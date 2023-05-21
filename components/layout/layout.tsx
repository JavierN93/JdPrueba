import { useEffect, useState } from 'react';
import { Navbar } from './navbar';
import { Header } from './header';
import { Footer } from './footer';

interface Props {
  children: any;
}

export function Layout(props: Props) {
  const [sticky, setSticky] = useState(false);

  const headerHeight = 167;
  const headerHeightMobile = 179;
  useEffect(() => {
    window.addEventListener('scroll', () => {
      setSticky(
        window.scrollY >
          (window.innerWidth < 768 ? headerHeightMobile : headerHeight)
      );
    });
  });
  return (
    <>
      <Header isSticky={sticky} />
      <Navbar isSticky={sticky} />
      <section id="root" className="main-content-wrapper z-0">
        {props.children}
      </section>
      <Footer />
    </>
  );
}

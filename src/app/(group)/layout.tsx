import { FC, ReactNode } from "react";

import { Title } from "@/components/common/typography";

type IProps = { children: ReactNode };

const Layout: FC<IProps> = ({ children }) => (
  <main className="main pt-[var(--navbar)]" role="main">
    {children}
    <section className="section order-3">
      <header className="big-column flex items-center justify-center [@media(width<768px)]:mb-[var(--md)]">
        <Title variant="h2" size="big" text="VROOM car recovery" elClass="text-red md:tracking-widest uppercase font-bold" />
      </header>
      <footer className="small-column flex items-center justify-center">
        <a
          href="tel:+44 123 456 789"
          className="flex h-[var(--element-height)] w-[250px] items-center justify-center bg-red-dark text-sm font-bold uppercase tracking-[1px] text-white hover:bg-blue"
        >
          call us now
        </a>
      </footer>
    </section>
  </main>
);

export default Layout;

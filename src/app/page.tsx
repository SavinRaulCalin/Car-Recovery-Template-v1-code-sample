import { NextPage } from "next";

import { About, Coverage, Hero, Info, Prices, Procedures, Services } from "@/components/pages/home";

const Page: NextPage = () => (
  <main className="main pt-[var(--navbar)]" role="main">
    <Hero />
    <Procedures />
    <Prices />
    <About />
    <Info />
    <Services />
    <Coverage />
  </main>
);

export default Page;

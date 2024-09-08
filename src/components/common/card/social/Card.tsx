import { FC } from "react";
import classNames from "classnames";

import { Tbase, Tvariant } from "@/types/client";
import { Title, Paragraph, Anchor } from "../../typography";
import { Figure } from "../components";

type Tprops = Pick<Tbase, "svg" | "title" | "elClass"> & Tvariant;

const Card: FC<Tprops> = ({ svg, title: { text, variant }, paragraph, href, value, attr, elClass }) => (
  <li className={classNames("mb-[var(--md)] flex justify-start", { [`${elClass}`]: elClass })}>
    <Figure svg={svg} border />
    <header className="flex flex-col justify-center">
      <Title elClass="mb-[2px] font-medium md:text-sm [&::first-letter]:uppercase" text={text} variant={variant} />
      {href && value && <Anchor href={href} value={value} attr={attr} />}
      {paragraph && <Paragraph elClass="!text-sm !tracking-normal md:!text-xs">{paragraph}</Paragraph>}
    </header>
  </li>
);

export default Card;

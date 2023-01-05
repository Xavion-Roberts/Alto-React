import React, { FC } from "react";

interface linksProps {
  links: string[];
}

export const Links: FC<linksProps> = ({ links }) => {
  return (
    <ul className="flex flex-wrap 918:max-w-186">
      {links.map((item) => (
        <li key={item} className="mr-12">
          <a
            href={item}
            className="text-dark-blue leading-12 tracking-[0.75px] transition hover:text-light-blue"
          >
            {item}
          </a>
        </li>
      ))}
    </ul>
  );
};

import React, { FC } from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";

import { ReactComponent as ArrowLeft } from "assets/arrow-left.svg";

interface linkItemProps {
  href: string;
  className: string;
  children?: string;
}

export const LinkItem: FC<linkItemProps> = ({ href, className, children }) => {
  return (
    <Link
      to={href}
      className={classNames(
        "relative py-5 text-dark-blue text-lg rounded-full transition hover:opacity-70",
        className
      )}
    >
      {children}
      <ArrowLeft className="absolute top-[50%] translate-y-[-50%] right-7" />
    </Link>
  );
};

import { FC, HTMLAttributes } from "react";
import Link from "next/link";
import { Link as LinkScroll } from "react-scroll";
import { useRouter, NextRouter } from "next/router";

interface CustomLinkProps extends HTMLAttributes<HTMLAnchorElement> {
  to: string,
  scroll: boolean
};

const CustomLink: FC<CustomLinkProps> = ({ scroll, to, children, ...props }): JSX.Element => {
  const router: NextRouter = useRouter();

  if (scroll) {
    return (
      <></>
      // <LinkScroll  rel="services" href="#services" onClick={handleDrawerClose} activeClass="activeSection" offset={-90} to="services" spy smooth hashSpy={false} isdynamicduration={0} delay={0}>
      //   {children}
      // </LinkScroll>
    );
  } else {
    <></>
  };
};

CustomLink.defaultProps = {
  scroll: false,
  to: ""
};

export default CustomLink;
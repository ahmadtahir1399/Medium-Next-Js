import React from "react";
import Link from "next/link";
import Logo from "@/components/common/logos/Logo";

interface FooterLinkProps {
  name: string;
  link: string;
}

const FooterLink: React.FC<FooterLinkProps> = ({ name, link }) => (
  <li>
    <Link
      href={link}
      className="second-font cursor-pointer text-sm font-medium text-primarylink hover:underline"
    >
      {name}
    </Link>
  </li>
);

const footerLinks: FooterLinkProps[] = [
  { name: "Help", link: "/" },
  { name: "Status", link: "/" },
  { name: "About", link: "/" },
  { name: "Careers", link: "/" },
  { name: "Press", link: "/" },
  { name: "Blog", link: "/" },
  { name: "Privacy", link: "/" },
  { name: "Terms", link: "/" },
  { name: "Text to speech", link: "/" },
  { name: "Teams", link: "/" },
];

const footerLinksSmallMedium: FooterLinkProps[] = [
  "About",
  "Help",
  "Terms",
  "Privacy",
].map((name) => ({ name, link: "/" }));

interface LogoProps {
  className?: string;
}

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-primarygrey pt-6 pb-5 bg-primaryblack lg:bg-primarybody">
      <div className="container mx-auto px-4">
        <Logo className="mb-4 lg:hidden block fill-white" props={undefined} />
        <nav>
          <ul className="hidden lg:flex gap-5 justify-center flex-wrap">
            {footerLinks.map((link) => (
              <FooterLink key={link.name} {...link} />
            ))}
          </ul>
          <ul className="lg:hidden flex gap-5 justify-start flex-wrap">
            {footerLinksSmallMedium.map((link) => (
              <FooterLink key={link.name} {...link} />
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;

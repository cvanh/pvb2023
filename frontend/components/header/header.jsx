import Image from "next/image";
import { SMenu } from "./header.styled";
import { useQuery } from "@apollo/client";
import { GetMenu } from "../../lib/queries";
import Link from "next/link";
import { useState } from "react";

export default function header() {
  const [OpenMobileMenu, setOpenMobileMenu] = useState(false);
  const { data: { menuItems: { nodes: data } = {} } = {} } = useQuery(GetMenu, {
    variables: { location: "HEADER_MENU" },
  });
  return (
    <SMenu>
      <div className="menu">
        {/* desktop menu */}
        <Image
          alt="logo"
          className="menuLogo"
          src="/logo.svg"
          width={74}
          height={74}
        />
        <ul className="menuItems desktopMenu">
          {data?.length > 0 &&
            data.map((menu) => (
              <Link key={menu.id} href={menu.uri}>
                <li>{menu.title}</li>
              </Link>
            ))}
        </ul>
        {/* mobile menu */}
        <Image
          className="menuItems mobileMenu"
          alt=""
          src="/mobilemenu.svg"
          // onClick={() => {
          //   setOpenMobileMenu(!OpenMobileMenu);
          // }}
          width={48}
          height={48}
        />
        {OpenMobileMenu && (
          <ul className="menuMobilePopover">
            {data?.length > 0 &&
              data.map((menu) => (
                <Link key={menu.id} href={menu.uri}>
                  <li>{menu.title}</li>
                </Link>
              ))}
          </ul>
        )}
      </div>
      <div className="menuGradient" />
    </SMenu>
  );
}

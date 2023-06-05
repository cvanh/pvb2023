import Image from "next/image";
import { SMenu } from "./header.styled";
import { useQuery } from "@apollo/client";
import { GetMenu } from "../../lib/queries";
import Link from "next/link";

export default function header() {
  const { data: { menuItems: { nodes: data } = {} } = {} } = useQuery(GetMenu, {
    location: "HEADER_MENU",
  });
  return (
    <SMenu>
      <div className="menu">
        <Image className="menuLogo" src="/logo.svg" width={74} height={74} />
        <ul className="menuItems desktopMenu">
          {data?.length > 0 &&
            data.map((menu) => (
              <Link key={menu.id} href={menu.uri}>
                <li>{menu.title}</li>
              </Link>
            ))}
        </ul>
        <Image
          className="menuItems mobileMenu"
          src="/mobilemenu.svg"
          width={48}
          height={48}
        />
      </div>

      <div className="menuGradient" />
    </SMenu>
  );
}

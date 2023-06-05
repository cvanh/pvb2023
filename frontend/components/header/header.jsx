import Image from "next/image";
import Menu from "../menu";
import { SMenu } from "./header.styled";
import { useQuery } from "@apollo/client";
import { GetMenu } from "../../lib/queries";
import Link from "next/link";

export default function header() {
  const { data: { menuItems: { nodes: data } = {} } = {} } = useQuery(GetMenu, {
    location: "HEADER_MENU",
  });
  console.log(data);
  return (
    <SMenu>
      <div className="menu">
        <Image className="menuLogo" src="/logo.svg" width={74} height={74} />
        <ul className="menuItems desktopMenu">
          {data?.length > 0 &&
            data.map((menu) => (
              <Link key={menu.id} href={menu.uri}>
                <span>{menu.title}</span>
              </Link>
            ))}
        </ul>
      </div>
      <div className="menuGradient" />
    </SMenu>
  );
}

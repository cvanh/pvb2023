import { useQuery } from "@apollo/client";
import { GetMenu } from "../../lib/queries";
import Icon from "../icon";
import { SFooter } from "./footer.styled";
import Link from "next/link";

export default function Footer() {
  const { data: { menuItems: { nodes: data } = {} } = {} } = useQuery(GetMenu, {
    variables: { location: "FOOTER_MENU" },
  });
  console.log(data);
  return (
    <SFooter>
      <div className="block">
        <h4>Leger des Heils Enkeltje Zelfstandig</h4>
      </div>
      <div className="block">
        <p>menu</p>
        {data?.length > 0 &&
          data.map((item) => (
            <Link href={item?.uri} key={item?.id}>
              <div>{item.title}</div>
            </Link>
          ))}
      </div>
      <div className="block">
        <Icon
          border="10px solid red"
          borderRound="50px"
          icon="FACEBOOK"
          viewbox="0 0 30 30"
          size={20}
          background="red"
          color="white"
        />
        <Icon
          border="10px solid red"
          borderRound="50px"
          icon="TWITTER"
          viewbox="0 0 37 30"
          size={20}
          background="red"
          color="white"
        />
        <Icon
          border="10px solid red"
          borderRound="50px"
          icon="INSTAGRAM"
          viewbox="0 0 16 16"
          size={20}
          background="red"
          color="white"
        />
      </div>
    </SFooter>
  );
}

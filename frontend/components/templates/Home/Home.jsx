import { useQuery } from "@apollo/client";
import { getHomePage, getPaths } from "../../../lib/queries";
import Page from "../../page";
import Pagehero from "../../pagehero";

export default function HomePage({ data: { nodeByUri: data = {} } = {} }) {
  const { error, data: { nodeByUri: { hero } = {} } = {} } =
    useQuery(getHomePage);
  console.log(hero);

  return (
    <Page>
      {data.title && <h1>{data.title}</h1>}
      <Pagehero data={hero} />
    </Page>
  );
}

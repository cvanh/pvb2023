import { useQuery } from "@apollo/client";
import { getCourses, getHomePage, getPaths } from "../../../lib/queries";
import Page from "../../page";
import Pagehero from "../../pagehero";
import Courses from "../../courses";

export default function HomePage({ data: { nodeByUri: data = {} } = {} }) {
  const { error, data: { nodeByUri: { hero } = {} } = {} } =
    useQuery(getHomePage);
  console.log(hero);
  const { data: { courses: { nodes: courses } = {} } = {} } = useQuery(
    getCourses,
    { variables: { items: 10 } }
  );

  return (
    <Page>
      <Pagehero data={hero} />
      <Courses data={courses} />
    </Page>
  );
}

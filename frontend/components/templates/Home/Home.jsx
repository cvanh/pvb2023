import { useQuery } from "@apollo/client";
import { getCourses, getHomePage, getPaths } from "../../../lib/queries";
import Page from "../../page";
import Pagehero from "../../pagehero";
import Card from "../../card";

export default function HomePage({ data: { nodeByUri: data = {} } = {} }) {
  const { error, data: { nodeByUri: { hero } = {} } = {} } =
    useQuery(getHomePage);
  console.log(hero);
  const { data: { courses: { nodes: Courses } = {} } = {} } = useQuery(
    getCourses,
    { variables: { items: 10 } }
  );

  return (
    <Page>
      <Pagehero data={hero} />
      <div className="courses">
        {Courses?.length > 0 &&
          Courses.map((item) => <Card key={item?.id} data={item} />)}
      </div>
    </Page>
  );
}

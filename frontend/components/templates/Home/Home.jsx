import { useQuery } from "@apollo/client";
import { getHomePage, getPaths } from "../../../lib/queries";
import Page from "../../page";

export default function HomePage({ data: { nodeByUri: data = {} } = {} }) {
  const { error, data: latestPosts } = useQuery(getHomePage);

  return (
    <Page>
      {data.title && <h1>{data.title}</h1>}

      <p>pages:</p>
      {latestPosts?.pages?.nodes.map((post, index) => (
        <h6>{post.title}</h6>
      ))}

      <p>posts:</p>
      {latestPosts?.posts?.nodes?.map((post, index) => {
        <h6>{post.title}</h6>;
      })}
      {/* <Flexcontent flexContent={flexContent}/> */}
    </Page>
  );
}

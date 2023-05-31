import { getByUri, getPaths } from "../lib/queries";
import Page from "../components/page";
import DefaultPost from "../components/templates/DefaultPost";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";

export default function Index() {
  const router = useRouter();
  console.log("aspath", router.asPath);

  const { loading, error, data } = useQuery(getByUri, {
    variables: { uri: "/contact" },
  });

  console.log(data);
  console.log(error);
  console.log(loading);

  if (loading) {
    // return <center>loading.....</center>;
  }

  if (error || !data) {
    console.log(error);
    // return <center>error while fetching page</center>;
  }

  return (
    <Page>
      <DefaultPost data={data} />
    </Page>
  );
}

// export async function getStaticPaths() {
//   const data = client.query({ query: getPaths });
//   console.log(data);
//   return {
//     paths: [
//       { params: { postSlug: "/" } },
//       { params: { postSlug: "sth-else" } },
//     ],
//     fallback: true,
//   };
// }

// export const getStaticProps = async () => {
//   // console.log(ctx);
//   const { data } = await client.query({
//     query: getByUri,
//     variables: { uri: "/" },
//   });

//   console.log(process.env.NEXT_PUBLIC_API_URL);

//   return {
//     props: { a: 1 },
//     revalidate: 10,
//   };
// };

import { getByUri, getPaths } from "../lib/queries";
import Page from "../components/page";
import DefaultPost from "../components/templates/DefaultPost";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";

export default function Index() {
  const router = useRouter();
  console.log("aspath", router.asPath);

  const { loading, error, data } = useQuery(getByUri, {
    variables: { uri: router.asPath },
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


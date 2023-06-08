import { getByUri } from "../lib/queries";
import DefaultPost from "../components/templates/DefaultPost";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import HomePage from "../components/templates/Home";

export default function Index() {
  const { asPath } = useRouter();

  const {
    loading,
    error,
    data: page,
  } = useQuery(getByUri, {
    variables: { uri: asPath },
  });

  if (loading) {
    // return <center>loading.....</center>;
  }

  if (error) {
    // return <center>error</center>;
  }

  switch (page?.nodeByUri?.template?.templateName) {
    case "Home":
      return <HomePage data={page} />;
    default:
      return <DefaultPost />;
  }
}

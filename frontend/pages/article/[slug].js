import { getByUri, getCourseByUri, getPaths } from "../../lib/queries";
import Page from "../../components/page";
import DefaultPost from "../../components/templates/DefaultPost";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";

export default function Index() {
  const router = useRouter();

  const { loading, error, data } = useQuery(getCourseByUri, {
    variables: { uri: router.asPath },
  });

  if (loading) {
    return <center>loading.....</center>;
  }

  if (error || !data) {
    console.log(error);
    return <center>error while fetching page</center>;
  }

  switch (data?.nodeByUri?.template?.templateName) {
    case "Home":
      return <HomePage data={page} />;
    case "":
      return;
    default:
      return <DefaultPost data={data} />;
  }
}

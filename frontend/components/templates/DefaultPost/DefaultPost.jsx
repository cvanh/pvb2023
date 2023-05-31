import Flexcontent from "../../flexcontent";
import Page from "../../page";

export default function DefaultPost({ data }) {
  return (
    <Page>
      <h1>defaulta post</h1>
      {data && <div>there is data</div>}
      {/* <Flexcontent flexContent={flexContent}/> */}
    </Page>
  );
}

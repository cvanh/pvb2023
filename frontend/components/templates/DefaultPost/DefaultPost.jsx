import Image from "next/image";
import Flexcontent from "../../flexcontent";
import Page from "../../page";
import Container from "../../container";

export default function DefaultPost({ data: { nodeByUri: data } = {} }) {
  console.log(data);
  return (
    <Page>
      <Container>
        {data?.featuredImage && (
          <Image
            src={data?.featuredImage?.node?.sourceUrl}
            width={970}
            alt=""
            height={600}
          />
        )}
        <div>
          <span
            dangerouslySetInnerHTML={{ __html: data?.author?.node?.name }}
          />
          <span dangerouslySetInnerHTML={{ __html: data?.date }} />
        </div>
        <article dangerouslySetInnerHTML={{ __html: data?.content }} />
      </Container>
    </Page>
  );
}

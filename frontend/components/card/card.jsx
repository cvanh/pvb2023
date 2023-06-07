import Link from "next/link";
import { SCard } from "./card.styled";

export default function Card({ data }) {
  return (
    <Link href={data?.uri}>
      <SCard bgImage={data?.featuredImage?.node?.sourceUrl}>
        <h1 className="cardTitle">{data.title}</h1>
        <div className="cardAuthor">{data?.author?.node?.name}</div>
        {console.log(data)}
      </SCard>
    </Link>
  );
}

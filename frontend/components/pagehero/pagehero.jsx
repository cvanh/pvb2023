import React from "react";
import Image from "next/image";
import Container from "../container/container";
import { SHero, SImageBackground } from "./pagehero.styled";

export default function Pagehero({ data }) {
  return (
    <Container>
      <SHero>
        <div className="box heroText">
          <h1 dangerouslySetInnerHTML={{ __html: data?.title }} />
          <div dangerouslySetInnerHTML={{ __html: data?.subtitle }} />
          <button>{data?.cta?.title}</button>
        </div>
        <div className="box">
          <Image
            height={600}
            width={600}
            className="heroImage"
            alt=""
            src={data?.heroimage?.sourceUrl}
            srcSet={data?.heroimage?.srcsSet}
          />
          <SImageBackground bg={data?.herocolor} />
        </div>
      </SHero>
    </Container>
  );
}

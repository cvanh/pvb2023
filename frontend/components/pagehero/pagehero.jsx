import React from "react";
import { Container } from "./pagehero.styled";
import Image from "next/image";

export default function Pagehero({ data }) {
  console.log(data);
  return (
    <Container>
      <div className="box">
        <h4>{data?.title}</h4>
        <div>{data?.subtitle}</div>
        <button>{data?.cta?.title}</button>
      </div>
      <div className="box">
        <Image
          height={100}
          width={100}
          alt=""
          src={data?.heroimage?.sourceUrl}
          srcset={data?.heroimage?.srcsSet}
        />
      </div>
    </Container>
  );
}

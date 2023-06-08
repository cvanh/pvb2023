import React from "react";
import Page from "../../page";
import Courses from "../../courses";

export default function Posts({ data }) {
  return (
    <Page>
      <h1 dangerouslySetInnerHTML={{ __html: data?.title }} />
      <Courses amount={12} />
    </Page>
  );
}

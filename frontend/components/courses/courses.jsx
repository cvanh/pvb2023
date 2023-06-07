import Link from "next/link";
import { SCourses, SCourse } from "./courses.styled";

export default function Courses({ data }) {
  return (
    <SCourses>
      {data?.length &&
        data.map((course) => (
          <Link href={course?.uri}>
            <SCourse bgImage={course?.featuredImage?.node?.sourceUrl}>
              <div className="cardAuthor">{course?.author?.node?.name}</div>
              <h3
                className="cardTitle"
                dangerouslySetInnerHTML={{ __html: course.title }}
              />
            </SCourse>
          </Link>
        ))}
    </SCourses>
  );
}

import Link from "next/link";
import { SCourses, SCourse } from "./courses.styled";
import { useQuery } from "@apollo/client";
import { getCourses } from "../../lib/queries";

export default function Courses({ amount = 3 }) {
  const { data: { courses: { nodes: courses } = {} } = {} } = useQuery(
    getCourses,
    { variables: { items: amount } }
  );
  return (
    <SCourses>
      {courses?.length &&
        courses.map((course) => (
          <Link key={course.id} href={course?.uri}>
            <SCourse bgImage={course?.featuredImage?.node?.sourceUrl}>
              <div className="cardInfo">
                <div className="cardAuthor">{course?.author?.node?.name}</div>
                <h3
                  className="cardTitle"
                  dangerouslySetInnerHTML={{ __html: course.title }}
                />
              </div>
            </SCourse>
          </Link>
        ))}
    </SCourses>
  );
}

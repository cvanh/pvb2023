import Link from "next/link";

export default function Desktopmenu({ data }) {
  console.log(data);
  return (
    <ul className="menuItems">
      {data?.length > 0 &&
        data.map((menu) => (
          <Link key={menu.id} href={menu.uri}>
            <span>{menu.title}</span>
          </Link>
        ))}
    </ul>
  );
}

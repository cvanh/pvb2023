import Desktopmenu from "./desktopmenu";
import Mobilemenu from "./mobilemenu";

export default function Menu({ data }) {
  return (
    <div>
      <Desktopmenu data={data} />
      <Mobilemenu data={data} />
    </div>
  );
}

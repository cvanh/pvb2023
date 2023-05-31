import { Salert } from "./alert.styled";

export default function Alert({ preview }) {
  if (!preview) return null;
  return (
    <Salert>
      This is a page preview.
      <a href="/api/exit-preview">Click here</a>
      to exit preview mode.
    </Salert>
  );
}

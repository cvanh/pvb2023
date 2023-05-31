export default function Terminal({ sdout }) {
  return (
    <>
      <div>
        {sdout && sdout.map((line, index) => <p key={index}>{line}</p>)}
      </div>
      <p>
        <input type="text" />
      </p>
    </>
  );
}

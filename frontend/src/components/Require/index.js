export default function Require({ children }) {
  return (
    <span className="require">
      {children}
      <span className=" text-base">{` *`}</span>
    </span>
  );
}

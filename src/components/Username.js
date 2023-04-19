import Data from "./users.json";

export default function Username() {
  return (
    <div className="cent">
      {Data.map((data) => {
        return <div className="box">{data.username}</div>;
      })}
    </div>
  );
}

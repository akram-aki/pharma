import Icons from "./Icons";
export default function IconsRender({ name }) {
  return <div>{Icons[name] || <span>icon not found</span>}</div>;
}

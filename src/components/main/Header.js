export default function Header(props) {
  const { title, description } = props;
  return (
    <div className="header">
      <h1 className="title">{title}</h1>
      <p className="description">{description}</p>
    </div>
  );
}

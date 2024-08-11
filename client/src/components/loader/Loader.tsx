import "./Loader.css";
function Loader({ size = "small" }: { size?: LoaderType }) {
  const loaderClassName = `loader loader--${size}`;

  return (
    <div className={loaderClassName}>
      <div className="loader__dot"></div>
      <div className="loader__dot"></div>
      <div className="loader__dot"></div>
    </div>
  );
}

export default Loader;

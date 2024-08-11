import "./responsiveImg.css";
function ResponsiveImg({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div className={`responsive-image__img-wrapper ${className}`}>
      <img src={src} alt={alt} className="responsive-image__img-wrapper__img" />
    </div>
  );
}

export default ResponsiveImg;

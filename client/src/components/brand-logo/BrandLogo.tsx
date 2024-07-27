import brandLogo from "../../assets/SocialO-logo.png";
import "./brandLogo.css";
function BrandLogo() {
  return (
    <div className="brand-logo__wrapper">
      <img src={brandLogo} className="brand-logo__wrapper__img" />
    </div>
  );
}

export default BrandLogo;

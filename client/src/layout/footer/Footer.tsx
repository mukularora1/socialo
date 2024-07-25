import "./footer.css";
function Footer() {
  const currentYear = new Date().getFullYear();
  const copyrightText = `© ${currentYear} All Rights Reserved, SocialO`;
  return (
    <div className="footer">
      <div className="footer__list-wrapper">
        <div>1</div>
        <div>{copyrightText}</div>
        <div>3</div>
      </div>
    </div>
  );
}

export default Footer;

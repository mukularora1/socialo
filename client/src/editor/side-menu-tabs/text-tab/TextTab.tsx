import "./textTab.css";

function TextTab() {
  const textVariantClick = (variant: string) => {
    console.log(variant);
  };
  return (
    <div className="text-tab">
      <div className="side-menu__heading">Texts</div>
      <div className="text-tab__text-variants">
        <div
          className="text-tab__text-variants__item text-tab__text-variants__heading"
          draggable
          onClick={() => textVariantClick("heading")}>
          Heading
        </div>
        <div
          className="text-tab__text-variants__item text-tab__text-variants__sub-heading"
          draggable
          onClick={() => textVariantClick("sub-heading")}>
          Sub heading
        </div>
        <div
          className="text-tab__text-variants__item text-tab__text-variants__para"
          draggable
          onClick={() => textVariantClick("para")}>
          Paragraph
        </div>
      </div>
    </div>
  );
}

export default TextTab;

import img from "../../../assets/images/login.png";
import InputBox from "../../../components/input-box/InputBox";
import ResponsiveImg from "../../../components/responsive-img/ResponsiveImg";
import "./elementsTab.css";
function ElementsTab() {
  return (
    <div className="elements-tab">
      <InputBox placeholder="Search svg, shapes etc" />
      <div className="elements-tab__element-groups">
        <div className="elements-tab__element-groups__group-wrapper">
          <div className="elements-tab__element-groups__group-wrapper__name-wrapper">
            <div className="elements-tab__element-groups__group-wrapper__name-wrapper--group-name">
              Group nameasfsfasfasfsa
            </div>
            <div className="elements-tab__element-groups__group-wrapper__name-wrapper--see-more">
              see more
            </div>
          </div>
          <div className="elements-tab__element-groups__group-wrapper__element-wrapper">
            <div className="elements-tab__element-groups__group-wrapper__element-wrapper--element">
              <ResponsiveImg src={img} alt="hello world" />
            </div>
            <div className="elements-tab__element-groups__group-wrapper__element-wrapper--element">
              <ResponsiveImg src={img} alt="hello world" />
            </div>
            <div className="elements-tab__element-groups__group-wrapper__element-wrapper--element">
              <ResponsiveImg src={img} alt="hello world" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ElementsTab;

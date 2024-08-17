import { useDispatch } from "react-redux";
import InputBox from "../../../components/input-box/InputBox";
import ResponsiveImg from "../../../components/responsive-img/ResponsiveImg";
import { addObjects } from "../../store/editorSlice";
import "./elementsTab.css";
const elements = [
  {
    id: 1,
    url: "/circle-filled-svgrepo-com.svg",
  },
  {
    id: 2,
    url: "/square-heart-svgrepo-com.svg",
  },
  {
    id: 3,
    url: "/square-svgrepo-com-curve.svg",
  },
  {
    id: 4,
    url: "/square-svgrepo-com.svg",
  },
  {
    id: 5,
    url: "/christmas-tree-svgrepo-com.svg",
  },
];
function ElementsTab() {
  const dispatch = useDispatch();
  const handleElementClick = (url: string) => {
    dispatch(
      addObjects({
        type: "svg",
        url: `http://localhost:5173${url}`,
        left: 150,
        top: 150,
        width: 50,
        height: 50,
        id: Math.ceil(Math.random() * 10000),
        angle: 0,
        fill: "#000",
        flipX: false,
        flipY: false,
        lockMovementX: false,
        lockMovementY: false,
        lockRotation: false,
        lockScalingX: false,
        lockScalingY: false,
        opacity: 1,
        scaleX: 0.5,
        scaleY: 0.5,
      })
    );
  };
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
            {elements.map(({ id, url }) => (
              <div
                key={id}
                className="elements-tab__element-groups__group-wrapper__element-wrapper--element"
                onClick={() => handleElementClick(url)}
                draggable>
                <ResponsiveImg src={url} alt={`Element ${id}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ElementsTab;

import Button from "../components/button/Button";
import TopHeaderBar from "../components/header/TopHeaderBar";
import PostCalendar from "../social-media-management/calendar/Calendar";
import LegendFilter from "../social-media-management/legend-filter/LegendFilter";

function SocialMediaPublisher() {
  return (
    <div>
      <TopHeaderBar>
        Publisher
        <Button isDropDown>Download</Button>
        <Button variant="outlined">create post</Button>
      </TopHeaderBar>
      <PostCalendar />
      <LegendFilter />
    </div>
  );
}

export default SocialMediaPublisher;

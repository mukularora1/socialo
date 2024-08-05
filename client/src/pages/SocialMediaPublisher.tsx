import PostCalendar from "../social-media-management/calendar/Calendar";
import LegendFilter from "../social-media-management/legend-filter/LegendFilter";
import PublisherHeader from "../social-media-management/publisher-header/PublisherHeader";

function SocialMediaPublisher() {
  return (
    <div>
      <PublisherHeader />
      <div style={{ display: "flex" }}>
        <div>sidemenu</div>
        <div style={{ padding: "12px", width: "80vw" }}>
          <PostCalendar />
        </div>
      </div>
      <LegendFilter />
    </div>
  );
}

export default SocialMediaPublisher;

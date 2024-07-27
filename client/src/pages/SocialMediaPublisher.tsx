import PostCalendar from "../social-media-management/calendar/Calendar";
import LegendFilter from "../social-media-management/legend-filter/LegendFilter";
import PublisherHeader from "../social-media-management/publisher-header/PublisherHeader";

function SocialMediaPublisher() {
  return (
    <div>
      <PublisherHeader />
      <div style={{ padding: "12px" }}>
        <PostCalendar />
      </div>
      <LegendFilter />
    </div>
  );
}

export default SocialMediaPublisher;

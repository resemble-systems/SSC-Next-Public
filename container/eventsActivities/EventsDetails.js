//component
import Layout from "../layout/Layout";
import InnerPageTitleSection from "../../common_components/innerPageTitleSection/InnerPageTitleSection";
// import CommonInnerPagesTitleBg from "../../common_components/commonInnerPagesTitleBg/CommonInnerPagesTitleBg";
import EventDetailsIntro from "../../components/eventDetails/eventDetailsIntro/EventDetailsIntro";
import RecentEventActivities from "../../components/eventDetails/recentEventActivities/RecentEventActivities";
//css
import styles from "./events-details.module.sass";

export default function EventsDetails({
  eventData,
  eventsData,
  servicesActivities,
  socialMediaIcon,
  footerLink,
  otherResoruces,
}) {
  return (
    <>
      <Layout
        socialMediaIcon={socialMediaIcon}
        footerLink={footerLink}
        otherResoruces={otherResoruces}
        ogTitle={`IsDB - Events`}
        title={`Events`}
      >
        <div className={`position-relative`}>
          <div className={`${styles.bg_color}`}></div>
          <div
            className={`${styles.bg_pattern}`}
            style={{
              backgroundImage: `url(/hero.svg),url(/Dotted-line-path-301.svg)`,
            }}
          ></div>
          <div className="container">
            <InnerPageTitleSection title={"Event Details"} />
          </div>
          <EventDetailsIntro eventData={eventData} />
        </div>
        <RecentEventActivities
          eventsData={eventsData}
          servicesActivities={servicesActivities}
        />
      </Layout>
    </>
  );
}

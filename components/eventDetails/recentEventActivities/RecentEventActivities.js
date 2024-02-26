import { Row, Col } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
//component
import EventsCard from "../../../common_components/eventsCard/EventsCard";
import AppBtn from "../../../common_components/appBtn/AppBtn";
//css
import styles from "./recent-event-activities.module.sass";
//service
import { setBackground } from "../../../services/eventService";

function ResponsiveView({ eventsData, servicesActivities, span, gutter }) {
  return (
    <Row gutter={gutter}>
      {eventsData?.slice(0, 3).map((event, index) => {
        let Type = { Type: event.attributes.EventType };
        let [bg, bgImage, boxShadow] = setBackground(Type, servicesActivities);
        return (
          <Col
            span={span}
            className={`p-0 d-flex align-items-center flex-column`}
            key={"card" + index}
          >
            <EventsCard
              bg={bg}
              bgImage={bgImage}
              boxShadow={boxShadow}
              data={event}
              btn={true}
            />
          </Col>
        );
      })}
    </Row>
  );
}

export default function RecentEventActivities({
  eventsData,
  servicesActivities,
}) {
  //for recent event
  let filteredEventsData = eventsData?.filter(
    (eventData) =>
      new Date(eventData.attributes.StartDate).getTime() <=
        new Date().getTime() &&
      new Date(eventData.attributes.EndDate).getTime() >= new Date().getTime()
  );

  return filteredEventsData &&
    filteredEventsData?.length > 0 &&
    servicesActivities &&
    servicesActivities?.data?.length > 0 ? (
    <div
      className={`${styles.recent_event_bg}`}
      style={{
        backgroundImage: `url(/eventsActivities/allEventsSectionBg.svg)`,
      }}
    >
      {/* <div className={`${styles.container}`}> */}
      <div className="container ">
        <h3
          className={`${styles.recent_events_title} mb-5 mt-3`}
        >{`Recent Events & Activities`}</h3>
        <Row>
          <Col xs={0} sm={0} md={0} lg={24} xl={24}>
            <ResponsiveView
              eventsData={filteredEventsData}
              servicesActivities={servicesActivities}
              span={8}
              gutter={[48, 40]}
            />
          </Col>
          <Col xs={24} sm={24} md={24} lg={0} xl={0} className={`mt-3`}>
            <ResponsiveView
              eventsData={filteredEventsData}
              servicesActivities={servicesActivities}
              span={24}
              gutter={[0, 40]}
            />
          </Col>
        </Row>
        <div className={`d-flex w-100 justify-content-end mt-3`}>
          <AppBtn
            text={`See All`}
            prefix={""}
            suffix={<ArrowRightOutlined className={`ml-2 pt-1`} />}
            mode={"dark"}
            href={"/events"}
          />
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
}

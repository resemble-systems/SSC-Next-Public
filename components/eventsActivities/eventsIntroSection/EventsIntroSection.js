import { useRouter } from "next/router";
import { useState } from "react";
import { Row, Col, Button } from "antd";
//component
import EventsCard from "../../../common_components/eventsCard/EventsCard";
import AppRoundedBtn from "../../../common_components/appRoundedBtn/AppRoundedBtn";
import EventRegistrationModal from "../../../common_components/appModal/eventRegistrationModal/EventRegistrationModal";
//css
import styles from "./events-intro-section.module.sass";

export default function EventsIntroSection({
  title,
  event,
  bg,
  bgImage,
  boxShadow,
}) {
  const router = useRouter();
  const [eventRegistrationModal, setEventRegistrationModal] = useState(false);

  const formattedText = event.attributes?.Description?.replace(/\n/g, "<br>");

  return (
    <div className={`${styles.events_bg}`}>
      <div className={`${styles.events_container} py-2`}>
        <Row>
          {/* <Col xs={0} sm={0} md={24} lg={24} xl={24}>
            <h3 className={`${styles.upcoming_events_title} mb-5`}>{title}</h3>
          </Col>
          <Col xs={24} sm={24} md={0} lg={0} xl={0}>
            <h3 className={`${styles.upcoming_events_title} mb-1`}>{title}</h3>
          </Col> */}
          <Col xs={24} sm={24} md={10} lg={8} xl={8}>
            <EventsCard
              bg={bg}
              bgImage={bgImage}
              boxShadow={boxShadow}
              data={event}
              btn={false}
            />
          </Col>
          <Col xs={24} sm={24} md={14} lg={14} xl={16}>
            <div
              className={`d-flex justify-content-center flex-column h-100 pl-4`}
            >
              <h3 className={`${styles.event_title}`}>
                {event.attributes.Title}
              </h3>
              <p className={`${styles.event_author}`}>
                {event.attributes.Author}
              </p>
              <div className={`${styles.event_description} overflow-auto mb-3`}>
                <div dangerouslySetInnerHTML={{ __html: formattedText }} />
              </div>
              <div className={`mt-3`}>
                <AppRoundedBtn
                  text={"View More"}
                  prefix={""}
                  suffix={""}
                  bg={"blue"}
                  outline={"dark"}
                  long={true}
                  href={"none"}
                  btnStyle={{}}
                  // onClickHandler={e => {
                  //   setEventRegistrationModal(true);
                  // }}
                  onClickHandler={(e) => {
                    router.push(`/events/${event.id}`);
                  }}
                />
                <EventRegistrationModal
                  setVisiblety={setEventRegistrationModal}
                  visible={eventRegistrationModal}
                />
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

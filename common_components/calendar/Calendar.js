import React, { useState } from "react";
import { Row, Col } from "antd";
// component
import AppCalendar from "./AppCalender";
import Indicators from "../indicator/Indicators";
import EventViewer from "./EventViewer";
import CommonSectionHeader from "../../components/landing/commonSectionHeader/CommonSectionHeader";
//css
import styles from "./calendar.module.sass";

export default function Calendar({ eventsData, servicesActivities }) {
  const [displayEvent, setDisplayEvent] = useState([]);
  const [selectedDay, setSelectedDay] = useState("");

  return (
    <div
      className={`${styles.calender_bg}`}
      style={{
        backgroundImage: `url(/background/calender.svg)`,
      }}
    >
      {/* <div className={`${styles.calender_container} mt-5`}> */}
      <div className={`container mt-5`}>
        <CommonSectionHeader title={"Events Calendar"} sliderSection={false} />
        <div className={`${styles.calender_subcontainer}`}>
          <Row>
            <Col xs={24} sm={24} md={18} lg={18} xl={18}>
              <Row>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                  <div className={`${styles.main}`}>
                    <AppCalendar
                      eventsData={eventsData}
                      servicesActivities={servicesActivities}
                      setDisplayEvent={setDisplayEvent}
                      setSelectedDay={setSelectedDay}
                    />
                  </div>
                </Col>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                  {servicesActivities.data?.length > 6 ? (
                    <div
                      className={`overflow-auto`}
                      style={{ height: "110px" }}
                    >
                      <Indicators
                        onColorIndicatorClick={() => {}}
                        servicesActivities={servicesActivities.data}
                      />
                    </div>
                  ) : (
                    <Indicators
                      onColorIndicatorClick={() => {}}
                      servicesActivities={servicesActivities.data}
                    />
                  )}
                </Col>
              </Row>
            </Col>
            <Col xs={0} sm={0} md={6} lg={6} xl={6}>
              <div className={`${styles.slider}`}>
                <EventViewer
                  displayEvent={displayEvent}
                  selectedDay={selectedDay}
                  servicesActivities={servicesActivities}
                />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

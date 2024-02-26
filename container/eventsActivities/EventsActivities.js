import React from "react";
//component
import Layout from "../layout/Layout";
import InnerPageTitleSection from "../../common_components/innerPageTitleSection/InnerPageTitleSection";
import EventsIntroSection from "../../components/eventsActivities/eventsIntroSection/EventsIntroSection";
import AllEventsActivities from "../../components/eventsActivities/allEventsActivities/AllEventsActivities";
import Slider from "../../components/eventsActivities/slider/Slider";

import Calendar from "../../common_components/calendar/Calendar";
//services
import { setBackground } from "../../services/eventService";
//css
import styles from "./events-activities.module.sass";
import { Button, Popconfirm } from "antd";
import SearchBar from "../../common_components/searchBar/SearchBar";
import { SearchOutlined } from "@ant-design/icons";

const items = [];
var SectionTitle = "";

function setSliderData(eventsData, servicesActivities) {
  // console.log("<====== Function Console ======>", servicesActivities);
  SectionTitle = "Upcoming Events";
  let filteredEventsData = eventsData.data.filter(
    (eventData) =>
      new Date(eventData.attributes.StartDate).getTime() > new Date().getTime()
  );

  if (filteredEventsData && filteredEventsData.length === 0) {
    SectionTitle = "Recent Events";
    filteredEventsData = eventsData.data.filter(
      (eventData) =>
        new Date(eventData.attributes.StartDate).getTime() <=
          new Date().getTime() &&
        new Date(eventData.attributes.EndDate).getTime() >= new Date().getTime()
    );
  }
  if (filteredEventsData && filteredEventsData.length === 0) {
    SectionTitle = "Past Events";
    filteredEventsData = eventsData.data.filter(
      (eventData) =>
        new Date(eventData.attributes.EndDate).getTime() < new Date().getTime()
    );
  }

  // console.log("--->", filteredEventsData);
  filteredEventsData.forEach((event, i) => {
    let Type = { Type: event.attributes.EventType };
    let [bg, bgImage, boxShadow] = setBackground(Type, servicesActivities);
    items.push(
      <div data-value={i.toString()}>
        <EventsIntroSection
          // title={title}
          event={event}
          bg={bg}
          bgImage={bgImage}
          boxShadow={boxShadow}
        />
      </div>
    );
  });
}

export default function EventsActivities({
  eventsData,
  servicesActivities,
  socialMediaIcon,
  footerLink,
  otherResoruces,
}) {
  // console.log("<=== Container Console ====>", servicesActivities);
  setSliderData(eventsData, servicesActivities);
  const title = () => {
    return <SearchBar search={"events"} styleApply={true} />;
  };
  return (
    <>
      <Layout
        socialMediaIcon={socialMediaIcon}
        footerLink={footerLink}
        otherResoruces={otherResoruces}
        ogTitle={`IsDB - Events`}
        title={`Events`}
      >
        {/* <div className={`position-relative`}> */}
        <div className={`${styles.bg_color}`}></div>
        <div
          className={`${styles.bg_pattern}`}
          style={{
            backgroundImage: `url(/hero.svg),url(/Dotted-line-path-301.svg)`,
          }}
        ></div>
        <div className="d-flex container">
          <InnerPageTitleSection title={"events & activities"} />
          <div className="d-flex align-items-center mt-5 mx-2">
            <Popconfirm title={title} okText="" cancelText="">
              <Button
                type="text"
                icon={<SearchOutlined className={styles.search_icon} />}
                className={`${styles.search_btn}`}
              />
            </Popconfirm>
          </div>
        </div>
        <div
          style={{ position: "relative" }}
          className={`container ${styles.intro_title} ${styles.section_title}`}
        >
          <h3 style={{ fontSize: "35px" }}>{SectionTitle}</h3>
        </div>
        <Slider items={items} eventsData={eventsData} />
        {/* </div> */}
        <Calendar
          eventsData={eventsData}
          servicesActivities={servicesActivities}
        />
        <AllEventsActivities
          eventsData={eventsData}
          servicesActivities={servicesActivities}
        />
      </Layout>
    </>
  );
}

import React, { useState, useEffect, useRef } from "react";
import { Row } from "antd";
// component
import CommonSectionHeader from "../commonSectionHeader/CommonSectionHeader";
import AppMultiSlider from "../../../common_components/appMultiSlider/AppMultiSlider";
import EventsCard from "../../../common_components/eventsCard/EventsCard";
//service
import { setBackground } from "../../../services/eventService";
//css
import styles from "./upcoming-events.module.sass";

const responsive = {
  0: { items: 1, itemsFit: "contain" },
  768: { items: 2, itemsFit: "contain" },
  1024: { items: 2, itemsFit: "contain" },
  1440: { items: 4, itemsFit: "contain" },
  2560: { items: 6, itemsFit: "contain" },
};

let items = [];
function setItem(data, servicesActivities) {
  // console.log("ServiceData-->", data);
  items = [];
  data.forEach((item, i) => {
    let Type = { Type: item.attributes.EventType };
    let [bg, bgImage, boxShadow] = setBackground(Type, servicesActivities);
    return items.push(
      <div
        className={`item my-4 ${styles.event_card_container}`}
        data-value={i.toString()}
      >
        <EventsCard
          data={item}
          bg={bg}
          bgImage={bgImage}
          boxShadow={boxShadow}
          btn={true}
        />
      </div>
    );
  });
}

export default function UpcomingEvents({ eventsData, servicesActivities }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [sliderFinalIndex, setSliderFinalIndex] = useState(3);
  const [prevBtn, setPrevBtn] = useState("disable");
  const [nextBtn, setNextBtn] = useState("enable");
  const [finalIndex, setFinalIndex] = useState(0);
  const eventsRef = useRef(null);
  const [eventsDatafilter, setEventsDatafilter] = useState(null);
  const [title, setTitle] = useState("");
  //upcomming events
  // let upcommingEventsData = eventsData.filter(
  //   (eventData) =>
  //     new Date(eventData.EventStart).getTime() > new Date().getTime()
  // );
  console.log("testEvents-->", eventsData);
  useEffect(() => {
    let title = "Upcoming Events";
    let displayEventsData = eventsData.filter(
      (eventData) =>
        new Date(eventData.attributes.StartDate).getTime() >
        new Date().getTime()
    );
    if (displayEventsData && displayEventsData.length === 0) {
      title = "Recent Events";
      displayEventsData = eventsData.filter(
        (eventData) =>
          new Date(eventData.attributes.StartDate).getTime() <=
            new Date().getTime() &&
          new Date(eventData.attributes.EndDate).getTime() >=
            new Date().getTime()
      );
    }
    if (displayEventsData && displayEventsData.length === 0) {
      title = "Past Events";
      displayEventsData = eventsData.filter(
        (eventData) =>
          new Date(eventData.attributes.EndDate).getTime() <
          new Date().getTime()
      );
    }
    setTitle(title);
    setFinalIndex(Math.floor(parseInt(displayEventsData?.length)));
    setItem(displayEventsData, servicesActivities);
    setEventsDatafilter(displayEventsData);
  }, [eventsData, servicesActivities]);
  useEffect(() => {
    if (window.innerWidth >= 1440) setSliderFinalIndex(5);

    if (window.innerWidth < 1440 && window.innerWidth > 1024)
      setSliderFinalIndex(4);

    if (window.innerWidth <= 1024 && window.innerWidth >= 768)
      setSliderFinalIndex(2);

    if (window.innerWidth < 768) setSliderFinalIndex(1);
  }, []);

  useEffect(() => {
    // console.log("activeindexnews", activeIndex, finalIndex);
    if (activeIndex === 0) setPrevBtn("disable");
    else setPrevBtn("enable");
    if (activeIndex === finalIndex - sliderFinalIndex) setNextBtn("disable");
    else setNextBtn("enable");
  }, [activeIndex, finalIndex]);

  const slidePrev = () => {
    // if (activeIndex > 0) setActiveIndex(activeIndex - 1);
    eventsRef.current.slidePrev();
  };

  const slideNext = () => {
    // if (activeIndex < finalIndex /* - sliderFinalIndex */)
    //   setActiveIndex(activeIndex + 1);
    eventsRef.current.slideNext();
  };

  const onSlideChanged = ({ item }) => setActiveIndex(item);

  return (
    eventsDatafilter &&
    eventsDatafilter?.length > 0 && (
      <Row className={`pt-5`}>
        {/* <div className={`${styles.events_container}`}> */}
        <div className={`container`}>
          <CommonSectionHeader
            title={`${title} & Activities`}
            sliderSection={true}
            prevBtn={prevBtn}
            nextBtn={nextBtn}
            onClickPrev={slidePrev}
            onClickNext={slideNext}
          />
        </div>
        {/* <AppMultiSlider
          responsive={responsive}
          items={items}
          activeIndex={activeIndex}
          onSlideChanged={onSlideChanged}
          paddingLeft={100}
          paddingRight={50}
          animationType={"slide"}
          disableDotsControls={true}
          sliderFrom={"Events"}
        /> */}
        <AppMultiSlider
          responsive={responsive}
          items={items}
          activeIndex={activeIndex}
          onSlideChanged={onSlideChanged}
          paddingLeft={100}
          paddingRight={50}
          animationType={"slide"}
          disableDotsControls={true}
          sliderFrom={"Events"}
          refVariable={eventsRef}
          stopAnimation={nextBtn === "disable"}
        />
      </Row>
    )
  );
}

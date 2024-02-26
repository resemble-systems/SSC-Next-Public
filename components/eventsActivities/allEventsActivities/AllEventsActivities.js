import Image from "next/image";
import { useState } from "react";
import { Menu, Row, Col, Empty } from "antd";
//component
import AppRoundedBtn from "../../../common_components/appRoundedBtn/AppRoundedBtn";
import Indicatores from "../../../common_components/indicator/Indicators";
import EventsCard from "../../../common_components/eventsCard/EventsCard";
//css
import styles from "./all-events-activities.module.sass";
//service
import { setBackground } from "../../../services/eventService";
import Indicators from "../../../common_components/indicator/Indicators";

function ResponsiveView({ eventsData, serviceData, span, gutter }) {
  // console.log("<=== Responsive Console ====>", eventsData);

  return (
    <Row gutter={gutter}>
      {eventsData?.length > 0 ? (
        eventsData.map((event, index) => {
          let Type = { Type: event.attributes.EventType };
          let [bg, bgImage, boxShadow] = setBackground(Type, serviceData);

          return (
            <Col
              span={span}
              className={`p-0 d-flex align-items-center flex-column`}
              key={"activities" + index}
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
        })
      ) : (
        <Empty
          className={`${styles.empty_card} d-flex justify-content-center align-items-center`}
        />
      )}
    </Row>
  );
}

function setDDMenu(dropDownData, eventsData, setFilteredEventsData, setTitle) {
  const handleMouseOver = (event) => {
    event.target.style.color = "#2D763750";
  };

  const handleMouseOut = (event) => {
    event.target.style.color = "";
  };

  return (
    <Menu>
      {dropDownData && dropDownData.length > 0
        ? dropDownData.map((data, i) => (
            <div key={"dropdown" + i}>
              <Menu.Item>
                <a
                  className={`${styles.dropDownList} py-3`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                  onClick={() =>
                    menuChangeHandler(
                      eventsData.data,
                      data.ddType,
                      setFilteredEventsData,
                      setTitle,
                      dropDownData
                    )
                  }
                  onMouseOver={handleMouseOver}
                  onMouseOut={handleMouseOut}
                >
                  {data.serviceName}
                </a>
              </Menu.Item>
              {i !== dropDownData.length - 1 && <Menu.Divider />}
            </div>
          ))
        : null}
    </Menu>
  );
}

// function onColorIndicatorClick(eventsData, serviceType, setFilteredEventsData) {
//   let filteredData = eventsData.filter(
//     (data) => data.EventType === serviceType
//   );
//   setFilteredEventsData(filteredData);
// }

function menuChangeHandler(
  eventsData,
  ddType,
  setFilteredEventsData,
  setTitle,
  dropDownData
) {
  console.log("testData-->", eventsData);
  // if (serviceType === "all") {
  //   setFilteredEventsData(eventsData);
  // } else {
  //   let filteredData = eventsData.filter(
  //     (data) => data.EventType === serviceType
  //   );
  //   setFilteredEventsData(filteredData);
  // }

  let ddSelectedData = dropDownData.find((data) => ddType === data.ddType);
  let title = ddSelectedData.serviceName.split(" ")[0];
  switch (ddType) {
    case "all":
      setTitle(title);
      setFilteredEventsData(eventsData);
      break;
    case "pastEvents":
      setTitle(title);
      let pastEvents = eventsData.filter(
        (data) =>
          new Date(data.attributes.EndDate).getTime() < new Date().getTime()
      );
      setFilteredEventsData(pastEvents);
      break;
    case "ongoingEvents":
      setTitle(title);
      let ongoingEvents = eventsData.filter(
        (data) =>
          new Date(data.attributes.StartDate).getTime() <
            new Date().getTime() &&
          new Date(data.attributes.EndDate).getTime() > new Date().getTime()
      );
      setFilteredEventsData(ongoingEvents);
      break;
    case "upcommingEvents":
      setTitle(title);
      let upcommingEvents = eventsData.filter(
        (data) =>
          new Date(data.attributes.StartDate).getTime() > new Date().getTime()
      );
      setFilteredEventsData(upcommingEvents);
      break;
    default:
      break;
  }
}

export default function AllEventsActivities({
  eventsData,
  servicesActivities,
}) {
  // console.log("<=== Component Console ====>", servicesActivities);
  const [filteredEventsData, setFilteredEventsData] = useState(eventsData.data);
  const [serviceType, setServiceType] = useState("");
  const [title, setTitle] = useState("All");

  let dropDownData = [
    { serviceName: "All", ddType: "all" },
    { serviceName: "Past Events", ddType: "pastEvents" },
    { serviceName: "Ongoing Events", ddType: "ongoingEvents" },
    { serviceName: "Upcomming Events", ddType: "upcommingEvents" },
  ];
  let dropDownMenu = setDDMenu(
    dropDownData,
    eventsData,
    setFilteredEventsData,
    setTitle
  );

  const onColorIndicatorClick = (serviceType) => {
    console.log("hello", serviceType);
    const filteredData = eventsData.data.filter(
      (event) => event.attributes.EventType === serviceType
    );
    setFilteredEventsData(filteredData);
  };

  return (
    <div
      className={`${styles.all_events_bg} py-5`}
      style={{
        backgroundImage: `url(/eventsActivities/allEventsSectionBg.svg)`,
      }}
    >
      {/* <div className={`${styles.container} pb-5`}> */}
      <div className={`container pb-5`}>
        <Row>
          <Col xs={14} sm={14} md={18} lg={18} xl={18}>
            <h3
              className={`${styles.all_events_title} mb-5`}
            >{`${title} Events & Activities`}</h3>
          </Col>
          {
            <Col
              xs={10}
              sm={10}
              md={6}
              lg={6}
              xl={6}
              className={`d-flex justify-content-end`}
            >
              <div className={`${styles.filter_btn}`}>
                <AppRoundedBtn
                  text={""}
                  prefix={
                    <Image
                      src={"/eventsActivities/filter.svg"}
                      alt={"fliter-icon"}
                      width={20}
                      height={20}
                    />
                  }
                  suffix={""}
                  bg={"blue"}
                  outline={"dark"}
                  long={false}
                  href={"none"}
                  onClickHandler={() => {}}
                  dropDown={true}
                  dropDownData={dropDownMenu}
                />
              </div>
            </Col>
          }
          {/* <Col
            xs={6}
            sm={6}
            md={6}
            lg={6}
            xl={6}
            className={`d-flex justify-content-end`}
          >
            <div className={`${styles.filter_btn}`}>
              <AppRoundedBtn
                text={""}
                prefix={
                  <img
                    src={"/eventsActivities/filter.svg"}
                    alt={"fliter-icon"}
                    width={20}
                    height={20}
                  />
                }
                suffix={""}
                bg={"blue"}
                outline={"dark"}
                long={false}
                href={"none"}
                onClickHandler={() => {}}
                dropDown={true}
                dropDownData={dropDownMenu}
              />
            </div>
          </Col> */}
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            {
              <div className={`${styles.indicatores_container} pl-5 mb-5`}>
                {servicesActivities.data?.length > 6 ? (
                  <div className={`overflow-auto`} style={{ height: "110px" }}>
                    <Indicatores
                      onColorIndicatorClick={onColorIndicatorClick}
                      servicesActivities={servicesActivities.data}
                      pointer={"pointer"}
                    />
                  </div>
                ) : (
                  <Indicatores
                    onColorIndicatorClick={onColorIndicatorClick}
                    servicesActivities={servicesActivities.data}
                    pointer={"pointer"}
                  />
                )}
              </div>
            }
          </Col>
          <Col xs={0} sm={0} md={0} lg={24} xl={24}>
            {eventsData &&
              eventsData.data.length > 0 &&
              servicesActivities &&
              servicesActivities.data.length > 0 && (
                <ResponsiveView
                  eventsData={filteredEventsData}
                  serviceData={servicesActivities}
                  span={8}
                  gutter={[48, 40]}
                />
              )}
          </Col>
          <Col xs={24} sm={24} md={24} lg={0} xl={0} className={``}>
            {eventsData &&
              eventsData?.length > 0 &&
              servicesActivities &&
              servicesActivities.length > 0 && (
                <ResponsiveView
                  eventsData={filteredEventsData}
                  serviceData={servicesActivities}
                  span={24}
                  gutter={[0, 40]}
                />
              )}
          </Col>
        </Row>
      </div>
    </div>
  );
}

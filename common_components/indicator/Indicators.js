import { Row, Col } from "antd";
//css
import styles from "./indicator.module.sass";
import { useEffect, useState } from "react";

export default function Indicators({
  onColorIndicatorClick,
  servicesActivities,
  pointer,
}) {
  const [indicatorTexts, setIndicatorTexts] = useState(null);
  // console.log("color", onColorIndicatorClick);
  // let indicateTexts = [
  //   {
  //     text: "Wellbeing Awareness",
  //     serviceType: "WellbeingAwareness",
  //     color: { bg: styles.wellbeing_bg, ft: styles.wellbeing_ft },
  //   },
  //   {
  //     text: "Family & Social",
  //     serviceType: "FamilySocial",
  //     color: { bg: styles.family_bg, ft: styles.family_ft },
  //   },
  //   {
  //     text: "Virtual Sports & Recreational",
  //     serviceType: "VirtualSportsRecreational",
  //     color: { bg: styles.sports_bg, ft: styles.sports_ft },
  //   },
  //   {
  //     text: "Religious Activities",
  //     serviceType: "ReligiousActivities",
  //     color: { bg: styles.religious_bg, ft: styles.religious_ft },
  //   },
  //   {
  //     text: "Entertainment & Online Games",
  //     serviceType: "EntertainmentOnlineGames",
  //     color: { bg: styles.entertainment_bg, ft: styles.entertainment_ft },
  //   },
  //   {
  //     text: "Educational Activities",
  //     serviceType: "EducationalCourses",
  //     color: { bg: styles.educational_bg, ft: styles.educational_ft },
  //   },
  // ];
  console.log("servicesData-->", servicesActivities);
  useEffect(() => {
    if (servicesActivities && servicesActivities?.length > 0) {
      let filteredService = servicesActivities?.filter(
        (service) => service.attributes.IsEvent === "Yes"
      );
      let indicators = filteredService?.map((data) => {
        return {
          text: data?.attributes?.ServiceType,
          serviceType: data?.attributes?.ServiceType,
          color: data?.attributes?.Color,
        };
      });
      setIndicatorTexts(indicators);
    }
  }, [servicesActivities]);
  console.log("servicesActivities-->", indicatorTexts);
  return (
    <div className={`${styles.footer}`}>
      <Row className={`${styles.footer_row}`}>
        {indicatorTexts &&
          indicatorTexts.length > 0 &&
          indicatorTexts.map((indicator, index) => {
            return (
              <Col
                xs={12}
                sm={12}
                md={8}
                lg={8}
                xl={8}
                className={`d-flex align-items-center my-2`}
                keys={index.toString()}
              >
                <div
                  style={{
                    backgroundColor: indicator?.color,
                    cursor: `${pointer === "pointer" ? "pointer" : ""}`,
                  }}
                  className={`${styles.indicator_box}`}
                  onClick={() => {
                    onColorIndicatorClick(indicator?.serviceType);
                  }}
                ></div>
                <div
                  style={{ color: indicator?.color }}
                  className={`${styles.indecator_text}`}
                >
                  {indicator?.text}
                </div>
              </Col>
            );
          })}
      </Row>
    </div>
  );
}

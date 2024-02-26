import Image from "next/image";
import { Row, Col } from "antd";
import AppSlider from "../../../common_components/appSlider/AppSlider";
//css
import styles from "./about-us-intro-section.module.sass";

export default function AboutUsIntroSection({ description }) {
  const image = [
    {
      url: "/aboutUs/objective1234.svg",
    },
    {
      url: "/aboutUs/Group_448.svg",
    },
  ];

  return (
    <div className={`${styles.introduction_bg}`}>
      <div className={`${styles.introduction_container} py-5`}>
        <Row>
          <Col xs={0} sm={0} md={0} lg={8} xl={8}>
            <div className={`${styles.image_container}`}>
              <AppSlider
                showIndicators={false}
                autoPlay={true}
                setAutoPlay={() => {}}
                stopOnHover={false}
                // fade={true}
                swipeable={false}
              >
                {image &&
                  image.map((img) => (
                    <Image src={img.url} alt="Image" width={342} height={350} />
                  ))}
              </AppSlider>
            </div>
          </Col>
          {/* For small tab display view */}
          <Col xs={24} sm={24} md={24} lg={0} xl={0}>
            <div className={`${styles.image_container}`}>
              <AppSlider
                showIndicators={false}
                autoPlay={true}
                setAutoPlay={() => {}}
                stopOnHover={false}
                // fade={true}
                swipeable={false}
              >
                {image &&
                  image.map((img) => (
                    <Image src={img.url} alt="Image" width={300} height={300} />
                  ))}
              </AppSlider>
            </div>
          </Col>
          <Col xs={24} sm={24} md={24} lg={16} xl={16}>
            <ul className={`pt-4 pl-3 ${styles.bullet}`}>
              {/* <li className={`mb-4`}>
                {
                  "The main objective of the IsDB Group Staff Social Club (SSC) is to enhance interaction between IsDB Group staff members and their families, thus fostering understanding between people and cultures. More interactions between staff members and their families requires first and foremost finding a suitable environment,  i.e. occasions to which staff members will be invited to share, exchange and learn about each other."
                }
              </li>
              <li>{`SSC was established as a voluntary association of all IsDB Group staff  members comprising of the Islamic Development Bank (IsDB) and members of  the IsDB Group (IRTI, ICIEC, ICD, ITFC and ISFD). The main purpose of the SSC is to organise social activities and events for the beneﬁt of all IsDB Group staff and their families.`}</li> */}
              {description?.length > 0 &&
                description?.map((data) => (
                  <li className={`mb-4`}>{data.attributes.Description}</li>
                ))}
            </ul>
          </Col>
        </Row>
      </div>
    </div>
  );
}

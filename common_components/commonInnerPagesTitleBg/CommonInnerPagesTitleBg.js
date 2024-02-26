import { Row, Col } from "antd";
//css
import styles from "./common-inner-pages-title-bg.module.sass";

export default function CommonInnerPagesTitleBg({
  children,
  backgroundPosition,
  page,
}) {
  return (
    <Row>
      <Col xs={24} sm={24} md={0} lg={24} xl={24}>
        <div
          className={`${
            page === "about-us" ? styles.aboutus_bg : styles.rest_page_bg
          }`}
          style={{
            backgroundImage: `url(/eventsActivities/sliderBg.svg),url(/hero.svg)`,
            // backgroundPosition: backgroundPosition,
          }}
        >
          {children}
        </div>
      </Col>
      <Col xs={0} sm={0} md={24} lg={0} xl={0}>
        <div
          className={`${
            page === "about-us" ? styles.aboutus_bg : styles.rest_page_bg
          } pb-4`}
          style={{
            backgroundImage: `url(/eventsActivities/sliderBg.svg),url(/hero.svg)`,
            // backgroundPosition: backgroundPosition,
          }}
        >
          {children}
        </div>
      </Col>
    </Row>
  );
}

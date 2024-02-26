import Image from "next/image";
import { Row, Col, Button } from "antd";
import moment from "moment";
//component
import AppRoundedBtn from "../../../common_components/appRoundedBtn/AppRoundedBtn";
//css
import styles from "./common-section.module.sass";

export default function CommonSection({
  news,
  section,
  imageWidth,
  imageHeight,
}) {
  const base_url = process.env.BASE_URL;
  return (
    <Row>
      {section === "intro" && (
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <h3 className={`${styles.intro_title} mb-5`}>Most Viewed</h3>
        </Col>
      )}
      <Col xs={8} sm={8} md={8} lg={8} xl={8}>
        <Image
          src={base_url + news.Image[0].url}
          alt={"publication-image"}
          width={imageWidth}
          height={imageHeight}
          className={`${styles.image}`}
        />
      </Col>
      <Col xs={8} sm={8} md={16} lg={16} xl={16}>
        <div className={`d-flex justify-content-center flex-column h-100 pl-4`}>
          <h3
            className={`${
              section === "intro"
                ? styles.intro_news_title
                : styles.section_news_title
            }`}
          >
            {news.Title.length > 25 ? news.Title.substring(0, 25) : news.Title}
          </h3>
          <p
            className={`${
              section === "intro"
                ? styles.intro_news_created_date
                : styles.section_news_created_date
            } mb-5`}
          >
            {moment(news.CreatedDate).format("D MMMM YYYY")}
          </p>
          {section === "intro" && (
            <p className={`${styles.intro_news_description} mb-5`}>
              {news.Description.length > 350
                ? news.Description.substring(0, 350)
                : news.Description}
            </p>
          )}
          <div className={`w-100`}>
            <AppRoundedBtn
              text={"Read More"}
              prefix={""}
              suffix={""}
              bg={"blue"}
              outline={"dark"}
              long={false}
              href={"https://www.google.co.in/"}
              btnStyle={{}}
              onClickHandler={() => {}}
              dropDown={false}
            />
          </div>
        </div>
      </Col>
    </Row>
  );
}

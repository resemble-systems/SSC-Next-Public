import { useState, useEffect } from "react";
import { Row, Col } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
// component
import AppBtn from "../../../common_components/appBtn/AppBtn";
import NewsPublicationsCard from "../../../common_components/newsPublicationsCard/NewsPublicationsCard";
// css
import styles from "./news-section.module.sass";

export default function NewsSection({ news }) {
  const [seeAll, setSeeAll] = useState(false);
  const [newsData, setNewsData] = useState(news.slice(0, 3));

  useEffect(() => {
    if (seeAll) {
      setNewsData(news);
    } else {
      setNewsData(news.slice(0, 6));
    }
  }, [seeAll, news]);

  return (
    <div className={`${styles.news_bg}`}>
      <div className={`${styles.news_container} pb-5`}>
        {/* <h3 className={`${styles.news_tilte} mb-5`}>News</h3> */}
        <Row gutter={[16, 16]}>
          {/* <Col span={24}>
            <h3 className={`${styles.news_tilte} mb-5`}>News</h3>
          </Col> */}
          {newsData.map((newsObject) => (
            <Col xs={24} sm={24} md={8} lg={8} xl={8}>
              <NewsPublicationsCard data={newsObject} />
            </Col>
          ))}
          <div className={`d-flex w-100 justify-content-end`}>
            <AppBtn
              text={seeAll ? `See Less` : `See All`}
              prefix={""}
              suffix={<ArrowRightOutlined className={`ml-2 pt-1`} />}
              mode={"dark"}
              // href={"/news-publications"}
              onClick={seeAll ? () => setSeeAll(false) : () => setSeeAll(true)}
            />
          </div>
        </Row>
      </div>
    </div>
  );
}

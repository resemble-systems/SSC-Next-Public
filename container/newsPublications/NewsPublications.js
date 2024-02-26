//component
import Layout from "../layout/Layout";
import InnerPageTitleSection from "../../common_components/innerPageTitleSection/InnerPageTitleSection";
import NewsIntroSection from "../../components/newsPublications/newsIntroSection/NewsIntroSection";
import Slider from "../../components/newsPublications/slider/Slider";
import PublicationsSection from "../../components/newsPublications/publicationsSection/PublicationsSection";
import NewsSection from "../../components/newsPublications/newsSection/NewsSection";
import CommonInnerPagesTitleBg from "../../common_components/commonInnerPagesTitleBg/CommonInnerPagesTitleBg";
import SearchBar from "../../common_components/searchBar/SearchBar";
//css
import styles from "./news-publications.module.sass";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Popconfirm } from "antd";
const items = [];

function setSliderData(news) {
  news.forEach((newsObject, i) => {
    items.push(
      <div data-value={i.toString()}>
        <NewsIntroSection
          news={newsObject}
          section={"intro"}
          imageWidth={"350"}
          imageHeight={"430"}
        />
      </div>
    );
  });
}

export default function NewsPublications({
  news,
  socialMediaIcon,
  footerLink,
  otherResoruces,
}) {
  setSliderData(news);
  const title = () => {
    return <SearchBar search={"news"} styleApply={true} />;
  };
  return (
    <>
      <Layout
        socialMediaIcon={socialMediaIcon}
        footerLink={footerLink}
        otherResoruces={otherResoruces}
        ogTitle={`IsDB - News & Publications`}
        title={`News`}
      >
        <div className={`position-relative`}>
          <div className={`${styles.bg_color}`}></div>
          <div
            className={`${styles.bg_pattern}`}
            style={{
              backgroundImage: `url(/hero.svg),url(/Dotted-line-path-301.svg)`,
            }}
          ></div>

          <div className="d-flex container">
            <InnerPageTitleSection title={"News"} />
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
          {/* <Slider items={items} news={news} /> */}
        </div>
        {/* <PublicationsSection news={news} /> */}
        <NewsSection news={news} />
      </Layout>
    </>
  );
}

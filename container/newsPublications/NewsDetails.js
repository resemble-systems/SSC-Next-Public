//component
import Layout from "../layout/Layout";
import InnerPageTitleSection from "../../common_components/innerPageTitleSection/InnerPageTitleSection";
import NewsDetailsIntro from "../../components/newsPubDetails/newsDetailsIntro/NewsDetailsIntro";
import AllNews from "../../components/newsPubDetails/allNews/AllNews";
//css
import styles from "./news-details.module.sass";

export default function NewsDetails({
  newsDetails,
  news,
  socialMediaIcon,
  footerLink,
  otherResoruces,
  routePath,
}) {
  return (
    <>
      <Layout
        socialMediaIcon={socialMediaIcon}
        footerLink={footerLink}
        otherResoruces={otherResoruces}
        ogTitle={`IsDB - News Details`}
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
          <div className="container">
            <InnerPageTitleSection title={"News Details"} />
          </div>
          <NewsDetailsIntro newsDetails={newsDetails} />
        </div>
        <AllNews news={news} routePath={routePath} />
      </Layout>
    </>
  );
}

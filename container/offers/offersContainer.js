import OfferSection from "../../components/offersComp/OfferSection";
import Layout from "../layout/Layout";
import InnerPageTitleSection from "../../common_components/innerPageTitleSection/InnerPageTitleSection";
//css
import styles from "./offers.module.sass";

export default function OffersContainer({ offers, socialMediaIcon }) {
  return (
    <>
      <Layout
        socialMediaIcon={socialMediaIcon}
        // footerLink={footerLink}
        // otherResoruces={otherResoruces}
        ogTitle={`IsDB - Offers & Discounts`}
        title={`Offers & Discounts`}
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
            <InnerPageTitleSection title={"Offers & Discounts"} />
          </div>
          <div className="container">
            <OfferSection offers={offers} />
          </div>
        </div>
      </Layout>
    </>
  );
}

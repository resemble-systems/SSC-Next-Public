// Common Components
import Layout from "../layout/Layout";
import CommonInnerPagesTitleBg from "../../common_components/commonInnerPagesTitleBg/CommonInnerPagesTitleBg";
import InnerPageTitleSection from "../../common_components/innerPageTitleSection/InnerPageTitleSection";

// Components
import ContactForm from "../../components/contactUs/contactForm/ContactForm";
import ContactDetails from "../../components/contactUs/contactDetails/ContactDetails";
import ContactMap from "../../components/contactUs/contactMap/ContactMap";
import ContactUsSection from "../../components/contactUs/contactUsSection/ContactUsSection";
//css
import styles from "./contact-us.module.sass";

export default function ContactUs({
  socialMediaIcon,
  footerLink,
  otherResoruces,
}) {
  return (
    // <>
    //   <div className={`position-relative`}>
    //     <div className={`${styles.bg_color}`}></div>
    //     <div
    //       className={`${styles.bg_pattern}`}
    //       style={{
    //         backgroundImage: `url(/hero.svg),url(/Dotted-line-path-301.svg)`,
    //       }}
    //     >
    //       <Layout
    //         socialMediaIcon={socialMediaIcon}
    //         footerLink={footerLink}
    //         otherResoruces={otherResoruces}
    //         ogTitle={`IsDB - Contact Us`}
    //         title={`Contact Us`}
    //       >
    //         <InnerPageTitleSection title={"Contact Us"} />
    //         {/* <ContactUsSection socialMediaIcon={socialMediaIcon} /> */}
    //         <ContactUsSection />
    //       </Layout>
    //     </div>
    //   </div>
    // </>
    <>
      <Layout>
        <div className={`position-relative`}>
          <div className={`${styles.bg_color}`}></div>
          <div
            className={`${styles.bg_pattern}`}
            style={{
              backgroundImage: `url(/hero.svg),url(/Dotted-line-path-301.svg)`,
            }}
          ></div>
          <div className="container">
            <InnerPageTitleSection title={"Contact Us"} />
          </div>
          <ContactUsSection />
          {/* </div> */}
          {/* </div> */}
        </div>
      </Layout>
    </>
  );
}

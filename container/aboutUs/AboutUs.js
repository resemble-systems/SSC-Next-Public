//component
import Layout from "../layout/Layout";
import InnerPageTitleSection from "../../common_components/innerPageTitleSection/InnerPageTitleSection";
import AboutUsIntroSection from "../../components/aboutUs/aboutUsIntroSection/AboutUsIntroSection";
import OurObjectiveSection from "../../components/aboutUs/ourMission/OurObjective";
import StaffSocialClub from "../../components/aboutUs/staffSocialClub/StaffSocialClub";
import VideoSection from "../../common_components/videoSection/VideoSection";
import CommonInnerPagesTitleBg from "../../common_components/commonInnerPagesTitleBg/CommonInnerPagesTitleBg";
import ExeTeamStructure from "../../components/aboutUs/exeTeamStructure/ExeTeamStructure";
//css
import styles from "./about-us.module.sass";

export default function AboutUs({
  socialMediaIcon,
  sscMemberData,
  siteVideos,
  footerLink,
  otherResoruces,
  description,
  objectives,
  team,
}) {
  let videoArray = siteVideos.data.sort(
    (a, b) =>
      new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  );

  return (
    <>
      <Layout
        socialMediaIcon={socialMediaIcon}
        footerLink={footerLink}
        otherResoruces={otherResoruces}
        ogTitle={`IsDB - About Us`}
        title={`About Us`}
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
            <InnerPageTitleSection title={"about us"} />
          </div>
          <AboutUsIntroSection description={description} />
        </div>
        <OurObjectiveSection objectives={objectives} />
        <StaffSocialClub sscMemberData={sscMemberData} />
        <ExeTeamStructure team={team} />
        {videoArray && videoArray[0] && <VideoSection video={videoArray[0]} />}
      </Layout>
    </>
  );
}

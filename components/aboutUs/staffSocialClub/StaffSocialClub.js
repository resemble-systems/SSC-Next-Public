import Image from "next/image";
import { Row, Col } from "antd";
//component
import MultiImageView from "../../../common_components/multiImageView/MultiImageView";
import AppSlider from "../../../common_components/appSlider/AppSlider";
//css
import styles from "./staff-social-club.module.sass";
function getFinalData(data) {
  let result = [];
  for (let i = 0; i < 8; i++) {
    result.push(data);
  }
  return result;
}

export default function StaffSocialClub({ sscMemberData }) {
  return (
    <div
      className={`${styles.ssc_bg}`}
      style={{
        backgroundImage: `url(/aboutUs/sscbg.svg)`,
      }}
    >
      {/* For small screens */}
      <Row>
        <Col xs={24} sm={24} md={0} lg={0} xl={0}>
          <Col xs={24} sm={24} md={0} lg={0} xl={0}>
            <h3 className={`${styles.mission_title} pl-4 mt-4 mb-5`}>
              Meet Our Staff Social Club (SSC) Executive Team
            </h3>
          </Col>
          <AppSlider
            showIndicators={false}
            autoPlay={true}
            setAutoPlay={() => {}}
            stopOnHover={false}
            swipeable={false}
          >
            {sscMemberData &&
              sscMemberData?.data?.map((img) => (
                <>
                  {
                    <Image
                      src={`${process.env.BASE_URL}${img?.attributes?.Attachments?.data[0]?.attributes?.url}`}
                      alt="Image"
                      width="250"
                      height="250"
                    />
                  }
                  <h5 className={`${styles.member_name} mt-3`}>
                    {img?.attributes?.Name}
                  </h5>
                  <p className={`${styles.member_degisnation}`}>
                    {img?.attributes?.Designation}
                  </p>
                </>
              ))}
          </AppSlider>
        </Col>
      </Row>
      {/* For large screen */}
      <Row>
        <Col xs={0} sm={0} md={24} lg={24} xl={24}>
          <MultiImageView
            title={`Meet Our Staff Social Club (SSC) Executive Team`}
            subTitle={`The SSC Executive Team shall comprise of a Chairperson, Deputy Chairperson, Treasurer and Members. It will be supported by a full-time coordinator.`}
            finalData={sscMemberData}
            page={`ssc`}
          />
        </Col>
      </Row>
    </div>
  );
}

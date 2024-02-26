import { Row, Col } from "antd";
//component
import ResponsiveView from "./ResponsiveView";
//css
import styles from "./footer.module.sass";

export default function Footer({
  logo,
  socialMediaIcon,
  footerLink,
  otherResoruces,
}) {
  return (
    <>
      <Row>
        <Col xs={0} sm={0} md={0} lg={24} xl={24}>
          <ResponsiveView
            view={"desktop"}
            logo={logo}
            socialMediaIcon={socialMediaIcon}
            footerLink={footerLink}
            otherResoruces={otherResoruces}
          />
        </Col>
        <Col xs={0} sm={0} md={24} lg={0} xl={0}>
          <ResponsiveView
            view={"tablet"}
            logo={logo}
            socialMediaIcon={socialMediaIcon}
            footerLink={footerLink}
            otherResoruces={otherResoruces}
          />
        </Col>
        <Col xs={24} sm={24} md={0} lg={0} xl={0}>
          <ResponsiveView
            view={"mobile"}
            logo={logo}
            socialMediaIcon={socialMediaIcon}
            footerLink={footerLink}
            otherResoruces={otherResoruces}
          />
        </Col>
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <div className={`${styles.rights_reserved}`}>
            <div>
              © 2021 copyrights are reserved. Designed and Developed by{" "}
              <span
                className={`${styles.org}`}
                onClick={() => window.open(`http://resemblesystems.com/`)}
              >
                Resemble Systems
              </span>
              .
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
}

import { useRouter } from "next/router";
import Image from "next/image";
import { Drawer, Row, Col, Button, Avatar } from "antd";
import { CloseOutlined, UserOutlined } from "@ant-design/icons";
//Css
import styles from "./drawer.module.sass";

export default function AppDrawer({
  otherResoruces,
  visbility,
  setVisbility,
  userLogedIn,
  setUserLogedIn,
}) {
  const router = useRouter();

  let menuLists = [
    {
      header: "Discover",
      links: [
        {
          name: "Home",
          link: "/",
        },
        {
          name: "About Us",
          link: "/about-us",
        },
        {
          name: "Events",
          link: "/events",
        },
        {
          name: "News",
          link: "/news",
        },
        {
          name: "Offers & Discounts",
          link: "/offers",
        },
        // {
        //   name: "Services & Activities",
        //   link: "/services-activities",
        // },
        // {
        //   name: "Online Games",
        //   link: "/entertainment-games",
        // },
      ],
    },
    // {
    //   header: "Services",
    //   links: [
    //     {
    //       name: "Wellbeing Awareness",
    //       link: "/services-activities/wellbeing-awareness",
    //     },
    //     {
    //       name: "Virtual Sports & Recreational",
    //       link: "/services-activities/virtual-sports-recreational",
    //     },
    //     {
    //       name: "Religious Activities",
    //       link: "/services-activities/religious-activities",
    //     },
    //     {
    //       name: "Educational Courses",
    //       link: "/services-activities/educational-courses",
    //     },
    //     {
    //       name: "Family & Social",
    //       link: "/services-activities/family-social",
    //     },
    //     {
    //       name: "Entertainment & Online Games",
    //       link: "/services-activities/entertainment-online-game",
    //     },
    //     {
    //       name: "IsDB Group Activities",
    //       link: "/services-activities/isDB-group-activities",
    //     },
    //     {
    //       name: "Buy & Sell",
    //       link: "/services-activities/buy-sell",
    //     },
    //   ],
    // },

    //Other Resource
    // otherResoruces &&
    //   otherResoruces.length > 0 && {
    //     header: "Other Resources",
    //     links: otherResoruces.map(data => {
    //       return { name: data.Title, link: data.Link };
    //     }) /* [
    //     {
    //       name: "News",
    //       link: "https://www.google.co.in/",
    //     },
    //     {
    //       name: "Press Office",
    //       link: "https://www.google.co.in/",
    //     },
    //     {
    //       name: "Resources",
    //       link: "https://www.google.co.in/",
    //     },
    //   ], */,
    //   },
  ];
  return (
    <>
      <Drawer
        placement={"left"}
        closable={false}
        height={"100vh"}
        width={"450px"}
        onClose={() => setVisbility(false)}
        open={visbility}
        key={"top"}
        bodyStyle={{ background: "#000000FA", color: "#fff" }}
        style={{ zIndex: "1200" }}
      >
        <Row>
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <span onClick={() => setVisbility(false)} className={`d-flex mb-3`}>
              <CloseOutlined className={`${styles.close_Icon_btn}`} />
              <p
                className={`d-flex ml-4 m-0 align-items-center ${styles.close_btn}`}
              >
                Close
              </p>
            </span>
          </Col>
          {/* <Col xs={24} sm={24} md={0} lg={0} xl={0}>
            <div
              className={`d-flex justify-content-center align-items-center flex-column`}
            >
              <Avatar
                size={50}
                src={
                  <Image
                    src={"/header/fake-avatar.jpg"}
                    alt="user"
                    width="120"
                    height="120"
                  />
                }
                className={`ml-5`}
              >
                <UserOutlined className={`${styles.avatar_img}`} />
                <Button
                  type="text"
                  className={`${styles.sign_in_btn}`}
                  onClick={() => setUserLogedIn(false)}
                >{`Logout`}</Button>
              </Avatar>
            </div>
          </Col> */}
          {menuLists.map((listItem, menuIndex) => (
            <Col
              xs={0}
              sm={0}
              md={24}
              lg={24}
              xl={24}
              className={`d-flex justify-content-center`}
              key={"menu" + menuIndex}
            >
              <div className={`${styles.list_header}`}>
                {listItem && listItem.header}
                <ul className={`${styles.list_items} mt-4 pl-4`}>
                  {listItem &&
                    listItem.links.map((list, index) => (
                      <li
                        className={`mb-4`}
                        key={menuIndex + "appDrawer" + index}
                      >
                        <a
                          onClick={() => {
                            setVisbility(false);
                            router.push(list.link);
                          }}
                        >
                          {list.name}
                        </a>
                      </li>
                    ))}
                </ul>
              </div>
            </Col>
          ))}
          <Col xs={16} sm={16} md={0} lg={0} xl={0}>
            {!userLogedIn ? (
              <>
                <Button
                  type="text"
                  className={`${styles.sign_up_btn}`}
                  onClick={() => router.push("/registration")}
                >{`Sign up`}</Button>
                <a
                  href="https://login.microsoftonline.com/8fa69c26-409d-43e5-973c-17a8be1a7f35/oauth2/authorize?client_id=00000003-0000-0ff1-ce00-000000000000&response_mode=form_post&protectedtoken=true&response_type=code%20id_token&resource=00000003-0000-0ff1-ce00-000000000000&scope=openid&nonce=B3213AC00F6BD04B562F737BDECF4CD3324D28BF703BB99D-83BB123142A834735B87202C897F73D853F3D053B56072AE3D9A4DD0B2BC9FFD&redirect_uri=https%3A%2F%2Fisdb.sharepoint.com%2F_forms%2Fdefault.aspx&state=OD0w&claims=%7B%22id_token%22%3A%7B%22xms_cc%22%3A%7B%22values%22%3A%5B%22CP1%22%5D%7D%7D%7D&wsucxt=1&cobrandid=11bd8083-87e0-41b5-bb78-0bc43c8a8e8a&client-request-id=0dc1f69f-d038-c000-5590-6c51732744d5&sso_reload=true"
                  className={`ant-btn ant-btn-text ${styles.sign_in_btn} d-flex justify-content-center align-items-center`}
                >
                  <span>{`Sign in`}</span>
                </a>
              </>
            ) : (
              <Button
                type="text"
                className={`${styles.sign_in_btn}`}
                onClick={() => setUserLogedIn(false)}
              >{`Logout`}</Button>
            )}
          </Col>
        </Row>
      </Drawer>
    </>
  );
}

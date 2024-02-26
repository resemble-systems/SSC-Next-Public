import Image from "next/image";
import useInView from "react-cool-inview";
import {
  Row,
  Col,
  Avatar,
  Button,
  Menu,
  Dropdown,
  Input,
  Popconfirm,
} from "antd";
import { SearchOutlined, UserOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";
//css
import styles from "./header.module.sass";
// import { route } from "next/dist/next-server/server/router";

const { Search } = Input;

function Header({
  menuIcon,
  logo,
  setDrawerVisbility,
  userLogedIn,
  setUserLogedIn,
  setSearchValue,
}) {
  const router = useRouter();
  const buttonStyle = {
    background: "none", // Set background to 'none' or any other value you prefer
    borderColor: "transparent", // Set border color to 'transparent' to remove border
    color: "#000", // Set text color to a desired value
  };

  // Search Input
  // const title = () => {
  //   return (
  //     <Search
  //       placeholder="Search..."
  //       allowClear
  //       onSearch={Searching}
  //       enterButton={`Search`}
  //     />
  //   );
  // };
  // const Searching = (value) => {
  //   if (value && value.length > 0) {
  //     if (router.pathname === "/search") {
  //       setSearchValue(value);
  //     } else {
  //       router.push({
  //         pathname: "/search",
  //         //search: '?update=true',  // query string
  //         query: {
  //           // location state
  //           name: value,
  //         },
  //       });
  //     }
  //   }
  // };
  const { observe, unobserve, inView, scrollDirection, entry } = useInView();

  const ddmenu = (
    <Menu>
      <Menu.Item>
        <Button
          type="text"
          className={`${styles.sign_in_btn}`}
          onClick={() => setUserLogedIn(false)}
        >{`Logout`}</Button>
      </Menu.Item>
    </Menu>
  );
  return (
    <div className="sticky-top">
      <header className={styles.header_container} ref={observe}>
        <Row>
          {/* desktop view */}
          <Col xs={0} sm={0} md={24} lg={24} xl={24}>
            <div className={styles.header}>
              <Row>
                <Col xs={8} sm={8} md={6} lg={8} xl={8}>
                  <div className={`${styles.header_contain}`}>
                    <Button
                      style={buttonStyle}
                      type="text"
                      className="w3-hover-light-grey"
                      // className={`mb-2`}
                      icon={
                        // <MenuOutlined className={` ${styles.menu_icon} pr-4`} />
                        <Image
                          src={menuIcon}
                          alt="logo"
                          width="33"
                          height="26"
                        />
                      }
                      onClick={() => setDrawerVisbility(true)}
                    />
                    <Button
                      style={buttonStyle}
                      type="text"
                      className={`${styles.menu_btn} px-4`}
                      onClick={() => setDrawerVisbility(true)}
                    >
                      Menu
                    </Button>
                  </div>
                </Col>
                <Col xs={8} sm={8} md={11} lg={8} xl={8}>
                  <div
                    className={`${styles.header_contain} ${styles.logo}`}
                    onClick={() => router.push("/")}
                  >
                    <Image src={logo[0]} alt="logo" width="180" height="100" />
                    <span className={`${styles.vertical_hr}`} />
                    <Image src={logo[1]} alt="logo" width="180" height="100" />
                  </div>
                </Col>
                <Col xs={8} sm={8} md={7} lg={8} xl={8}>
                  <div
                    className={`${styles.header_contain} justify-content-end`}
                  >
                    {/* Search Comp Start*/}
                    {/* <Popconfirm title={title} okText="" cancelText="">
                    <Button
                      type="text"
                      icon={<SearchOutlined className={styles.search_icon} />}
                      className={`${styles.search_btn} mb-2`}
                    />
                  </Popconfirm> */}
                    {/* Search Comp Ends*/}
                    <div className={`d-flex`}>
                      {!userLogedIn ? (
                        <>
                          <Button
                            type="text"
                            className={`${styles.sign_up_btn}`}
                            onClick={() => router.push("/registration")}
                          >
                            {`Register`}
                          </Button>
                          <a
                            // href="https://login.microsoftonline.com/8fa69c26-409d-43e5-973c-17a8be1a7f35/oauth2/authorize?client_id=00000003-0000-0ff1-ce00-000000000000&response_mode=form_post&protectedtoken=true&response_type=code%20id_token&resource=00000003-0000-0ff1-ce00-000000000000&scope=openid&nonce=B3213AC00F6BD04B562F737BDECF4CD3324D28BF703BB99D-83BB123142A834735B87202C897F73D853F3D053B56072AE3D9A4DD0B2BC9FFD&redirect_uri=https%3A%2F%2Fisdb.sharepoint.com%2F_forms%2Fdefault.aspx&state=OD0w&claims=%7B%22id_token%22%3A%7B%22xms_cc%22%3A%7B%22values%22%3A%5B%22CP1%22%5D%7D%7D%7D&wsucxt=1&cobrandid=11bd8083-87e0-41b5-bb78-0bc43c8a8e8a&client-request-id=0dc1f69f-d038-c000-5590-6c51732744d5&sso_reload=true"
                            href="https://isdb.sharepoint.com/sites/ssc/SitePages/Home.aspx#/"
                            className={`ant-btn ant-btn-text ${styles.sign_in_btn} d-flex justify-content-center align-items-center`}
                          >
                            <span>{`Sign in`}</span>
                          </a>
                        </>
                      ) : (
                        <Dropdown overlay={ddmenu}>
                          <Avatar
                            size={72}
                            src={
                              <Image
                                src={"/header/fake-avatar.jpg"}
                                alt="user"
                                width="150"
                                height="150"
                              />
                            }
                            className={`ml-5`}
                          >
                            <UserOutlined className={`${styles.avatar_img}`} />
                          </Avatar>
                        </Dropdown>
                      )}
                    </div>
                  </div>
                  {/* </div> */}
                </Col>
              </Row>
            </div>
          </Col>
          {/*================ mobile view================== */}
          <Col xs={24} sm={24} md={0} lg={0} xl={0}>
            <div className={styles.header}>
              <Row>
                <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                  <div className={`${styles.header_contain}`}>
                    <Button
                      type="text"
                      // className={`mb-2`}
                      icon={
                        // <MenuOutlined className={` ${styles.menu_icon} pr-4`} />
                        <Image
                          src={menuIcon}
                          alt="logo"
                          width="33"
                          height="26"
                        />
                      }
                      onClick={() => setDrawerVisbility(true)}
                    />
                    {/* <Button
                      type="text"
                      className={`${styles.menu_btn} px-4`}
                      onClick={() => setDrawerVisbility(true)}
                    >
                      Menu
                    </Button> */}
                  </div>
                  {/* </div> */}
                </Col>
                <Col xs={16} sm={16} md={16} lg={16} xl={16}>
                  <div
                    className={`${styles.header_contain} ${styles.logo}`}
                    onClick={() => router.push("/")}
                  >
                    <Image src={logo[0]} alt="logo" width="150" height="100" />
                    <span className={`${styles.vertical_hr}`} />
                    <Image src={logo[1]} alt="logo" width="150" height="100" />
                  </div>
                  {/* </div> */}
                </Col>
                <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                  <div
                    className={`${styles.header_contain} justify-content-end`}
                  >
                    {/* Search Component Start*/}
                    {/* <Popconfirm title={title} placement="bottomRight">
                    <Button
                      type="text"
                      icon={<SearchOutlined className={styles.search_icon} />}
                      className={`${styles.search_btn} mb-2`}
                    />
                  </Popconfirm> */}
                    {/* Search Component Ends*/}
                    {/* <Button
                      type="text"
                      icon={<SearchOutlined className={styles.search_icon} />}
                      className={`${styles.search_btn} mb-2`}
                    /> */}
                    {/* <div>
                    {!userLogedIn ? (
                      <>
                        <Button
                            type="text"
                            className={`${styles.sign_up_btn}`}
                          >{`Sign up`}</Button>
                          <Button
                            type="text"
                            className={`${styles.sign_in_btn}`}
                            onClick={() => setUserLogedIn(true)}
                          >{`Sign in`}</Button>
                      </>
                    ) : (
                      <Avatar
                        size={50}
                        src={
                          <Image
                            src={"/header/fake-avatar.jpg"}
                            alt="card-img"
                            width="120"
                            height="120"
                          />
                        }
                        className={`ml-5`}
                      >
                        <UserOutlined className={`${styles.avatar_img}`} />
                      </Avatar>
                    )}
                  </div> */}
                  </div>
                  {/* </div> */}
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </header>
    </div>
  );
}

export default Header;

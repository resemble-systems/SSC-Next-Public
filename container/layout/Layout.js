import { useState, useEffect } from "react";
import Head from "../../common_components/head/Head";
import Header from "../../common_components/header/Header";
import Footer from "../../common_components/footer/Footer";
import AppDrawer from "../../common_components/appDrawer/AppDrawer";
import { ArrowUpOutlined } from "@ant-design/icons";

//css
import style from "./layout.module.sass";

export default function Layout({
  children,
  socialMediaIcon,
  footerLink,
  otherResoruces,
  ogTitle,
  title,
  setSearchValue,
}) {
  const [visbility, setVisbility] = useState(false);
  const [userLogedIn, setUserLogedIn] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    //Scroll
    window.onscroll = function () {
      scrollFunction();
    };
    //Scroll Function
    function scrollFunction() {
      if (
        document.body.scrollTop > 1000 ||
        document.documentElement.scrollTop > 1000
      ) {
        setVisible(true);
        // mybutton.style.display = "block";
      } else {
        setVisible(false);
        // mybutton.style.display = "none";
      }
    }
  }, []);

  // To top
  function topFunction() {
    // console.log("TOPFUNCTION");
    document.body.scrollTop = 0;
    document.documentElement.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <>
      {visible && (
        <button
          onClick={topFunction}
          className={`${style.goToTop} justify-content-center align-items-center`}
        >
          <ArrowUpOutlined />
        </button>
      )}
      <Head ogTitle={ogTitle} title={title} />
      <Header
        menuIcon={"/header/hambergurIcon.svg"}
        logo={[
          "/header/IsDB _ EN _ logo _ primary _ colour.png",
          "/header/SSCLOGO.png",
        ]}
        setDrawerVisbility={setVisbility}
        userLogedIn={userLogedIn}
        setUserLogedIn={setUserLogedIn}
        setSearchValue={setSearchValue}
      />
      {children}
      <Footer
        logo={"/footer/StaffSocialClub-Logo_footer.png"}
        socialMediaIcon={socialMediaIcon}
        footerLink={footerLink}
        otherResoruces={otherResoruces}
      />
      <AppDrawer
        otherResoruces={otherResoruces}
        visbility={visbility}
        setVisbility={setVisbility}
        userLogedIn={userLogedIn}
        setUserLogedIn={setUserLogedIn}
      />
    </>
  );
}

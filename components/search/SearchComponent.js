import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { Row, Col, Empty } from "antd";
import AppRoundedBtn from "../../common_components/appRoundedBtn/AppRoundedBtn";
import SearchCard from "./SearchCard";
import styles from "./search.module.sass";
import Layout from "../../container/layout/Layout";

export default function SearchComponent({
  searchValue,
  searchData,
  socialMediaIcon,
  footerLink,
  otherResoruces,
}) {
  const router = useRouter();
  const [filterData, setFilterData] = useState(null);
  const {
    query: { name },
  } = router;
  // console.log("searchData->", searchData, searchValue);
  // useEffect(() => {
  //   axios
  //     .get(
  //       `https://sscstrapifile-uat.isdb.org/api/search/${searchvalue || name}`,
  //       {
  //         crossDomain: true,
  //         mode: "no-cors",
  //         headers: {
  //           "Content-Type": "application/json",
  //           "Access-Control-Allow-Origin": "*",
  //           "access-control-allow-origin": "*",
  //         },
  //       }
  //     )
  //     .then((res) => {
  //       // console.log("AXIOS API", res.data.hits);
  //       setFilterData(res.data.hits);
  //     });
  // }, [searchvalue, name]);

  // let filterData = [
  //   { img: "", Title: "Title1" },
  //   { img: "", Title: "Title2" },
  //   { img: "", Title: "Title3" },
  // ];

  return (
    <>
      <Layout
        socialMediaIcon={socialMediaIcon}
        footerLink={footerLink}
        otherResoruces={otherResoruces}
        ogTitle={`IsDB - Search`}
        title={`Search`}
      >
        <div className={`${styles.buysellsetion_section_bg}`}>
          <div className={`${styles.buysellsetion_section_container}`}>
            <Row className={"mb-4"}>
              <Col xs={24} sm={24} md={16} lg={18} xl={18} className={"mb-4"}>
                <h3
                  className={`${styles.buysellsection_section_tilte} mb-0 d-flex h-100 align-items-center`}
                >
                  Search for "{searchValue || name}"
                </h3>
              </Col>
              <Col xs={16} sm={16} md={8} lg={6} xl={6}>
                <div
                  className={`d-flex h-100 align-items-center w-100 justify-content-end`}
                >
                  <AppRoundedBtn
                    text={"Cancel"}
                    suffix={""}
                    bg={"yellow"}
                    outline={"none"}
                    long={false}
                    href={"none"}
                    onClickHandler={(e) => {
                      router.back();
                    }}
                  />
                </div>
              </Col>
            </Row>
            <Row gutter={[16, 16]}>
              {searchData && searchData.length > 0 ? (
                searchData.map((data) => (
                  <Col xs={24} sm={24} md={12} lg={8} xl={8} className={"pb-3"}>
                    <SearchCard cardData={data} />
                  </Col>
                ))
              ) : (
                <Col span={24}>
                  <div
                    className={`${styles.no_data_height} d-flex justify-content-center align-items-center`}
                  >
                    <Empty className={`mb-4`} />
                  </div>
                </Col>
              )}
            </Row>
          </div>
        </div>
      </Layout>
    </>
  );
}

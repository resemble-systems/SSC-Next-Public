import React from 'react'
import { Modal, Row, Col } from "antd";
import Image from "next/image";
import { CloseOutlined } from "@ant-design/icons"
//Library
import moment from "moment";
//css
import styles from "./view-ad.module.sass";
//componet
import AppSlider from "../../../common_components/appSlider/AppSlider";
import { CONST } from '../../../constant';

function getDisplayImage(image) {
    let result = [];
    image.forEach((element, index) => {
        if ((index + 1) % 2 === 0) {
            result.push({ img1: image[index - 1], img2: image[index] })
        }
    });
    return result;
}

export default function ViewAdModal({ cardData,
    visible,
    setVisiblety, }) {
    let displayImage = getDisplayImage(cardData.image);
    return (
        <Modal
            // title={`Event Registration`}
            centered
            onCancel={() => setVisiblety(false)}
            visible={visible}
            closable={false}
            footer={null}
            width={800}
            bodyStyle={{ padding: "50px" }}
            wrapClassName={`${styles.event_reg_modal}`}
        >
            <Row>
                <Col span={24}><div className={`d-flex justify-content-end`}><CloseOutlined className={`${styles.buysell_iconBig}`} onClick={() => setVisiblety(false)} /></div></Col>
            </Row>
            <Row>
                <Col xs={0} sm={0} md={0} lg={19} xl={19}>
                    <div className={`${styles.buysell_Titletext} pt-2 pb-2`}>
                        {cardData.title}
                    </div>
                </Col>
                <Col xs={0} sm={0} md={0} lg={5} xl={5}>
                    <div className={`${styles.buysell_TitletextPrice} pt-2 pb-2`}>
                        {cardData.price}
                    </div>
                </Col>
            </Row>
            <Row>
                <Col xs={0} sm={0} md={0} lg={24} xl={24}>
                    <div className={`${styles.buysell_dateMain} pt-2 pb-2`}>
                        {moment(cardData.date).format("D MMM YYYY")}
                    </div>
                </Col>
            </Row>
            <Row>
                <Col xs={0} sm={0} md={0} lg={24} xl={24}>
                    <div className={`${styles.buysell_text} pt-2 pb-3`}>
                        {cardData.data}
                    </div>
                </Col>
            </Row>

            <Row>
                <Col span={24}>
                    <AppSlider showIndicators={false}
                        autoPlay={true}>
                        {displayImage.map(data => (
                            <Row gutter={[16, 16]} >
                                <Col xs={0} sm={0} md={12} lg={12} xl={12}>
                                    <div className={`${styles.buysell_mainImgConatiner}`}>
                                        <Image src={data.img1} alt="card-img" layout={`fill`} />
                                    </div>
                                </Col>
                                <Col xs={0} sm={0} md={12} lg={12} xl={12}>
                                    <div className={`${styles.buysell_mainImgConatiner}`}>
                                        <Image src={data.img2} alt="card-img" layout={`fill`} />
                                    </div>
                                </Col>
                            </Row>
                        ))}

                    </AppSlider>
                </Col>

            </Row>
            <Row className={"pt-3 pb-2"}>
                <Col xs={0} sm={0} md={0} lg={16} xl={16}>
                    <Row>
                        <Col xs={0} sm={0} md={0} lg={4} xl={4} className={`${styles.buysell_HText}`}>
                            Category
                        </Col>
                        <Col xs={0} sm={0} md={0} lg={1} xl={1}>
                            :
                        </Col>
                        <Col xs={0} sm={0} md={0} lg={5} xl={5} className={`${styles.buysell_valText}`}>
                            {cardData.category}
                        </Col>
                    </Row>
                </Col>
                <Col xs={0} sm={0} md={0} lg={8} xl={8}>
                    <Row>
                        <Col xs={0} sm={0} md={0} lg={4} xl={4}>
                            <Image
                                src={"/buySell/map-pin.svg"}
                                //alt={`${icon.toString()}`}
                                width="22"
                                height="22"
                            />
                            {/* <i class={`${styles.buysell_iconBig} fa fa-map-marker`} aria-hidden="true" ></i> */}
                        </Col>
                        <Col className={`${styles.buysell_col}`}>{cardData.location}
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className={"pt-2 pb-2"}>
                <Col xs={0} sm={0} md={0} lg={16} xl={16}>
                    <Row>
                        <Col xs={0} sm={0} md={0} lg={4} xl={4} className={`${styles.buysell_HText}`}>
                            Brand
                        </Col>
                        <Col xs={0} sm={0} md={0} lg={1} xl={1}>
                            :
                        </Col>
                        <Col xs={0} sm={0} md={0} lg={5} xl={5} className={`${styles.buysell_valText}`}>
                            {cardData.brand}
                        </Col>
                    </Row>
                </Col>
                <Col xs={0} sm={0} md={0} lg={8} xl={8}>
                    <Row>
                        <Col xs={0} sm={0} md={0} lg={4} xl={4}>
                            <Image
                                src={"/buySell/mail.svg"}
                                //alt={`${icon.toString()}`}
                                width="22"
                                height="22"
                            />
                            {/* <i class={`${styles.buysell_iconBig} fa fa-envelope-o`} aria-hidden="true" ></i> */}
                        </Col>
                        <Col className={`${styles.buysell_col}`}>{cardData.email}
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className={"pt-2 pb-2"}>
                <Col xs={0} sm={0} md={0} lg={16} xl={16}>
                    <Row>
                        <Col xs={0} sm={0} md={0} lg={4} xl={4} className={`${styles.buysell_HText}`}>
                            Price
                        </Col>
                        <Col xs={0} sm={0} md={0} lg={1} xl={1}>
                            :
                        </Col>
                        <Col xs={0} sm={0} md={0} lg={5} xl={5} className={`${styles.buysell_valText}`}>
                            {cardData.price}
                        </Col>
                    </Row>
                </Col>
                <Col xs={0} sm={0} md={0} lg={8} xl={8}>
                    <Row>
                        <Col xs={0} sm={0} md={0} lg={4} xl={4}>
                            <Image
                                src={"/buySell/phone.svg"}
                                //alt={`${icon.toString()}`}
                                width="22"
                                height="22"
                            />
                            {/* <i class={`${styles.buysell_iconBig} fa fa-phone`} aria-hidden="true" ></i> */}
                        </Col>
                        <Col className={`${styles.buysell_col}`}>{cardData.phone}
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className={"mt-5 mb-2"} >
                <Col xs={0} sm={0} md={24} lg={24} xl={24}>
                    <div className={`${styles.buysell_HText}`}>
                        Posted By :
                        </div>
                </Col>
            </Row>
            <Row >
                <Col xs={0} sm={0} md={2} lg={2} xl={2} className={`${styles.buysell_card_bottomimage_container}`} >
                    <Image src={cardData.userImage} alt="card-img" layout={`fill`} className={`${styles.buysell_card_bottomimage_round}`} />
                </Col>
                <Col xs={0} sm={0} md={14} lg={14} xl={14} >
                    <div className={`${styles.buysell_UserName} d-flex align-items-center h-100`}>{cardData.username}</div>
                </Col>
            </Row>

        </Modal >
    )
}


{/* <Image
    src={process.env.BASE_URL + icon.Logo.url}
    alt={`${icon.toString()}`}
    width="22"
    height="18"
/> */}
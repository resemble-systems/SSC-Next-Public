import { useEffect, useState } from "react";
import { Modal, Row, Col } from "antd";

// Common Components
import AppRoundedBtn from "../../appRoundedBtn/AppRoundedBtn";
import InputElement from "../../formElement/Input";
import DropdownElement from "../../formElement/Dropdown";
import useForm from "../../appForm/NewAd";
import ImageUpload from "../../formElement/Imageupload";
import TextArea from "../../formElement/TextArea";

// css
import styles from "./new-ad.module.sass";

// onCancel Handler
function onCancelHandler(
  setVisiblety,
  setErrors,
  setInputs,
  fromObject,
  errorObj
) {
  setInputs(fromObject);
  setErrors(errorObj);
  setVisiblety(false);
}

function changeSub() {
  let temp = document.getElementById("rc_select_0");
  temp.addEventListener("change", function (event) {
    alert("hi");
  });
}

export default function NewAdModal({
  visible,
  setVisiblety,
  citems,
  setSelectedCategory,
  subitems,
  selectedCategory,
}) {
  const [loading, setLoaderTime] = useState(false);
  // const [citems, setcitems] = useState([]);
  const temparr = [];
  // Form Initial Objects
  const fromObject = {
    category: [],
    subcategory: [],
    adTitle: "",
    brand: "",
    price: "",
    country: [],
    city: "",
    email: "",
    phone: "",
    description: "",
  };
  // Error Initial Object
  const errorObj = {
    email: null,
    category: null,
  };

  const {
    handleSubmit,
    handleInputChange,
    handleCategory,
    handleSubCategory,
    handleCountry,
    inputs,
    errors,
    setErrors,
    setInputs,
  } = useForm(fromObject, errorObj, setLoaderTime);

  setSelectedCategory(inputs.category);

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
      <Row gutter={[16, 16]}>
        {loading && (
          <div span={24} className={`${styles.loader_container}`}>
            <div className={`spinner-grow ${styles.loader}`} role={`status `}>
              <span className={`sr-only `}>Loading...</span>
            </div>
          </div>
        )}
        <Col span={24}>
          <h3 className={`${styles.modal_title}`}>Post Your Ad</h3>
        </Col>
        <Col span={12}>
          <DropdownElement
            label={`Category`}
            mandatory={true}
            placeholder={`Select`}
            options={citems}
            onChange={handleCategory}
            name="category"
            disabled={loading}
            value={inputs.category}
            error={errors.category}
          />
          {errors.category !== null && !errors.category && (
            <p className={`text-danger mt-2 mb-0 pl-4`}>
              {"Please enter Category."}
            </p>
          )}
        </Col>

        <Col span={12}>
          <DropdownElement
            label={`Sub Category`}
            mandatory={
              typeof selectedCategory === "string"
                ? selectedCategory.toLowerCase() === "others"
                  ? false
                  : true
                : true
            }
            placeholder={`Select`}
            options={subitems}
            onChange={handleSubCategory}
            name="subcategory"
            disabled={
              typeof selectedCategory === "string"
                ? selectedCategory.toLowerCase() === "others"
                  ? true
                  : loading
                : loading
            }
            value={inputs.subcategory}
            error={null}
          />
        </Col>

        <Col span={24}>
          <InputElement
            label={`Ad Title`}
            mandatory={false}
            placeholder={`Enter Ad Title`}
            name="adTitle"
            disabled={loading}
            onChange={handleInputChange}
            value={inputs.adTitle}
            error={null}
          />
        </Col>
        <Col span={12}>
          <InputElement
            label={`Brand`}
            mandatory={false}
            placeholder={`Enter Brand`}
            name="brand"
            disabled={loading}
            onChange={handleInputChange}
            value={inputs.brand}
            error={null}
          />
        </Col>
        <Col span={12}>
          <InputElement
            label={`Expected Price`}
            mandatory={false}
            placeholder={`Enter Price`}
            name="price"
            disabled={loading}
            onChange={handleInputChange}
            value={inputs.price}
            error={null}
          />
        </Col>
        <Col span={12}>
          <DropdownElement
            label={`Country`}
            mandatory={false}
            placeholder={`Select`}
            options={["Country 1", "Country 2"]}
            onChange={handleCountry}
            name="country"
            disabled={loading}
            value={inputs.country}
            error={null}
          />
        </Col>
        <Col span={12}>
          <InputElement
            label={`City`}
            mandatory={false}
            placeholder={`Enter City`}
            name="city"
            disabled={loading}
            onChange={handleInputChange}
            value={inputs.city}
            error={null}
          />
        </Col>
        <Col span={12}>
          <InputElement
            label={`Email Address`}
            mandatory={true}
            placeholder={`Enter Email Address`}
            name="email"
            disabled={loading}
            onChange={handleInputChange}
            value={inputs.email}
            error={errors.email}
          />
          {errors.email !== null && !errors.email && (
            <p className={`text-danger mt-2 mb-0 pl-4`}>
              {"Please enter a valid email."}
            </p>
          )}
        </Col>
        <Col span={12}>
          <InputElement
            label={`Phone Number`}
            mandatory={false}
            placeholder={`Enter Phone Number`}
            name="phone"
            disabled={loading}
            onChange={handleInputChange}
            value={inputs.phone}
            error={null}
          />
        </Col>
        <Col span={24}>
          <TextArea
            label={`Description`}
            mandatory={false}
            placeholder={`Enter Description`}
            name="description"
            disabled={loading}
            onChange={handleInputChange}
            value={inputs.description}
            error={null}
          />
        </Col>
        <Col span={24}>
          <ImageUpload />
        </Col>
        <Col span={24}>
          <div className={`d-flex justify-content-end`}>
            <div className={`mx-3`}>
              <AppRoundedBtn
                text={"Cancel"}
                prefix={""}
                suffix={""}
                bg={"white"}
                outline={"dark"}
                long={true}
                href={"none"}
                disabled={loading}
                btnStyle={{ width: "235px", height: "60px" }}
                onClickHandler={() =>
                  onCancelHandler(
                    setVisiblety,
                    setErrors,
                    setInputs,
                    fromObject,
                    errorObj
                  )
                }
              />
            </div>
            <div className={`mx-3`}>
              <AppRoundedBtn
                text={"Post Ad"}
                prefix={""}
                suffix={""}
                bg={"blue"}
                outline={"dark"}
                long={true}
                href={"none"}
                disabled={loading}
                btnStyle={{ width: "235px", height: "60px" }}
                onClickHandler={() => {
                  setVisiblety(true);
                  handleSubmit();
                }}
              />
            </div>
          </div>
        </Col>
      </Row>
    </Modal>
  );
}

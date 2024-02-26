import { useEffect, useState } from "react";
import { Modal, Row, Col } from "antd";

// Common Components
import AppRoundedBtn from "../../appRoundedBtn/AppRoundedBtn";
import InputElement from "../../formElement/Input";
import DropdownElement from "../../formElement/Dropdown";
import useForm from "../../appForm/EventRegistration";

// css
import styles from "./event-registration-modal.module.sass";

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

export default function EventRegistrationModal({
  eventId,
  visible,
  setVisiblety,
}) {
  const [loading, setLoaderTime] = useState(false);
  // Form Initial Objects
  const fromObject = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    employeeId: "",
    location: "",
    department: "",
    gender: [],
    user: [],
  };
  // Error Initial Object
  const errorObj = {
    firstName: null,
    lastName: null,
    email: null,
    user: null,
    location: null,
  };

  const {
    handleSubmit,
    handleInputChange,
    handleGender,
    handleUser,
    inputs,
    errors,
    setErrors,
    setInputs,
  } = useForm(fromObject, errorObj, setLoaderTime, eventId);

  return (
    <Modal
      // title={`Event Registration`}
      centered
      onCancel={() => setVisiblety(false)}
      // visible={visible}
      open={visible}
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
          <h3 className={`${styles.modal_title}`}>Event Registration</h3>
        </Col>
        <Col span={12}>
          <InputElement
            label={`First Name`}
            mandatory={true}
            placeholder={`Enter First Name`}
            name="firstName"
            disabled={loading}
            onChange={handleInputChange}
            value={inputs.firstName}
            error={errors.firstName}
          />
          {errors.firstName !== null && !errors.firstName && (
            <p className={`text-danger mt-2 mb-0 pl-4`}>
              {"Please enter the field properly."}
            </p>
          )}
        </Col>
        <Col span={12}>
          <InputElement
            label={`Last Name`}
            mandatory={true}
            placeholder={`Enter Last Name`}
            name="lastName"
            disabled={loading}
            onChange={handleInputChange}
            value={inputs.lastName}
            error={errors.lastName}
          />
          {errors.lastName !== null && !errors.lastName && (
            <p className={`text-danger mt-2 mb-0 pl-4`}>
              {"Please enter the field properly."}
            </p>
          )}
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
            name="phoneNumber"
            disabled={loading}
            onChange={handleInputChange}
            value={inputs.phoneNumber}
            error={null}
          />
        </Col>
        <Col span={12}>
          <DropdownElement
            label={`Gender`}
            mandatory={false}
            placeholder={`Select`}
            options={["Male", "Female"]}
            onChange={handleGender}
            name="gender"
            disabled={loading}
            value={inputs.gender}
            error={null}
          />
        </Col>
        <Col span={12}>
          <DropdownElement
            label={`Type of user`}
            mandatory={true}
            placeholder={`Select`}
            options={["admin", "manager"]}
            onChange={handleUser}
            name="user"
            disabled={loading}
            value={inputs.user}
            error={errors.user}
          />
          {errors.user !== null && !errors.user && (
            <p className={`text-danger mt-2 mb-0 pl-4`}>
              {"Please select a user type."}
            </p>
          )}
        </Col>
        <Col span={12}>
          <InputElement
            label={`Employee ID`}
            mandatory={false}
            placeholder={`Enter Employee ID`}
            name="employeeId"
            disabled={loading}
            onChange={handleInputChange}
            value={inputs.employeeId}
            error={null}
          />
        </Col>
        <Col span={12}>
          <InputElement
            label={`Location`}
            mandatory={true}
            placeholder={`Enter Location`}
            name="location"
            disabled={loading}
            onChange={handleInputChange}
            value={inputs.location}
            error={errors.location}
          />
          {errors.location !== null && !errors.location && (
            <p className={`text-danger mt-2 mb-0 pl-4`}>
              {"Please enter enter the field properly."}
            </p>
          )}
        </Col>
        <Col span={12}>
          <InputElement
            label={`Department / Entity`}
            mandatory={false}
            placeholder={`Enter Department / Entity`}
            name="department"
            disabled={loading}
            onChange={handleInputChange}
            value={inputs.department}
            error={null}
          />
        </Col>
        <Col span={12}></Col>
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
                text={"Register Now"}
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

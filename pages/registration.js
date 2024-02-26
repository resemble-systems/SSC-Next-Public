//component
import RegistrationContainer from "../container/registration/RegistrationContainer";
import Head from "../common_components/head/Head"

export default function Registration() {
    return (
        <>
            <Head logo={"/favicon.ico"} />
            <RegistrationContainer />
        </>
    );
}
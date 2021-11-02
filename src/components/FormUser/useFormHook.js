import { useEffect, useMemo, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faKey,
  faCheck
} from "@fortawesome/free-solid-svg-icons";

const FormSchema = {
  firstName: {
    type: "text",
    name: "firstName",
    value: "",
    errors: "",
    placeholder: "First Name",
    icon: <FontAwesomeIcon icon={faUser} />
  },
  lastName: {
    type: "text",
    name: "lastName",
    value: "",
    errors: "",
    placeholder: "Last Name",
    icon: <FontAwesomeIcon icon={faUser} />
  },
  email: {
    type: "email",
    name: "email",
    value: "",
    errors: "",
    placeholder: "Email",
    icon: <FontAwesomeIcon icon={faEnvelope} />
  },
  password: {
    type: "password",
    name: "password",
    value: "",
    errors: "",
    placeholder: "Password",
    icon: <FontAwesomeIcon icon={faKey} />
  },
  passwordConfirm: {
    type: "password",
    name: "passwordConfirm",
    value: "",
    errors: "",
    placeholder: "Re-enter Password",
    icon: <FontAwesomeIcon icon={faKey} />
  },
  checkBoxTerms: {
    type: "checkbox",
    name: "checkBoxTerms",
    value: false,
    errors: "",
    placeholder: "Accepts terms and conditions",
    icon: <FontAwesomeIcon icon={faCheck} />
  },
  checkBoxAgeOver18: {
    type: "checkbox",
    name: "checkBoxAgeOver18",
    value: false,
    errors: "",
    placeholder: "I am 18 years old or above",
    icon: <FontAwesomeIcon icon={faCheck} />
  }
};

const useFormHook = ({ type }) => {
  const [content, setContent] = useState({ ...FormSchema });
  const [formErrors, setFormErrors] = useState([]);
  const [statusSubmit, setStatusSubmit] = useState({
    ok: true,
    loading: false,
    message: ""
  });
  const [isHandleChanged, setIsHandleChange] = useState(false);

  const handleChangeContent = (event) => {
    setIsHandleChange(true);
    const { name, value, checked } = event.target;

    const isCheckBoxClicked =
      name === "checkBoxTerms" || name === "checkBoxAgeOver18";

    if (isCheckBoxClicked) console.log("handle change", { name, checked });
    if (!isCheckBoxClicked) console.log("handle change", { name, value });

    if (isCheckBoxClicked) contentUpdate(name, checked);
    if (!isCheckBoxClicked) contentUpdate(name, value);
  };

  const contentUpdate = (inputName, value, isError = false) => {
    setContent((currentContent) => {
      const contentCopy = { ...currentContent };
      if (!isError)
        contentCopy[inputName] = { ...contentCopy[inputName], value: value };
      if (isError)
        contentCopy[inputName] = { ...contentCopy[inputName], error: value };

      return contentCopy;
    });
  };

  const contentValidate = () => {
    setFormErrors([]);
    let newArray = [];

    const isRegister = type === "register";

    const hasFirstNameOrLastName =
      content.firstName.value.length > 0 && content.lastName.value.length > 0;
    const hasEmail = content.email.value.length > 0;
    const isEmailFormCorrect = content.email.value.includes("@");
    const hasPassword = content.password.value.length > 0;
    const isPasswordConfirmEqualToPassword =
      content.password.value === content.passwordConfirm.value;

    if (!hasFirstNameOrLastName && isRegister)
      newArray.push("Please fill first and last name.");
    if (!isPasswordConfirmEqualToPassword && isRegister)
      newArray.push("Password not matching.");

    if (!hasEmail) newArray.push("Please fill email.");
    if (!isEmailFormCorrect) newArray.push("Incorrect email format.");
    if (!hasPassword) newArray.push("Please fill password.");
    if (
      (!content.checkBoxAgeOver18.value && isRegister) ||
      (!content.checkBoxTerms.value && isRegister)
    )
      newArray.push("Please tick check boxes.");

    setFormErrors((currentErrors) => [...currentErrors, ...newArray]);
    return newArray.length > 0;
  };

  const contentRegister = async (msDelay) =>
    new Promise((resolve) => {
      console.log("submitting content", content);
      setTimeout(() => {
        resolve("registered");
      }, msDelay);
    });

  const contentLogin = async (msDelay) =>
    new Promise((resolve) => {
      console.log("submitting content", content);
      setTimeout(() => {
        resolve("logged in");
      }, msDelay);
    });

  const handleSubmission = async (event) => {
    event.preventDefault();

    const isRegister = type === "register";
    const hasFormErrors = contentValidate();
    let submitResponse;

    if (hasFormErrors) return console.log("fix errors first", type, content);

    setStatusSubmit({ ok: false, loading: true, message: "" });
    setIsHandleChange(false);

    if (isRegister) {
      submitResponse = await contentRegister(2000);
      console.log("submitResponse", submitResponse);
    }
    if (!isRegister) {
      submitResponse = await contentLogin(2000);
      console.log("submitResponse", submitResponse);
    }

    setStatusSubmit({
      ok: true,
      loading: false,
      message: "Submitted content successful"
    });

    setContent({ ...FormSchema });
  };

  useEffect(() => {
    if (isHandleChanged) contentValidate();
    console.log("content update", content);
  }, [content]);

  return {
    formErrors,
    content,
    statusSubmit,
    handleChangeContent,
    handleSubmission
  };
};

export default useFormHook;

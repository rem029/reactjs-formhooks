import { useEffect, useMemo } from "react";
import FormUserContainer from "./FormUserContainer";
import FormUserInputField from "./FormUserInputField";
import FormUserButton from "./FormUserButton";
import FormUserLink from "./FormUserLink";
import FormUserErrors from "./FormUserErrors";
import useFormHook from "./useFormHook";

const FormUser = ({ formType = "" }) => {
  const {
    content,
    statusSubmit,
    formErrors,
    handleChangeContent,
    handleSubmission
  } = useFormHook({ type: formType });

  const errors = useMemo(() => {
    console.log("errors", formErrors);
    return formErrors;
  }, [formErrors]);

  if (formType === "login")
    return (
      <FormUserContainer form="login" title="Login">
        <FormUserInputField
          type={content.email.type}
          value={content.email.value}
          name={content.email.name}
          gridArea={content.email.name}
          placeholder={content.email.placeholder}
          icon={content.email.icon}
          handleChange={handleChangeContent}
        />

        <FormUserInputField
          type={content.password.type}
          value={content.password.value}
          name={content.password.name}
          gridArea={content.password.name}
          placeholder={content.password.placeholder}
          icon={content.password.icon}
          handleChange={handleChangeContent}
        />
        <FormUserErrors errors={errors} />
        <FormUserButton
          gridArea={"buttonSubmit"}
          handleClick={handleSubmission}
          showLoading={statusSubmit.loading}
        />
        <FormUserLink
          gridArea={"linkHasAccount"}
          text="Dont have an account?"
        />
        <FormUserLink gridArea={"forgotPassword"} text="Forgot Password?" />
      </FormUserContainer>
    );
  if (formType === "register")
    return (
      <FormUserContainer form="register" title="Register">
        <FormUserInputField
          type={content.firstName.type}
          value={content.firstName.value}
          name={content.firstName.name}
          gridArea={content.firstName.name}
          placeholder={content.firstName.placeholder}
          icon={content.firstName.icon}
          handleChange={handleChangeContent}
        />
        <FormUserInputField
          type={content.lastName.type}
          value={content.lastName.value}
          name={content.lastName.name}
          gridArea={content.lastName.name}
          placeholder={content.lastName.placeholder}
          icon={content.lastName.icon}
          handleChange={handleChangeContent}
        />
        <FormUserInputField
          type={content.email.type}
          value={content.email.value}
          name={content.email.name}
          gridArea={content.email.name}
          placeholder={content.email.placeholder}
          icon={content.email.icon}
          handleChange={handleChangeContent}
        />

        <FormUserInputField
          type={content.password.type}
          value={content.password.value}
          name={content.password.name}
          gridArea={content.password.name}
          placeholder={content.password.placeholder}
          icon={content.password.icon}
          handleChange={handleChangeContent}
        />

        <FormUserInputField
          type={content.passwordConfirm.type}
          value={content.passwordConfirm.value}
          name={content.passwordConfirm.name}
          gridArea={content.passwordConfirm.name}
          placeholder={content.passwordConfirm.placeholder}
          icon={content.passwordConfirm.icon}
          handleChange={handleChangeContent}
        />
        <FormUserErrors errors={errors} />
        <FormUserInputField
          type={content.checkBoxTerms.type}
          value={content.checkBoxTerms.value}
          checked={content.checkBoxTerms.value}
          name={content.checkBoxTerms.name}
          gridArea={content.checkBoxTerms.name}
          placeholder={content.checkBoxTerms.placeholder}
          icon={content.checkBoxTerms.icon}
          handleChange={handleChangeContent}
        />
        <FormUserInputField
          type={content.checkBoxAgeOver18.type}
          value={content.checkBoxAgeOver18.value}
          checked={content.checkBoxAgeOver18.value}
          name={content.checkBoxAgeOver18.name}
          gridArea={content.checkBoxAgeOver18.name}
          placeholder={content.checkBoxAgeOver18.placeholder}
          icon={content.checkBoxAgeOver18.icon}
          handleChange={handleChangeContent}
        />
        <FormUserButton
          gridArea={"buttonSubmit"}
          handleClick={handleSubmission}
          showLoading={statusSubmit.loading}
        />
        <FormUserLink
          gridArea={"linkHasAccount"}
          text="Already have an account?"
        />
      </FormUserContainer>
    );
  return null;
};

export default FormUser;

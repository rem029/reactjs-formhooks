import styled from "styled-components";

const FormDynamic = styled.form`
  display: grid;
  border: 2px solid grey;
  padding: 16px;
  box-sizing: border-box;
  gap: 16px;
  min-width: fit-content;

  @media (max-width: 500px) {
    padding: 8px 8px;
  }

  ${(props) => {
    if (props.form === "register")
      return `
      grid-template-areas:  
        ". . title title . . "
        ". .  firstName lastName. . "
        ". . email password. . "
        ". . passwordConfirm passwordConfirm. . "
        ". . formError formError. . "
        ". . checkBoxTerms checkBoxAgeOver18. . "
        ". . buttonSubmit buttonSubmit. . "
        ". . linkHasAccount linkHasAccount. . ";
        
      @media (max-width: 650px) {

        grid-template-areas:
          "title"
          "firstName"
          "lastName"
          "email"
          "password"
          "passwordConfirm"
          "passwordConfirm"
          "formError"
          "checkBoxTerms"
          "checkBoxAgeOver18"
          "buttonSubmit"
          "buttonSubmit"
          "linkHasAccount";
  }
        `;
    if (props.form === "login")
      return `
      grid-template-areas:  
        ". title ."
        ". email ."
        ". password ."
        ". formError ."
        ". buttonSubmit ."
        ". linkHasAccount ."
        ". forgotPassword .";
        
      @media (max-width: 500px) {

        grid-template-areas:
        "title"
        "email"
        "password"
        "formError"
        "buttonSubmit"
        "linkHasAccount"
        "forgotPassword";
  }
        `;
  }};
`;

const FormTitle = styled.h1`
  grid-area: title;
  text-align: center;
  width: 100%;
`;

const FormUserContainer = ({
  children,
  form = "register",
  title = "Register"
}) => {
  switch (form) {
    case "register":
      return (
        <FormDynamic form={form}>
          <FormTitle>{title}</FormTitle>
          {children}
        </FormDynamic>
      );
    case "login":
      return (
        <FormDynamic form={form}>
          <FormTitle>{title}</FormTitle>
          {children}
        </FormDynamic>
      );
    default:
      return null;
  }
};

export default FormUserContainer;

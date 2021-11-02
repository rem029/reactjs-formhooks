import FormUser from "./components/FormUser/FormUser";

import styled from "styled-components";

import "./styles.css";

const ContainerApp = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: center;
  align-items: center;
  gap: 8px;
  font-family: "Roboto";

  @media screen and (max-width: 914px) {
    grid-template-columns: 95%;
  }
`;

export default function App() {
  return (
    <ContainerApp>
      <FormUser formType="register" />
      <FormUser formType="login" />
    </ContainerApp>
  );
}

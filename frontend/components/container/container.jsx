import { SContainer } from "./container.styled";

const Container = ({ children }) => {
  return (
    <SContainer>
      <div>{children}</div>
    </SContainer>
  );
};

export default Container;

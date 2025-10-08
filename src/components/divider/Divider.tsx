import styled from 'styled-components';

const DividerLine = styled.div`
  width: calc(100% + 40px);
  height: 1px;
  background-color: ${(props) => props.theme.colors.grayScale.gy200};
  margin-left: -20px;
  margin-right: -20px;
`;

const Divider = () => {
  return <DividerLine />;
};

export default Divider;
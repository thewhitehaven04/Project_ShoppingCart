import styled from 'styled-components';

const FlexWrapper = styled.div`
  display: flex;
  flex-flow: ${(props) => props.$direction} nowrap;
  gap: ${(props) => props.$gap};
  justify-content: ${(props) => props.$justify};
  align-items: ${(props) => props.$align};

  width: 100%;
`;

FlexWrapper.defaultProps = {
  $direction: 'row',
  $gap: '10px',
  $justify: 'unset',
  $align: 'unset',
};

export default FlexWrapper;

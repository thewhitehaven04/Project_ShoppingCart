import styled from 'styled-components';

export default styled.main`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: flex-start;
  row-gap: 10px;
  flex-grow: 1;
  width: clamp(300px, 80%, 1000px);
  margin: 0 auto;
  padding: 0px;
`;

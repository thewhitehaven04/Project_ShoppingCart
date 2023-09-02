import FlexWrapper from '@components/FlexWrapper';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

function Footer(props) {
  return (
    <footer {...props}>
      <FlexWrapper $direction="row" $justify="center" $align="center" $gap="40px">
        <span>
          <FontAwesomeIcon className="icon__padded" icon={faGithub} />
          <a href="https://github.com/thewhitehaven04">thewhitehaven04</a>
        </span>
        <span>Built for The Odin Project, 2023</span>
      </FlexWrapper>
    </footer>
  );
}

export default styled(Footer)`
  box-shadow: 0px -2px 4px 1px var(--shadow-gray);
  background-color: var(--gray);
  bottom: -30px;
  margin: 10px;
  height: 50px;
`;

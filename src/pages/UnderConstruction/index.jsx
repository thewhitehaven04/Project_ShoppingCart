import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHammer } from "@fortawesome/free-solid-svg-icons";
import Main from "@components/Main";

export default function UnderConstruction() {
  return (
    <Main>
      <div className="font-capital font-large">Under construction</div>
      <FontAwesomeIcon className="font-warning-sign" icon={faHammer} />
    </Main>
  );
}

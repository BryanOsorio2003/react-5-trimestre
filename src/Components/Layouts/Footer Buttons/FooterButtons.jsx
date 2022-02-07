import { ButtonUI } from "../../UI/ButtonUI/ButtonUI";
import './FooterButtons.css'


export const FooterButtons = ({FooterButtons}) => {
  return <div className={FooterButtons}>
      <ButtonUI ClassButtons='ClassButtons' text="Github" />
      <ButtonUI ClassButtons='ClassButtons' text="Facebook" />
      <ButtonUI ClassButtons='ClassButtons' text="Whatsapp" />
  </div>;
};

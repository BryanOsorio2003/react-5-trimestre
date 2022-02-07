import { ButtonUI } from "../../UI/ButtonUI/ButtonUI";
import './ContainerButtons.css'

export const BtnContainer = ({btnContainer}) => {
  return <div className={btnContainer}>
    <ButtonUI ClassButtons='ClassButtons' text="Home"/>
    <ButtonUI ClassButtons='ClassButtons' text="About Us"/>
    <ButtonUI ClassButtons='ClassButtons' text="Contact"/>
  </div>;
};


import { ButtonUI } from "../../UI/ButtonUI/ButtonUI";
import './ContainerButtons.css'


export const BtnContainer = ({btnContainer}) => {
  return <div className={btnContainer}>
    <ButtonUI text="Home"/>
    <ButtonUI text="About Us"/>
    <ButtonUI text="Contact"/>
  </div>;
};


import { NavLink } from "react-router-dom";
import { ButtonUI } from "../../UI/ButtonUI/ButtonUI";
import './ContainerButtons.css'

export const BtnContainer = ({btnContainer}) => {
  return <div className={btnContainer}>
    <NavLink to='/'><ButtonUI ClassButtons='ClassButtons'  text="Home"/></NavLink>
    <NavLink to='/AboutUS'><ButtonUI ClassButtons='ClassButtons' text="About Us"/></NavLink>
    <NavLink to='/Contact'><ButtonUI ClassButtons='ClassButtons' text="Contact"/></NavLink>
  </div>;
};


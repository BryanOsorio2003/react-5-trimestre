import { BtnContainer } from "../../Layouts/Container Buttons/ContainerButtons";
import { FooterButtons } from "../../Layouts/Footer Buttons/FooterButtons";
import { Image } from "../../UI/Image/Image";



export const Main = () => {
  return <div>
      <BtnContainer btnContainer='btnContainer' />
      <Image imgGenshin='imgGenshin' />
      <FooterButtons />
  </div>;
};

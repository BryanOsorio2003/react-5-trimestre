import { ContainerButtons } from "../../Layouts/Container Buttons/ContainerButtons";
import { FooterButtons } from "../../Layouts/Footer Buttons/FooterButtons";
import { Image } from "../../UI/Image/Image";



export const Main = () => {
  return <div>
      <ContainerButtons btnContainer='btnContainer' />
      <Image imgGenshin='imgGenshin' />
      <FooterButtons FooterButtons='FooterButtons' />
  </div>;
};

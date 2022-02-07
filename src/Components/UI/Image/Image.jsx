import genshin from './Genshin.jpg'
import './Image.css'

export const Image = ({imgGenshin}) => {
  return <div>
    <hr />
    <img src={genshin} alt="Genshin Impact" className={imgGenshin} />
    <hr />
  </div>;
};

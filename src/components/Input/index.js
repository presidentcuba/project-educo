import { Input } from "antd";
import search from "src/assets/search.png";
import "./styles.scss";
const CustomInput = ({ onChange, placeholder }) => {
  const RenderIcon = () => {
    return <img src={search} alt="search" />;
  };

  return (
    <div className="custom-input">
      <Input
        onChange={onChange && onChange}
        suffix={<RenderIcon />}
        placeholder={placeholder && placeholder}
      />
    </div>
  );
};
export default CustomInput;

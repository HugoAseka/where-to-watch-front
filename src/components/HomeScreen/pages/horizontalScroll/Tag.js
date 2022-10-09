import { useNavigate } from "react-router-dom";

const Tag = ({ data,el }) => {
  const navigate = useNavigate();
    return <li onClick={() => console.log(el)} >{data}</li>;
  };
  
  export default Tag;
  
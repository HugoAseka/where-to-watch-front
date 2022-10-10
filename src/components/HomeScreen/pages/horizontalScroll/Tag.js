import { useNavigate } from "react-router-dom";

const Tag = ({ data, el }) => {
  const navigate = useNavigate();
  let url;
  if (el.media_type === "tv") {
    url = "/tv/" + el.id;
  } else {
    url = "/movie/" + el.id;
  }
  return <li onClick={() => navigate(url)}>{data}</li>;
};

export default Tag;

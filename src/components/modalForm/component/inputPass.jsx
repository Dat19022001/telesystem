import "./inputPass.scss";

const InputForm = ({ data }) => {
  const handleChange = (e) => {
    if (data.title === "Email") {
      data.handleUrl(e.target.value);
    }
    if (data.title === "Password") {
      data.handlePass(e.target.value);
    }
  };
  return (
    <div className="inputPass">
      <div className="inputPass-content">
        <label>{data.title}</label>
        <input
          placeholder={data.placeholder}
          type={data.type}
          onChange={handleChange}
        />
      </div>
      <div className="inputPass-icon"></div>
    </div>
  );
};

export default InputForm;

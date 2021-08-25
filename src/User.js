import react from "react";

const User = (props) => {
  const { data } = props;
  return (
    <div>
      <h4> my name is {data.name}</h4>
      <h4> my age is {data.age}</h4>
    </div>
  );
};

export default User;

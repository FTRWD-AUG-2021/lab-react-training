function IdCard(props) {
  console.log(props);
  return (
    <div className="IdCard box">
      <img src={props.picture} alt="profile pic" />
      <div className="right">
        <strong>First Name</strong>: {props.firstName}
        <br></br>
        <strong>Last name</strong>: {props.lastName}
        <br></br>
        <strong>Gender</strong>: {props.gender}
        <br></br>
        <strong>Height</strong>: {props.height}
        <br></br>
        <strong>Birth</strong>: {props.birth.toDateString()}
      </div>
    </div>
  );
}

export default IdCard;

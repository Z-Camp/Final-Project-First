import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import "./style.css";
import logo from '../userIcons/main-icon.png'



const styles = {
  header: {
    background: "#a0d080",
    height: "90px",
  },
  footer: {
    background: "#a0d080"
  },
  counts: {
    marginleft: "20px;",

  },
  img: {
    borderRadius: "5px",
    height: "100px"
  },
  footimage: {
    padding: "7px"
  }


}



function UserCard(props) {
  const avatarColor = require.context('../userIcons', true);

  return (

    <div
      className="card"
      id="usercard">
      <div
        className="header text-center username"
        style={styles.header}>
          <h1>{props.username}</h1>
      </div>
      <div className="row img-container">
        <img className="img" alt="img"
          src=
          {props.avatar ? (
            avatarColor(`./${props.avatar}.png`)) :
        ('client/public/icons/apple-icon-57x57.png')
        }
        style={styles.img} />
      </div>
      <div
        className="content">
        <div
          className="counts">
          <Row>
            <Col className="text-center" md={5}><h6>Posts: {props.postCount}</h6></Col>
            <Col className="text-center" md={5}><h6>Comments: {props.commentCount}</h6></Col>
          </Row>

        </div>

        <div className="footer" style={styles.footer}>
          <Row className="justify-content-center">
            <img className="footimage" src={logo} alt="icon" style={styles.footimage}></img>
          </Row>
        </div>
      </div>
    </div>
  );
}


export default UserCard
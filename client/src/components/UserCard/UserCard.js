import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import "./style.css";
import logo from '../userIcons/main-icon.png'



const styles = {
  header: {
    background: "#a0d080",
    height: "90px"
  },
  footer: {
    background: "#a0d080",
   
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


  console.log(props)
  const userIcons = require.context("../userIcons", true)

  return (
  
    <div
      className="card"
      id="usercard">
      <div
        className="header"
        style={styles.header}></div>
      <div className="img-container">
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
          className="username">
           {props.username}
        </div>
        <div
          className="counts">
          <Row>
            <Col md={5}>Posts: {props.postCount}</Col>
            <Col md={5}>Comments: {props.commentCount}</Col>
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
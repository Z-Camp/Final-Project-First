import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Modal, Tab } from 'react-bootstrap';
import SignUpForm from './SignupForm';
import LoginForm from './LoginForm';
import PostForm from './PostForm';
import UserInfoContext from '../utils/UserInfoContext';
import AuthService from '../utils/auth';

const styles = {
  navbar: {
    backgroundColor: "white",
    borderBottomStyle: "solid",
    borderBottomColor: "#a0d080",
    paddingBottom: "0px"
  },
  image: {
    marginLeft: "35px",
    height: "50px"
    }
  }

function AppNavbar() {
  // set modal display state
  const [showModal, setShowModal] = useState(false);
  const [showPostModal, setShowPostModal] = useState(false);

  // get username out of context object to display in nav
  const { username } = useContext(UserInfoContext);

  return (
    <>
      <Navbar className="navbar" style={styles.navbar} expand='lg'>
        <Container fluid>
          <Navbar.Brand as={Link} to='/'>
          <img className="image" src="./icons/main-icon.png" alt="icon" style={styles.image}></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='navbar' />
          <Navbar.Collapse id='navbar'>
            <Nav className='ml-auto'>
              <Nav.Link as={Link} to='/'>
                Main Feed
              </Nav.Link>
              {/* if user is logged in show saved books and logout */}
              {username ? (
                <>
                  <Nav.Link as={Link} to='/saved'>
                    {username}'s Profile
                  </Nav.Link>
                  <Nav.Link onClick={() => setShowPostModal(true)}>New Post</Nav.Link>
                  <Nav.Link onClick={AuthService.logout}>Logout</Nav.Link>
                </>
              ) : (
                <Nav.Link onClick={() => setShowModal(true)}>Login/Sign Up</Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* set modal data up */}
      <Modal size='lg' show={showModal} onHide={() => setShowModal(false)} aria-labelledby='signup-modal'>
        {/* tab container to do either signup or login component */}
        <Tab.Container defaultActiveKey='login'>
          <Modal.Header closeButton>
            <Modal.Title id='signup-modal'>
              <Nav variant='pills'>
                <Nav.Item>
                  <Nav.Link className="newpost" eventKey='login'>Login</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='signup'>Sign Up</Nav.Link>
                </Nav.Item>
              </Nav>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Tab.Content>
              <Tab.Pane eventKey='login'>
                <LoginForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
              <Tab.Pane eventKey='signup'>
                <SignUpForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
            </Tab.Content>
          </Modal.Body>
        </Tab.Container>
      </Modal>
      <Modal size='lg' show={showPostModal} onHide={() => setShowModal(false)} backdrop="static" aria-labelledby='post-modal'>
        {/* tab container to do either signup or login component */}
        <Tab.Container defaultActiveKey='post'>
          <Modal.Header closeButton>
            <Modal.Title id='post-modal'>
              <Nav variant='pills'>
                <Nav.Item>
                  <Nav.Link className="modalPost"  eventKey='post'>New Post</Nav.Link>
                </Nav.Item>
              </Nav>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Tab.Content>
              <Tab.Pane eventKey='post'>
                <PostForm handleModalClose={() => setShowPostModal(false)} />
              </Tab.Pane>
            </Tab.Content>
          </Modal.Body>
        </Tab.Container>
      </Modal>
    </>
  );
}

export default AppNavbar;

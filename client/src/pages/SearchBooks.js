import React, { useState, useContext } from 'react';
import { Jumbotron, Container, Col, Form, Button, Card, CardColumns } from 'react-bootstrap';

import UserInfoContext from '../utils/UserInfoContext';
import AuthService from '../utils/auth';
import { getAllPosts, searchPosts } from '../utils/API';

function SearchPosts() {
  // create state for holding returned google api data
  const [searchedPosts, setSearchedPosts] = useState([]);
  // create state for holding our search field data
  const [searchInput, setSearchInput] = useState('');

  const userData = useContext(UserInfoContext);

  // create method to search for Posts and set state on form submit
  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!searchInput) {
      return false;
    }

    searchPosts(searchInput)
      .then(({ postData }) => {

        console.log(postData);

        return setSearchedPosts(postData);
      })
      .then(() => setSearchInput(''))
      .catch((err) => console.log(err));
  };


  return (
    <>
      <Jumbotron fluid className='text-light bg-dark'>
        <Container>
          <h1>Search for Posts!</h1>
          <Form onSubmit={handleFormSubmit}>
            <Form.Row>
              <Col xs={12} md={8}>
                <Form.Control
                  name='searchInput'
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  type='text'
                  size='lg'
                  placeholder='Search for a post'
                />
              </Col>
              <Col xs={12} md={4}>
                <Button type='submit' variant='success' size='lg'>
                  Submit Search
                </Button>
              </Col>
            </Form.Row>
          </Form>
        </Container>
      </Jumbotron>

      <Container>
        <h2>{searchedPosts.length ? `Viewing ${searchedPosts.length} results:` : 'Search for a book to begin'}</h2>
        <CardColumns>
          {searchedPosts.map((book) => {
            return (
              <Card key={book.bookId} border='dark'>
                {book.image ? <Card.Img src={book.image} alt={`The cover for ${book.title}`} variant='top' /> : null}
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <p className='small'>Authors: {book.authors}</p>
                  <Card.Text>{book.description}</Card.Text>
                </Card.Body>
              </Card>
            );
          })}
        </CardColumns>
      </Container>
    </>
  );
}

export default SearchPosts;
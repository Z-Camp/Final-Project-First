import React from "react";
import { Card, Row } from "react-bootstrap";
import "./about.css"


const styles = {
      card: {
        height: "175px",
        width: "260px",
        marginTop: "15px"
    }


    }


function AboutCard() {
    return (
        <Card style={styles.card}>

            <Card.Body>
                <Card.Title>Github Links</Card.Title>
                <Card.Text>
                    <Row className="links" ><a href="https://github.com/jdmmeli">Jason Meli</a></Row>
                    <Row className="links"><a href="https://github.com/Z-Camp">Zach Campbell</a></Row>
                    <Row className="links"><a href="https://github.com/jbrandona119" >Brandon Arnold</a></Row>
                    <Row className="links"><a href="https://github.com/alecweems">Alec Weems</a></Row>

                </Card.Text>



            </Card.Body>

        </Card>
    );

}


export default AboutCard
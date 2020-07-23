import React from "react";
import { Card } from "react-bootstrap";


const styles = {
      card: {
        height: "300px",
        width: "260px",
        marginTop: "15px"
    }
 
       
    }


function AboutCard() {
    return (
        <Card className="text-center" style={styles.card}>
            <Card.Title>About</Card.Title>
            <Card.Body>
                <Card.Text>
                    
                   
                </Card.Text>
                
                

            </Card.Body>

        </Card>
    );

}


export default AboutCard
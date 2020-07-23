import React from "react";
import { Card, Button } from "react-bootstrap";

const styles = {
    card: {
        marginTop: "15px",
        width: "260px",
        height: "260px",
    
    },
    img: {
        height: "90%",
        width: "100%"
        
    },
    body: {
        margin: "-12px"
    },
    adtext: {
        fontSize: "12px"
    },
    bodyText: {
        position: "relative",
        bottom: "42%",
        marginLeft: "4px"
    },
    button: {
position:"relative",
bottom: "85px",
width: "95%",
marginLeft: "7px"
    }
}

function Chuck() {
    return ( 
        <Card style={styles.card}>
            <Card.Body style={styles.body}>
                <div style={styles.adtext}>ADVERTISEMENT</div>
                <img style={styles.img} src="./images/imgbin-chuck-norris-facts-united-states-total-gym-kickstart-kids-chuck-norris-Wk6Q9EQz77tUcDE8PWk72UUzd.jpg" alt="Chuck Norris"></img>
                <Card.Text style={styles.bodyText}><h5><strong>Yes, Chuck Can!</strong></h5></Card.Text>
                <Button style={styles.button} href="https://chucknorrisfacts.net/" target="_blank">Chuck 2020</Button>
              
        
              
        </Card.Body>
       

        </Card>
 )

}


export default Chuck
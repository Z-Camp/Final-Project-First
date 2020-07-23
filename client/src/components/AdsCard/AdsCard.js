import React from "react";
import { Card } from "react-bootstrap";

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
    text: {
        position: "relative",
        bottom: "70%",
        textAlign: "center",
        color: "yellow"
    },
    body: {
        margin: "-12px"
    },
    adtext: {
        fontSize: "12px"
    }
}

function Ads() {
    return ( 
        <Card style={styles.card}>
            <Card.Body style={styles.body}>
                <div style={styles.adtext}>ADVERTISEMENT</div>
                <img style={styles.img} src="./images/IMG_20200721_212254.jpg" alt="pretzels"></img>
                <div style={styles.text}><h1><strong>Pretzel Bro's</strong></h1></div> 
                <div style={styles.text}><h4>The yum-yum-yummiest pretzel there is!</h4></div>
            </Card.Body>

        </Card>
 )

}


export default Ads
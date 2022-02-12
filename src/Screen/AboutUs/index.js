

import React from 'react';
const AboutUs = () => {


    const goBack = (e) => {
        console.log("the event is ", e)
        // navigate("/")
    }

    return(
    <div style={{
        backgroundColor:'white',
        margin:10,
        padding:10,
        borderRadius : 10,
    }}>
        
    <h3>
        {`
        We partner with educational organizations to help them solve their challenges and achieve their goals by building, supporting, and delivering their digital learning products and platforms.

        Our Values
        3Cs (Cool, Clever & Creative)
        KYC (Know Your Customer)
        Human First
        Openness
        Result Orientation
        Curiosity & Learning
        Our Ethos
        
        Growth mindset powered by collaboration and innovation.
        
        Digital Learning
        for Everyone

        `}
    </h3>
    <button onClick={goBack}>Go back</button>
    </div>
    )

}

export default AboutUs;
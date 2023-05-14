import React from "react";
import Linkedin from "../assets/linkedin.png"
import Instagram from "../assets/Instagram.png"

function Bottomsection(){
    //inline styling
    const footer={
        backgroundColor:"black",
        width:"1440px",
        height:"280px",
        display:"flex",
        padding:"20px"
    }
    const leftSection={
        display:"flex",
        flexDirection:"column",
        textAlign:"left",
        width: "200px",
        height: "30px",
        paddingLeft: "157px",
        paddingTop: "25px"
    }
    const para={
        color:"white",
        fontSize:"15px",
        fontWeight:"200"
    }
    const rightSection={
        display:"flex",
        flexDirection:"column",
        paddingLeft: "600px",
        paddingTop: "25px",
        textAlign:"Right",

    }
    const imagesContainer={
        display:"flex",
        alignItems:"center",
        padding:"10px",
        textAlign:"Right"
    }
    const img={
        width:"15px",
        height:"15px",
        border: "3px solid #FFCD9E"
    }
    //end

    return(
        <div className="footer" style={footer}>
            <section className="left-section" style={leftSection}>
                <p style={para}>Prompt Generator</p>
                <p style={para}>Dweep Daily</p>
                <p style={para}>All Contributors</p>
                <p style={para}>Your data on Dweep.io</p>
                <p style={para}>Contribte to dweep</p>
            </section>
            <section className="right-section" style={rightSection}>
                <p style={para}>Dweep.io</p>
                <p style={para}>Made with love in India</p>
                <div style={imagesContainer} >
                    <img src={Linkedin} alt="linkedin"style={img}/>
                    <img src={Instagram} alt="Instagram" style={img}/>
                </div>
                <p>&nbsp;</p>
                <p style={para}>hello@dweep.io</p>
            </section>

        </div>
    )
}

export default Bottomsection
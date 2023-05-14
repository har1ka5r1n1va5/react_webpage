import React from "react";
import { useState } from "react";
import person from '../assets/person.png'


function Topsection(){
    //inline styling
    const mainContainer={
        backgroundColor:"#FFCD9E",
        display:"flex",
        justifyContent:"center"
    }
    const leftSection ={
        margin:"10px",
        display:"flex",
        flexDirection:"column",
        textAlign:"left",
        width:"562px",
        height:"108px"
    }
    const heading={
        padding:"10px",
        fontSize:"30px",
        color:"black",
        display:"flex",
        fontWeight:"500"
    }
    const description={
        fontSize:"20px",
        fontWeight:"300",
        color:"black",
        display:"flex"
    }
    const formContainer={
        display:"flex",
        alignItems:"center",
    }
    const inputBox={
        width: "250px",
        height: "40px",
        border:"4px solid black",
        borderRadius:"4px",
        backgroundColor:"white",
        color:"grey",
        padding:"2px",
        marginRight:"10px"
    }
    const Button={
        border:"4px solid black",
        backgroundColor:"black",
        borderRadius:"3px",
        width: "190px",
        height: "40px",
        color:"white",
        padding:"2px"
    }
    const para={
        color:"white",
        fontSize:"16px"
    }
    const image={
        width:"380.52px",
        height:"400px"
    }
    //end

    const [email, setEmail] =useState("");
    const [Registered, setRegistered] = useState(false)
    const Registration = () =>{
        if (!email) return
        setRegistered(true)
    }

    return(
        <div className="main-box" style={mainContainer}>
            <section className="left-section" style={leftSection}>
                <h1 className="heading" style={heading}>An inspiring design delivered to your inbox every morning</h1>
                <p className="description" style={description}>Our team scouts the internet for the best designs, illustrations and art and delivers a truly inspiring one every day to your inbox</p>
                <>
                  {Registered?< >Thank You</>:<><p className="indicator" style={{fontSize:"20px"}}>Show me how it looks</p>
                  <div style={formContainer}>
                    <input type="email" placeholder="Your email address" style={inputBox} onChange={(event)=>setEmail(event.target.value)}/>
                    <button className="btn" onClick={Registration} style={Button}>Register Now</button>
                  </div></>}
                </>

                <p className="para2" style={para}>Free - No Spam - No data sharing</p>
            </section>
            <section className="right-section" style={{padding:"15px"}}>
                <img src={person} alt="person" className="img" style={image}/>
            </section>
        </div>
    )

}

export default Topsection
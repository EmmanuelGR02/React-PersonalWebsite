import meImage from "../../assets/Images/me.jpeg"
import "animate.css"
import "./Home.css"
import Footer from "../../Footer/Footer";

function Home() {
    console.log("Home");
  return (
    <>
        <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
        <div className="main-container">
            <div className="img-container animate__animated animate__backInLeft">
                <img className="me-img" src={meImage}></img>
            </div>

            <div className="introText-container animate__animated animate__backInRight">
                <h4 className="hello-text">Hello,</h4>
                <h2 className="name-text">I'm Emmanuel Gutierrez Rivera.</h2>
                <h5 className="student-text">Computer Science Student</h5>
            </div>
            
            <div className="welcomeMessage-container animate__animated animate__backInLeft">
                <p className="welcome-message">Welcome to my website! Thanks for visiting. Please take your time to explore my work. If you have any quesstions or would like to connect, feel free to reach out. Happy browsing!</p>
            </div>

        </div>
        <Footer />
    </>
  )
}

export default Home
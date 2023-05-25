// import "./Home.css";
import Social from "./Social";
import Navbar from "./Navbar";

function Home() {
  return (
    <>
      <style>
        {`
          html, body {
            background-image: linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)), url("https://pbs.twimg.com/media/FS958IEUYAEk2yT?format=jpg&name=4096x4096");
            /* background-size: cover; */
            background-size: 100vw 100vh;
            background-repeat: no-repeat;
            height: fit-content;
          
            .text{
              margin-top: 400px;
              /* margin-bottom: 190px; */
              color: white;
          }
          .text-kr {
              font-size: 18px;
              margin-bottom: -40px;
              text-align: center;
          }
          
          .text-en {
              font-size: 28px;
              text-align: center;
          }
          
          .home-button {
              margin-top: -20px;
              text-align: center;
          }
          
          .button {
              background-color: transparent;
              border-radius: 25px;
              border: 2px solid white;
              color: white;
              padding: 10px 20px;
              font-size: 16px;
              font-weight: semiBold;
              cursor: pointer;
            }
          .navigate{
            text-decoration: none;
            color: white;
          }        
        `}
      </style>
      <div className="all">
        <Navbar />
        <div className="text">
          <div className="text-kr">
            <h1>갓세븐</h1>
          </div>
          <div className="text-en">
            <h1>GOT7</h1>
          </div>
        </div>
        <div className="home-button">
          <button className="button">
          <a href="/Login" className="navigate">HOME FEED</a></button>
        </div>
        <div className="link" style={{marginTop:"-100px"}}>
        <Social />
        </div>
      </div>
    </>
  );
}
export default Home;





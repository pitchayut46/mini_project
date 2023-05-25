import Navbar from "./Navbar";

function Heaven(params) {
    return (
      <div
        className="app"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          flexDirection: "column",
          backgroundColor:"#BBBFBA",
          color:"white"
        }}
      >
        <Navbar />
        <h1>ERROR 404 THIS PAGE IS UNDER CONSTRUCTION</h1>
        <br />
        <h4>Sorry for the inconvenience</h4>
      </div>
    );
  }
  
  export default Heaven;
  
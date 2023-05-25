// import "./Social_inline.css";
function Social_inline() {
  return (
    <>
      <style>
        {`
        .facebook{
          width: 25px;
          height: 25px;
        }
    
        .twitter{
          width: 25px;
          height: 25px;
        }
    
        .instagram{
          width: 25px;
          height: 25px;
          border-radius: 360rem;
        }
    
        .youtube{
          width: 25px;
          height: 25px;
          border-radius: 360rem;
        }
    
        .icon {
          margin: 10px;
        }
    
        .social-link{
          margin-top: 40px;
          margin-left: 30px;
        }
      `}
      </style>
      <div className="socail-links">
        <div className="social-link" style={{ display: "flex" }}>
          <a
            href="https://www.facebook.com/GOT7Official/"
            target="_blank"
            rel="facebook"
          >
            <i className="icon">
              <img
                className="facebook"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png"
                alt="facebook"
              ></img>
            </i>
          </a>
          <a href="https://twitter.com/GOT7" target="_blank" rel="twitter">
            <i className="icon">
              <img
                className="twitter"
                src="https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/twitter_circle-512.png"
                alt="twitter"
              ></img>
            </i>
          </a>
          <a
            href="https://www.facebook.com/GOT7Official/"
            target="_blank"
            rel="instagram"
          >
            <i className="icon">
              <img
                className="instagram"
                src="https://toppng.com/uploads/preview/instagram-logo-circle-11549679754rhbcorxntv.png"
                alt="instagram"
              ></img>
            </i>
          </a>
          <a
            href="https://youtube.com/@GOT7_isourname"
            target="_blank"
            rel="youtube"
          >
            <i className="icon">
              <img
                className="youtube"
                src="https://www.pngitem.com/pimgs/m/11-114700_youtube-red-circle-youtube-circle-icon-png-transparent.png"
                alt="youtube"
              ></img>
            </i>
          </a>
        </div>
      </div>
    </>
  );
}
export default Social_inline;

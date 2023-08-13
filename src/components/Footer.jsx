import { styled } from "styled-components";

const Footer = () => {
  return (
    <Div>
      <footer className="footer">
        {/* <div className="list">
                <ul className="list-1"> 
                    <h3>Home</h3>
                    <li>Pope</li>
                    <li>Pope</li>
                    <li>Pope</li>
                    <li>Pope</li>
                    <li>Pope</li>
                    <li>Pope</li>
                    <li>Pope</li>
                </ul>
                <ul className="list-1"> 
                    <h3>Home</h3>
                    <li>Pope</li>
                    <li>Pope</li>
                    <li>Pope</li>
                    <li>Pope</li>
                    <li>Pope</li>
                    <li>Pope</li>
                    <li>Pope</li>
                </ul>
                <ul className="list-1"> 
                    <h3>Home</h3>
                    <li>Pope</li>
                    <li>Pope</li>
                    <li>Pope</li>
                    <li>Pope</li>
                    <li>Pope</li>
                    <li>Pope</li>
                    <li>Pope</li>
                </ul>

  
                <div className="socials">
                <h3>You can follow us on:</h3>
                <div className="social-img">
                <img src="assets/facebook.png" alt="" />
                <img src="assets/twiter.png" alt="" />
                <img src="assets/instagram.png" alt="" />
                <img src="assets/link.png" alt="" />
                <img src="assets/tiktok.png" alt="" />
                </div>
          
            </div>
            </div> */}

        <div className="one">
          <div className="logo">
            <img src="assets/loggo.jpg" alt="" width={90} height={90} />
          </div>

          <div className="list">
            <h2>About</h2>
            <ul>
              <li>Techbiz</li>
              <li>Pecuilar Lab</li>
              <li>Techbiz</li>
            </ul>
          </div>

          <div className="list">
            <h2>Discover</h2>
            <ul>
              <li>Techbiz</li>
              <li>Pecuilar Lab</li>
              <li>Techbiz</li>
              <li>Techbiz</li>
            </ul>
          </div>

          <div className="list">
            <h2>Techbiz for Business</h2>
            <ul>
              <li>Techbiz</li>
              <li>Pecuilar Lab</li>
              <li>Techbiz</li>
              <li>Techbiz</li>
            </ul>
          </div>

          <div className="follow">
            <h2>Follow Us</h2>

            <ul>
              <img src="assets/gog.png" alt="" />
              <img src="assets/twitter.png" alt="" />
            </ul>
          </div>
        </div>

        <div className="two">
          <div className="copy">
            <p> Copright </p>
            <img src="assets/copy.png" alt="" />{" "}
            <p> 2023 Techbiz | Powered by Peculiar Labs </p>
          </div>
        </div>
      </footer>
    </Div>
  );
};

export default Footer;

const Div = styled.div`
  .footer {
    width: 100% !important;
    height: 491px;
    background: #c7db00;
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .one {
      display: flex;
      justify-content: center;
      gap: 100px;
      margin-top: 10px;
    }

    .list {
      display: flex;
      flex-direction: column;
      gap: 30px;
      height: 297px;
    }

    .list h2 {
      color: #000;
      font-family: "Josefin Sans", sans-serif;
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
    .list ul {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .list ul li {
      color: #000;
      font-family: "Josefin Sans", sans-serif;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      text-decoration: none;
      list-style: none;
    }

    .follow {
      display: flex;
      flex-direction: column;
      gap: 30px;
    }

    .follow h2 {
      color: #000;
      font-family: "Josefin Sans", sans-serif;
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }

    .follow ul {
      display: flex;
      gap: 20px;
    }

    .two {
    }

    .two .copy {
      display: flex;
      gap: 5px;

      text-align: center;
      justify-content: center;
      color: #000;
      text-align: center;
      font-family: "Josefin sans", sans-serif;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      align-items: center;
      // position:relative;
    }
    .two .copy span {
      width: 20px;
      height: 20px;
      background: red;
      overflow: hidden;
      margin: 0;
      padding: 0;
      justify-content: center;
    }

    // .two p img{
    //   position:absolute;
    //   top:1px;

    // }

    .socials img:hover {
      transform: scale(105%);
      animation: beatingHeart 1.2s infinite;
    }

    @keyframes beatingHeart {
      0% {
        transform: scale(1);
      }

      15% {
        transform: scale(1.15);
      }

      30% {
        transform: scale(1);
      }

      45% {
        transform: scale(1.15);
      }

      60% {
        transform: scale(1);
      }
    }
  }
`;

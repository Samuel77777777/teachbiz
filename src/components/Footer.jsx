import { styled } from "styled-components";

const Footer = () => {
  return (
    <Div>
      <footer className="footer">
        <div className="one">
        <section style={{display: 'flex', gap:20}}>
          <div className="logo">
            <img src="assets/loggo.jpg" alt="" width={90} height={90} />
          </div>
          {/* 
          the links in the footer section */}

          <div className="list">
            <h2>About</h2>
            <ul>
              <li>Techbiz</li>
              <li>Pecuilar Lab</li>
              <li>Techbiz</li>
            </ul>
          </div>
          </section>


<section style={{display: "flex", gap:20 }} >
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

</section>
     
          {/* social media links */}

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
   padding-top:100px;
    background: #c7db00;
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-bottom:100px;



  }

  .logo{
    margin-right:40px;
  }

    .one {
      display: flex;
      justify-content: center;
      gap: 60px;
      margin-top: 10px;
      flex-wrap:wrap;
      margin-bottom:20px;
    
    }

    .list {
      display: flex;
      flex-direction: column;
      gap: 30px;
      margin-left:40px;

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

    img:hover {
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

  @media(max-width: 768px){
    

    .one{
  display: flex;
  flex-wrap:wrap;
  gap: 0px;
  padding:0px;
  margin:0px;
  height:auto;
    }

    .list {
    
      gap: 30px;
      margin-left:20px;
  

  }
`;

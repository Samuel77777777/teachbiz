import styled from "styled-components";
import { useState, useRef } from "react";
import Navbar from "./nav-component/Navbar";
import Footer from "./Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const ReviewCard = () => {
  // this is the state of the write review and upload photo
  const [text, setText] = useState("");
  const [wordCount, setWordCount] = useState(0);
  const [selectedFileName, setSelectedFileName] = useState("");
  const [rating, setRating] = useState(null);
  const [rateColor, setRateColor] = useState(null);

  // this is function for  counting the words in the write a review section
  const handleTextChange = (event) => {
    const newText = event.target.value;

    //split the text into words using spaces
    const words = newText.trim().split(/\s+/);

    //filter out empty strings (eg multiple spaces)
    const filteredWords = words.filter((word) => word.length > 0);

    //check if the word count exceed 150
    if (filteredWords.length > 20) {
      //truncate the text to the first 20 words
      const truncatedText = filteredWords.slice(0, 20).join(" ");
      setText(truncatedText);
      setWordCount(20);
    } else {
      //update the and word count
      setText(newText);
      setWordCount(filteredWords.length);
    }
  };

  //this is for the drag and drop  and add photo section
  const fileInputRef = useRef(null);

  const handleFileInputChange = (e) => {
    const fileName = e.target.files[0]?.name || "";
    setSelectedFileName(fileName);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      const fileName = files[0].name;
      setSelectedFileName(fileName);
      // You can also trigger the file input here if you want to upload the dropped file immediately.
      // fileInputRef.current.files = files;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // const changeStarColor = () => {
  //   setStarClicked((prevIsColored) => !prevIsColored);
  // };

  return (
    <Div>
      <nav className="header">        
        <Navbar />
      </nav>

      <div className="review-container">
        <form action="" onSubmit={handleSubmit}>
          <div className="sections">
            {/* 
this is the stars section */}

            <div className="section---1">
              <p>Rate your experience with us</p>
              <div className="review-stars">
                {[...Array(5)].map((star, index) => {
                  const currentRate = index + 0;
                  return (
                    <>

                      <label htmlFor="">
                        <FontAwesomeIcon icon={faStar} color={currentRate <= (rateColor || rating) ? "Yellow" : "grey"} value={currentRate} onClick={() => setRating(currentRate)} className="star" />
                      </label>
                    </>
                  );
                })}

              </div>
            </div>

            {/* business name section */}

            <div className="section---2">
              <label htmlFor="business">Enter the business name</label>
              <input
                type="text"
                placeholder="Write the business name here"
                id="business"
              />
            </div>

            {/*         
        write a review section */}
            <div className="section---2  div">
              <label htmlFor="review">Write your review</label>
              <textarea
                name=""
                id="review"
                cols="30"
                rows="10"
                placeholder="Best Food Service"
                onChange={handleTextChange}
                value={text}
              ></textarea>
              <p className="word-count">
                {wordCount} / 20 characters{" "}
                {wordCount === 20 && (
                  <img src="assets/check.png" alt="" className="check" />
                )}
              </p>
            </div>
            {/* 
    drag and drop section */}
            <div className="file-input-container  div">
              <label
                htmlFor="custom-file-input"
                onDragOver={handleDragOver}
                onDrop={handleDrop}
              >
                <div className="custom-file-button">
                  <span className="title">
                    Add a Photo <img src="assets/camera.png" alt="" />
                  </span>
                  <span className="title2">
                    {selectedFileName
                      ? `Selected File: ${selectedFileName}`
                      : "Click to add/Drag & Drop"}
                  </span>
                </div>
              </label>
              <input
                ref={fileInputRef}
                type="file"
                id="custom-file-input"
                onChange={handleFileInputChange}
                style={{ display: "none" }}
              />
            </div>

            <button className="submit-btn">Submit</button>
          </div>
        </form>
      </div>

      <div className="footer">
        <Footer />
      </div>
    </Div>
  );
};

export default ReviewCard;

const Div = styled.div`
  display: flex;
  flex-direction: column;

  .review-container {
    box-shadow: 0px 106px 42px rgba(0, 0, 0, 0.01),
      0px 59px 36px rgba(0, 0, 0, 0.05), 0px 26px 26px rgba(0, 0, 0, 0.09),
      0px 7px 15px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1);
    border-radius: 11px;
    width: 800px;
    margin: 0 auto;
    padding: 20px;
    margin-bottom: 100px;
  }

  .header {
    margin-bottom: 100px;
  }

  .sections {
    display: flex;
    flex-direction: column;
    gap: 50px;
    align-items: flex-start;
  }

  .section---1 {
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: flex-start;
    margin-top: 30px;
    margin-left: 30px;
  }
  .review-stars {
    display: flex;
    gap: 10px;
  }

  .star {
    width: 30px;
    height: 30px;
    cursor: pointer;
  }


  .section---1 p {
    color: #000;
    font-family: "Josefin sans", sans-serif;
    font-size: 21px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  .section---2 {
    display: flex;
    flex-direction: column;
    margin-left: 30px;
    gap: 10px;
  }

  .section---2 label {
    color: #000;
    font-family: "Josefin sans", sans-serif;
    font-size: 21px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  .section---2 input {
    border-radius: 15px;
    border: 1px solid rgba(0, 0, 0, 0.5);
    background: #fff;
    height: 52px;
    padding: 6px 15px;
    outline: none;

    color: #000;
    font-family: "Josefin sans", sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .section---2 textarea {
    width: 600px;
    height: 218px;

    background: #d9d9d9;
    outline: none;
    border: none;
    border-radius: 10px;

    color: #000;
    font-family: "Josefin sans", sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding: 5px;
  }

  .word-count {
    text-align: right;
    color: #000;
    text-align: right;
    font-family: "Josefin sans", sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    align-items: center;
    display: flex;
    gap: 5px;
    justify-content: flex-end;
  }
  .check {
    width: 20px;
    height: 20px;
  }

  .section---3 {
    display: flex;
    flex-direction: column;
    margin-left: 30px;
  }

  .section---3 p {
    color: #000;
    font-family: "Josefin sans", sans-serif;
    font-size: 21px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  .section---3 span {
    color: rgba(0, 0, 0, 0.51);
    font-family: "Josefin sans", sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  // .drop {
  //   margin-top: 20px;
  //   width: 600px;
  //   height: 300px;
  //   border: 1px solid black;
  //   align-items: center;
  //   text-align: center;
  // }

  .file-input-container {
    position: relative;
    display: inline-block;
    margin-left: 30px;
  }

  /* Hide the default file input */
  #custom-file-input {
    display: none;
  }

  .custom-file-button {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    background: #d9d9d9;

    border-radius: 5px;

    cursor: pointer;
    width: 600px;
    height: 269px;
  }

  /* Style the title text */
  .title {
    font-weight: bold;
    display: inline-flex;
    padding: 10px;
    align-items: center;
    gap: 10px;
    background: #fff;
    color: black;

    color: #000;
    font-family: "Josefin sans", sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .title2 {
    margin-top: 10px;
    color: #000;
    font-family: "Josefin sans", sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .submit-btn {
    border-radius: 8px;
    background: #c7db00;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

    width: 157px;
    padding: 10px 15px;
    margin-left: 30px;
    border: none;
    outline: none;

    color: #000;
    text-align: center;
    font-family: "Josefin sans", sans-serif;
    font-size: 21px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    cursor: pointer;
  }

  .btn {
    color: black;
  }

  .profile {
    color: #fff;
  }

  .login{
    color:black;
  }

  .drop {
    display: flex;
    padding: 10px;
    align-items: flex-start;
    gap: 10px;
    border-radius: 10px;
    border: 1px solid #d9d9d9;
    background: rgba(255, 255, 255, 0);
    margin-top: 0px;
  }

  @media (max-width:765px){
    .review-container{
      width:100%;
    }

    .section---2 textarea {
      width: 90%;

    }
  

    .div{
      width:100%;
    }
    .input{
      width:90%;
    }

    .custom-file-button {
      width: 90%;

    }

    .icon{
      color:black;
    }
    

    
.main-drop{
  display: none;
 
}

.word-count{
  margin-right:50px;
}

  
  }
`;

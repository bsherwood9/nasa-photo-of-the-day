import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import axios from "axios";
import "./App.css";
import InfoCard from "../src/components/Info-card/infoCard";
import Header from "../src/components/header/header";
import ChangePhoto from "../src/components/Buttons/ChangePhoto";

function App() {
  const [info, setInfo] = useState([]);
  const [photo, setPhoto] = useState(null);
  //Thank you to stack overflow for this gem.
  const ndate = new Date();
  var today = new Date(
    ndate.getTime() - ndate.getTimezoneOffset() * 60000
  ).toISOString();

  const [date, setDate] = useState(today.substring(0, 10));
  const [type, setType] = useState("image");
  const [url, setUrl] = useState("");
  //setting the date. Had to do some weird stuff because .toISOString converts the date to 8 hours ahead, meaning
  //we are a day ahead, which doesn't yet exist for NASA!
  const changeDate = () => {
    const currentDate = new Date(date);
    currentDate.setDate(currentDate.getDate() - 1);
    let newDate = currentDate.toISOString().substring(0, 10);
    setDate(newDate);
  };
  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?date=${date}&api_key=F5J0WJ3PmAIEz5YneYqgz8lnm0ZUEpM7e0d7dwBj`
      )
      .then(data => {
        console.log(data);
        setInfo(data.data);
        setPhoto(data.data.hdurl);
        setType(data.data.media_type);
        setUrl(data.data.url);
      });
  }, [date]);
  return (
    <div>
      <Header date={info.date} />
      <InfoCard
        url={url}
        type={type}
        title={info.title}
        desc={info.explanation}
        photo={photo}
        name={info.copyright}
      />
      <ChangePhoto changeDate={changeDate} />
    </div>
  );
}

export default App;

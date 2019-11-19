import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import InfoCard from "../src/components/Info-card/infoCard";
import Header from "../src/components/header/header";
import ChangePhoto from "../src/components/Buttons/ChangePhoto";

function App() {
  const [info, setInfo] = useState([]);
  const [photo, setPhoto] = useState(null);
  const [date, setDate] = useState(new Date().toISOString().substring(0, 10));
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
      });
  }, [date]);
  return (
    <div>
      <Header date={info.date} />
      <InfoCard
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

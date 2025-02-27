import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import NasaImage from "./components/Nasa";

const dummyData = {
  date: "2022-10-03",
  explanation:
    "What mysteries might be solved by peering into this crystal ball?  In this case, the ball is actually a moon of Jupiter, the crystals are ice, and the moon is not only dirty but cracked beyond repair.  Nevertheless, speculation is rampant that oceans exist under Europa's fractured ice-plains that could support life.  Europa, roughly the size of Earth's Moon, is pictured here in an image taken a few days ago when the Jupiter-orbiting robotic spacecraft Juno passed within 325 kilometers of its streaked and shifting surface. Underground oceans are thought likely because Europa undergoes global flexing due to its changing gravitational attraction with Jupiter during its slightly elliptical orbit, and this flexing heats the interior. Studying Juno's close-up images may further humanity's understanding not only of Europa and the early Solar System but also of the possibility that life exists elsewhere in the universe.",
  hdurl: "https://apod.nasa.gov/apod/image/2210/Europa_JunoLuck_2611.jpg",
  title: "Jupiter's Europa from Spacecraft Juno",
};
function App() {
  const [data, setData] = useState(dummyData);

  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return <div className="App">{data && <NasaImage nasaImg={data} />}</div>;
}

export default App;

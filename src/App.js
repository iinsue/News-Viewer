import NewsList from "./components/NewsList";

import { useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState(null);
  const SECRET_KEY = process.env.REACT_APP_NEWS_API_KEY;
  const onClick = async () => {
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=kr&apiKey=${SECRET_KEY}`
      );
      setData(response.data);
    } catch (e) {
      console.log(e);
    }
  };
  return <NewsList />;
}

export default App;

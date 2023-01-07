import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//views
import Home from "./views/Home";
import Movies from "./views/Movies";
import TVShows from "./views/TVShows";
import Suggest from "./views/Suggest";
import Error404 from "./views/Error404";
import Detailed from "./views/Detailed";

//Contexts
import HomeProvider from "./contexts/HomeContext";
import SuggestProvider from "./contexts/SuggestContext";

//styles
import GlobalStyle from "./styles/GlobalStyle";

//components
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <GlobalStyle />
      <Header />
      <HomeProvider>
        <SuggestProvider>
          <Routes>
            <Route path="/movie-app/" element={<Home />} />
            <Route path="/movie-app/tv-shows/:id" element={<Detailed />} />
            <Route path="/movie-app/movies/:id" element={<Detailed />} />
            <Route path="/movie-app/movies/" element={<Movies />} />
            <Route path="/movie-app/tv-shows/" element={<TVShows />} />
            <Route path="/movie-app/suggest-me" element={<Suggest />} />
            <Route path="/movie-app/*" element={<Error404 />} />
          </Routes>
        </SuggestProvider>
      </HomeProvider>
    </BrowserRouter>
  );
}

export default App;

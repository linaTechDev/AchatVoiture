import './App.css';
import {Routes, Route} from "react-router-dom";
import React from "react";
import MainPage from "./components/MainPage";
import 'bootstrap/dist/css/bootstrap.css';
import PageNotFound from "./components/pageNotFound/PageNotFound";
import DetailVoiture from "./components/detail/DetailVoiture";
import FavorisVoitures from "./components/favoris/FavorisVoitures";

function App() {
    return (
        <div>
            <Routes>
                <Route path="*" element={<PageNotFound/>}/>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/voiture/:id" element={<DetailVoiture/>}/>
                <Route path="/favoris" element={<FavorisVoitures/>}/>
        </Routes>
      </div>
  );
}

export default App;

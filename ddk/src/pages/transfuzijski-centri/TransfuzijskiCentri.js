import React from 'react';
import Navbar from '../home-page/Navbar'
import 'ol/ol.css';
import Map from 'ol/Map';
import OSM from 'ol/source/OSM';
import TileLayer from 'ol/layer/Tile';
import View from 'ol/View';


function TransfuzijskiCentri() {
    return (
      <>
      <Navbar />
      <div id="map" class="map">
  
      </div>
      </>
    );
  }
  
export default TransfuzijskiCentri;
import React, { Component } from 'react';
import { Map, GoogleApiWrapper,InfoWindow, Marker } from 'google-maps-react';
import Navbar from '../home-page/Navbar'

const mapStyles = {
  width: '100%',
  height: '100%',
  marginTop: 120,
};


export class TransfuzijskiCentri extends Component {
  state = {
    showingInfoWindow: false,  // Hides or shows the InfoWindow
    activeMarker: {},          // Shows the active marker upon click
    selectedPlace: {}          // Shows the InfoWindow to the selected place upon a marker
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    return (
     <>
     <Navbar />
     <div className ="mapa">
     <Map
        google={this.props.google}
        zoom={8}
        style={mapStyles}
        initialCenter={
          {
            lat: 43.858608955913965,
            lng: 18.408520761247626
          }
        }
      >
      <Marker
        name="Opća bolnica 'Prim. dr. Abdulah Nakaš'"
        onClick={this.onMarkerClick}
        position={{ lat: 43.85854526952565, lng: 18.408277791363755 }}
      />
      <Marker
        name="Kantonalna bolnica 'Dr.Irfan Ljubijankić' Bihać"
        onClick={this.onMarkerClick}
        position={{ lat: 44.80989038993571, lng: 15.856822705448009}}
      />
      <Marker
        name="Kantonalna bolnica Zenica"
        onClick={this.onMarkerClick}
        position={{ lat: 44.21030887640623, lng: 17.926141694663094}}
      />
      <Marker
        name="Kantonalna bolnica Goražde"
        onClick={this.onMarkerClick}
        position={{ lat: 43.66435387190619, lng:18.97753535208271}}
      />
      <Marker
        name="Županijska bolnica Orašje"
        onClick={this.onMarkerClick}
        position={{ lat: 45.038215199528125, lng:18.68927372397833}}
      />
      <Marker
        name="Kantonalna bolnica Travnik"
        onClick={this.onMarkerClick}
        position={{ lat: 44.22918250152409, lng: 17.654749772399693}}
      />
      <Marker
        name="Županijska bolnica 'Dr. fra Mihovil Sučić', Livno"
        onClick={this.onMarkerClick}
        position={{ lat: 43.82731986472066, lng: 17.002586907309624}}
      />
      <Marker 
        name="Bolnica Dr. Fra Mato Nikolić, Nova Bila"
        onClick={this.onMarkerClick}
        position={{ lat: 44.19285481585005, lng:  17.746003878389338}}
      />
      <Marker
        name="Opća bolnica Tešanj"
        onClick={this.onMarkerClick}
        position={{ lat: 44.60983799294728, lng: 17.98905940600565}}
      />
      <Marker
        name="Opća bolnica 'Dr. Mustafa Beganović', Gračanica"
        onClick={this.onMarkerClick}
        position={{ lat: 44.698466495595376, lng: 18.30240090548454}}
      />
      <Marker
        name="Opća bolnica Bugojno"
        onClick={this.onMarkerClick}
        position={{ lat: 44.05410119447548, lng: 17.44808444876711}}
      />
      <Marker
        name="Opća bolnica Jajce"
        onClick={this.onMarkerClick}
        position={{ lat: 44.34549258349438, lng: 17.27157607680266}}
      />
      <Marker
        name="Opća bolnica Konjic"
        onClick={this.onMarkerClick}
        position={{ lat: 43.655918878955184, lng: 17.952400449163456}}
      />
      <Marker
        name="Opća bolnica Sanski Most"
        onClick={this.onMarkerClick}
        position={{ lat: 44.76830836485951, lng: 16.65073899150868}}
      />
      <Marker
        name="Sveučilišna klinička bolnica Mostar"
        onClick={this.onMarkerClick}
        position={{ lat:  43.3451159081177, lng:  17.789643987593514}}
      />
      <Marker
        name="Regionalni Medicinski Centar 'Dr Safet Mujić', Mostar"
        onClick={this.onMarkerClick}
        position={{ lat: 43.32461901612048, lng: 17.82292371943332}}
      />
      <Marker
        name="Univerzitetski klinički centar Tuzla"
        onClick={this.onMarkerClick}
        position={{ lat: 44.53668817460375, lng: 18.692741469044183}}
      />

      <InfoWindow
        marker={this.state.activeMarker}
        visible={this.state.showingInfoWindow}
        onClose={this.onClose}
        >
        <div>
          <h1>{this.state.selectedPlace.name}</h1>
        </div>
      </InfoWindow>
      </Map>
     </div>
     
      </>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyB9oqM-5RdyyoTI3YrljzGTwDmdV8tdl2c"
})(TransfuzijskiCentri);
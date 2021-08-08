import React, {Component,useState} from 'react';
import Navbar from '../home-page/Navbar'
import {
  Calendar,
  momentLocalizer,
} from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment'
import './AkcijaDarivanja.css';
import AkcijaDarivanjaKrviDetalji from './AkcijaDarivanjaKrviDetalji'
import akcijeDarivanjaKrvi from "./events";
import axios from 'axios'
import {toast} from 'react-toastify';
toast.configure()

const localizer = momentLocalizer(moment);
const messages = { 
  allDay: 'Cijeli dan',
  previous: 'Prethodni',
  next: 'Sljedeći',
  today: 'Danas',
  month: 'Mjesec',
  week: 'Sedmica',
  day: 'Dan',
  agenda: 'Agenda',
  date: 'Datum',
  time: 'Vrijeme',
  event: 'Događaj'
};

const ColoredDateCellWrapper = ({ children }) =>
  React.cloneElement(React.Children.only(children), {
    style: {
      backgroundColor: 'lightblue',
    },
  })
  
export default class AkcijeDarivanja extends Component {
  constructor(props) {
    super(props)
    this.state = {
      akcijeDarivanjaKrvi : [
        {Pocetak: "", Kraj: "", Naslov: "", Id: ""}
        
      ],
      akcijaDarivanjaID: '',
      naslov: ''
    }; 
}

showModal (id, naslov)  {
  this.setState({naslov: naslov})
  this.setState({akcijaDarivanjaID: id})
  document.getElementById("prikaziDetaljeAkcijeModal").classList.toggle('is-active')
};

closeModal = () => {
  document.getElementById("prikaziDetaljeAkcijeModal").classList.toggle('is-active')
};

componentDidMount() {    
    axios.get('http://localhost:8080/akcija_darivanja_krvi/lista', {
    }).then(res => {
        var temp = [];       
        for (var i = 0; i < res.data.length; i++) {
            var pocetak = res.data[i].datum + "T" + res.data[i].pocetak;
            var kraj = res.data[i].datum + "T" + res.data[i].kraj;
            var naslov = res.data[i].naslov;
            temp.push({ Pocetak: new Date(pocetak), Kraj: new Date(kraj), Naslov: naslov, Id: res.data[i].id});
        }
        this.setState({akcijeDarivanjaKrvi: temp})
    }).catch(err => {
      toast.error(err.response.toString(), {position: toast.POSITION.TOP_RIGHT})
    })
  }


  render() {
       return (
          <div className = "div-kalendar">           
            <Navbar/>
            <Calendar   
              classes = "kalendar"
              toolbar={true}
              events={this.state.akcijeDarivanjaKrvi}
              localizer={localizer}
              startAccessor='Pocetak'
              endAccessor='Kraj'
              messages={messages} // new
              defaultDate={moment().toDate()}
              views={['month','day','agenda']}
              onSelectEvent={event => this.showModal(event.Id, event.Naslov)}
              style={{ height: 750, paddingRight:45,paddingLeft:50,paddingTop:150, }}
              components={{
                timeSlotWrapper: ColoredDateCellWrapper,
              }}
              eventPropGetter={event => {
                const eventData = this.state.akcijeDarivanjaKrvi.find(ot => ot.id === event.Id);
                const backgroundColor = eventData && eventData.color;
                return { style: { backgroundColor } };
              }}
            />
             <div id ="prikaziDetaljeAkcijeModal" class="modal">
                  <div class="modal-background"></div>
                        <div class="modal-card">
                        <header class="modal-card-head">
                            <p class="modal-card-title">{this.state.naslov}</p>
                            <button class="delete" aria-label="close" onClick={() => this.closeModal()}></button>
                        </header>
                        <footer class="modal-card-foot">
                          <AkcijaDarivanjaKrviDetalji akcijaDarivanjaID = {this.state.akcijaDarivanjaID}/>
                        </footer>      
                  </div>
            </div>
          </div>        
       )
   }
}


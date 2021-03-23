import React, {Component,useState} from 'react';
import Navbar from '../home-page/Navbar'
import {
  Calendar,
  momentLocalizer,
} from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment'
import './AkcijaDarivanja.css'
import events from "./events";

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
 
   render() {
       return (
          <div className = "div-kalendar">
            <Navbar/>
            <Calendar   
             classes = "kalendar"
              toolbar={true}
              events={events}
              localizer={localizer}
              startAccessor='start'
              endAccessor='end'
              messages={messages} // new
              defaultDate={moment().toDate()}
              views={['month','day','agenda']}
              onSelectEvent={event => alert(event.title)}
              style={{ height: 750, paddingRight:45,paddingLeft:50,paddingTop:150, }}
              components={{
                timeSlotWrapper: ColoredDateCellWrapper,
              }}
              eventPropGetter={event => {
                const eventData = events.find(ot => ot.id === event.id);
                const backgroundColor = eventData && eventData.color;
                return { style: { backgroundColor } };
              }}
            />
        </div>
       )
   }
}


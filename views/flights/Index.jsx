const React = require('react');

const Index = (props) => {
  return (
    <div>
      <h1> Index Route </h1>
      <a href="/flights/new">Create a New Flight!</a>
      {/* In here goes your list of all of the flights and their info */}
    
      {
          props.flights.map((flight, index) => {
            return (
              <li key={index}>
                The <a href={`/flights/${flight._id}`}>{flight.airline}</a> is {flight.flightNo} {flight.departs ? " datetime-local" : "one year from date created!"}
              </li>
            )
          })
        }
    </div>


  )

 }
module.exports = Index;
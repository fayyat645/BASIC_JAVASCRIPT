var flightNumber = 'NGT 929';
    var flightStatus = 'landed';
function Flight(flightNumber, flightStatus){

    this.flightNumber = flightNumber;
    this.flightStatus = flightStatus;
}

var flight1 = new Flight(flightNumber, flightStatus);
//assign a flight object to flight1 variable

//output
console.log('The flight ' + flight1.flightNumber + ' is ' + flight1.flightStatus)

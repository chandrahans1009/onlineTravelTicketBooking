
//Train Ticket booking
function booked() {
    let email = prompt('Please enter your Email address')
    if (email) {
        alert('We have mailed you, the cheapest train ticket fares for the opted route')
      let deal = prompt('Please enter 1, to book you the best deal out of all of them')
      if(deal==1){
          alert('Your Ticket has been booked! Thank You for choosing us: Enjoy your Journey :)');
      }else{
          alert('Thankyou for giving your time');
          exit;
      }
    } else {
        alert('Please enter your Email address, so that we can email you your train fare details')
        let emailAskedAgain = prompt('Please enter your Email address')
        if (emailAskedAgain != 0) {
            alert('We have mailed you, the cheapest train ticket fares for the opted route')
      let deal = prompt('Please enter 1, to book you the best deal out of all of them')
      if(deal==1){
          alert('Your Ticket has been booked! Thank You for choosing us: Enjoy your Journey :)');
      }else{
          alert('Thankyou for giving your time');
          exit;
      }
        }
    }
}
function trainPnrSearch() {
    let email = prompt('Please enter your Email address')
    if (email) {
        alert('We have mailed you, your PNR details')
    } else {
        alert('Please enter your Email address, so that we can email you your PNR details')
        let emailAskedAgain = prompt('Please enter your Email address')
        if (emailAskedAgain != 0) {
            alert('We have mailed you, your PNR details')
        }
    }
}
//Flight tickets
function flightTicketBooked() {
    let email = prompt('Please enter your Email address')
    if (email) {
        alert('We have mailed you, the cheapest flight ticket fares for the opted route')
      let deal = prompt('Please enter 1, to book you the best deal out of all of them')
      if(deal==1){
          alert('Your Ticket has been booked! Thank You for choosing us: Enjoy your Journey :)');
      }else{
          alert('Thankyou for giving your time');
          exit;
      }
    } else {
        alert('Please enter your Email address, so that we can email you your flight fare details')
        let emailAskedAgain = prompt('Please enter your Email address')
        if (emailAskedAgain != 0) {
            alert('We have mailed you, the cheapest train ticket fares for the opted route')
      let deal = prompt('Please enter 1, to book you the best deal out of all of them')
      if(deal==1){
          alert('Your Ticket has been booked! Thank You for choosing us: Enjoy your Journey :)');
      }else{
          alert('Thankyou for giving your time');
          exit;
      }
        }
    }
}
function flightPnrSearch() {
    let email = prompt('Please enter your Email address')
    console.log(email);
    if (email) {
        alert('We have mailed you, your PNR details')
    } else {
        alert('Please enter your Email address, so that we can email you your PNR details')
        let emailAskedAgain = prompt('Please enter your Email address')
        if (emailAskedAgain != 0) {
            alert('We have mailed you, your PNR details')
        }
    }
}

//Contact Us
function messageReceived() {
    alert('Thank You for contacting us')
}

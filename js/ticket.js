seatArray =[];
viewersName = "";
seatNumber = 0;
elements = ["no2","naming","allocatee","printfor","pfor","printt","printseat"];
numberOfSeat = 0;
ticketNumber = [];
ticketNo = 0;



window.addEventListener("load", loadseats);
function loadseats(){
    retrieved1 = JSON.parse(localStorage.getItem("cinemaseats"));
    retrieved2 = JSON.parse(localStorage.getItem("tickets"));
    retrieved3 = JSON.parse(localStorage.getItem("ticketsno"));
    if(retrieved1    != undefined){
        seatArray    = retrieved1;
        ticketNumber = retrieved2;
        ticketNo     = retrieved3
        arranger();
    }


}
function arrangeSeat(){

    numberOfSeat = no1.value;
    if(numberOfSeat == 1){
        if(confirm("Are you sure you want to create " + numberOfSeat +" seat?")){

            for(i = 1; i <= numberOfSeat; i++){
                seatArray[i] = "";
            }
            for(u = 0; u < elements.length; u++){
                document.getElementById(elements[u]).removeAttribute("disabled");
            }
            document.getElementById("allocatee").style.display = "block";
            arranger();
        }
    }
    else {
        if (confirm("Are you sure you want to create " + numberOfSeat + " seats?")) {

            for (i = 1; i <= numberOfSeat; i++) {
                seatArray[i]= "";
            }
            for (u = 0; u < elements.length; u++) {
                document.getElementById(elements[u]).removeAttribute("disabled");
            }
            document.getElementById("allocatee").style.display = "block";
            arranger();
        }
    }
}


function arranger(){
    var counter = 0;

    var display = "<table  width=80% cellspacing='20px' align=center style='text-align: center;color:white' bgcolor='#1f1f1f'> <tr>";
    for(v = 1; v < seatArray.length; v++){
        display += "<td> <img src='images/chair.png'><br /><b>Seat: "+ v + "- " + seatArray[v]  +"</b></td>";
        ticketNumber[v];
        counter++;

        if(counter == 10){
            display += "</tr> <tr>";
            counter = 0;
        }
    }
    chartDisplayy();
    display += "</tr></table> <p style='color: white;font-weight: bolder;text-align: center'>Cinema Seats Allocator 1.0 &copy; AGAPE Enterprises 2018.</p><br /><br />"
    cinemaHall.innerHTML = display;
}

function allocator(){
    seatNumber = no2.value;
    viewersName = naming.value;



    if(seatArray[seatNumber] == undefined && seatArray.length == 2){
        seatNumber = alert("The seats allocated are not upto " + seatNumber + ". It will be allocated to seat 1 instead. ");
        no2.value = 1;
    }

    else if(seatArray[seatNumber] == undefined){
        seatNumber = prompt("The seats allocated are not upto " + seatNumber + ". Please enter a seat number between 1 and " + numberOfSeat);
        no2.value = seatNumber;
    }


    else{
        if(seatArray[seatNumber] !== "") {
            if (confirm("This seat is already owned by " + seatArray[seatNumber] + ". Do you really want a replacement?"))
            {
                prompting = prompt("Enter new name for seat " + seatNumber + " please");
                seatArray[seatNumber] = prompting;
                naming.value = prompting;
                ticketNo++;
                ticketNumber[seatNumber] = ticketNo;
                arranger();
                no2.value = "";
                naming.value = "";
                allocatee.value ="Allocate Seat";
                storeTicket = JSON.stringify(seatArray);
                localStorage.setItem("cinemaseats",storeTicket);
                storeTicketNumber = JSON.stringify(ticketNumber);
                localStorage.setItem("tickets",storeTicketNumber);
                storeTicketNumber2 = JSON.stringify(ticketNo);
                localStorage.setItem("ticketsno",storeTicketNumber2);
                chartDisplayy();

            }

        }
        else{
            seatArray[seatNumber] = viewersName;
            ticketNo++;
            ticketNumber[seatNumber] = ticketNo;
            arranger();
            no2.value = "";
            naming.value = "";
            allocatee.value ="Allocate Seat";
            storeTicket = JSON.stringify(seatArray);
            localStorage.setItem("cinemaseats",storeTicket);
            storeTicketNumber = JSON.stringify(ticketNumber);
            localStorage.setItem("tickets",storeTicketNumber);
            storeTicketNumber2 = JSON.stringify(ticketNo);
            localStorage.setItem("ticketsno",storeTicketNumber2);
            chartDisplayy();
        }
    }

}

function printer(){
    if(viewersName == "" && seatNumber == 0){
        alert("You have not allocated seats today!")
    }

    else {
        document.getElementById("mainn").style.display = "none";
        document.getElementById("printingd").style.display = "block";
        document.getElementById("printingd").innerHTML = "<html><head><title>Print Ticket</title></head><body><h1>Ogbomoso Mega Cinema</h1>"
            + "<div> <p>Thank you for purchasing the ticket</p><p> These are your booking details<br />" +
            "Your name is : " + viewersName.toUpperCase() + " <br />Your Seat Number is: " + seatNumber  +
            "<br /> Your Ticket Number is: " + ticketNo + " </p></div></body></html>";
        print();
        document.getElementById("printingd").style.display = "none";
        document.getElementById("mainn").style.display = "block";
    }
}

function printfor(){
    pFoor = pfor.value;
    pView = seatArray[pFoor];
    if(seatArray[pFoor] == undefined){
        alert("Seat " + pFoor + " is not available!")
    }

    else if(seatArray[pFoor] == ""){
        alert("Seat " + pFoor + " has not been allocated!")
    }
    else {

        document.getElementById("mainn").style.display = "none";
        document.getElementById("printingd").style.display = "block";
        document.getElementById("printingd").innerHTML = "<html><head><title>Print Ticket</title></head><body>" +
            "<h1>Ogbomoso Mega Cinema</h1>"
            + "<div> <p>Thank you for purchasing the ticket</p><p> These are your booking details<br />" +
            "Your name is: " + pView.toUpperCase() + " <br />Your Seat Number is: " + pFoor + "<br /> " +
            "Your Ticket Number is: "  + ticketNumber[pFoor] + "</div></body></html>";
        print();
        document.getElementById("printingd").style.display = "none";
        document.getElementById("mainn").style.display = "block";
    }
}

function verify() {
    if(retrieved1 != undefined){

    }
    else{
        for(u = 0; u < elements.length; u++){
            document.getElementById(elements[u]).setAttribute("disabled","disabled");
        }
    }
}


function viewerName() {
    allocatee.value = "Allocate Seat " + no2.value + " for " + naming.value;
}

function printseats() {
    document.getElementById("dashboard").style.display = "none";
    print();
    document.getElementById("dashboard").style.display = "block";
}

$(document).ready(function () {
    myChart = chartDisplay.getContext('2d');
    Chart.defaults.global.responsive = true;
    Chart.defaults.global.scaleOverride = true;
    Chart.defaults.global.startValue = 1;
});



function chartDisplayy(){
    totalSeats = seatArray.length - 1;
    allocatedSeats = ticketNo;
    nonAllocatedSeats = totalSeats - allocatedSeats;

    cinemaChart = new Chart(myChart, {
        type: 'bar',
        data: {
            labels: ['Allocated Seats', 'Non Allocated Seats'],
            datasets: [{
                    label: 'Seats',
                    data:[
                        allocatedSeats == -1 ? 0 :allocatedSeats,
                        nonAllocatedSeats,
                        0
                    ],
                backgroundColor:[
                    "#F7464A"
                    ,"#46BFBD"

                ]
                }
            ]

        },
        options: {
            scaleOverride: true,
            scaleSteps: 1,
            scaleStepWidth: 1,
            responsive: true,
            scaleShowGridLines: false
        }
    });
}



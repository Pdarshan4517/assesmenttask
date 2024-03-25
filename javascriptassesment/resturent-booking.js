function showBookingOption() {
    document.getElementById("booking-options").innerHTML = "";
    var bookingType = document.getElementById("booking-type").value;

    if (bookingType == "full-day") {
        // show only date input=======
        var dateInput = document.createElement("input");
        dateInput.type = "date";
        dateInput.id = "date";
        dateInput.required = true;

        document.getElementById("booking-options").appendChild(dateInput);

    } else if (bookingType == "half-day") {
        // show only date input==========
        var dateInput = document.createElement("input");
        dateInput.type = "date";
        dateInput.id = "date";
        dateInput.required = true;

        // show only slot option========
        var slotOptions = document.createElement("select");
        slotOptions.id = "slotOptions";
        slotOptions.required = true;

        //    for disable option=============
        var option = document.createElement("option");
        option.value = "";
        option.disabled = "disabled";
        option.selected = "selected";
        option.innerHTML = "--selected option--";

        // for multiple option=====
        // Breakfast======
        var Breakfast=document.createElement("option");
        Breakfast.value="Breakfast";
        Breakfast.innerHTML="Breakfast";

        // lunch================
       var Lunch = document.createElement("option");
        Lunch.value="Lunch";
        Lunch.innerHTML="Lunch";

        // Dinner=============
        var Dinner = document.createElement("option");
        Dinner.value="Dinner";
       Dinner.innerHTML="Dinner";

    //    call multiple option============
    slotOptions.appendChild(option);
    slotOptions.appendChild(Breakfast);
    slotOptions.appendChild(Lunch);
    slotOptions.appendChild(Dinner);

    document.getElementById("booking-options").appendChild(dateInput);
    document.getElementById("booking-options").appendChild(slotOptions);

    }else if (bookingType == "hourly") {
        // for adding a date=========
        var dateInput = document.createElement("Input");
        dateInput.type = "date";
        dateInput.id = "date";
        dateInput.required = true;

        // for time adding==========
        var timeInput = document.createElement("Input");
        timeInput.type = "time";
      timeInput.id = "time";
        timeInput.required = true;

        document.getElementById("booking-options").appendChild(dateInput);
    document.getElementById("booking-options").appendChild(timeInput); 
    }
}

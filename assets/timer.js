window.onload = function () {
    start();
  }

  var intervalId;
  var clockRunning = false;
  var time = 0;
  var lap = 1;



  function start() {

    //  TODO: Use setInterval to start the count here and set the clock to running.
    if (!clockRunning) {
      intervalId = setInterval(count, 1000);
      clockRunning = true;
    }



  }

  function count() {
    //  TODO: increment time by 1, remember we cant use "this" here.
    time++;
    //  TODO: Get the current time, pass that into the timeConverter function,
    //        and save the result in a variable.
    var currentTime = timeConverter(time);
    //  TODO: Use the variable you just created to show the converted time in the "display" div.
    $("#display").text(currentTime);
  }



  var seconds;

  function timeConverter(t) {

    var minutes = Math.floor(t / 60);
     seconds = t - (minutes * 60);

    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    else
    {
      seconds = "Times Up" ;

    }




    return seconds;
  }

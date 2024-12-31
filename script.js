// Set the date we're counting down to
var newYearDate = new Date("January 1, 2025 00:00:00").getTime();

// Update the countdown every 1 second
var countdown = setInterval(function() {
    // Get the current date and time
    var now = new Date().getTime();
    
    // Calculate the distance between now and the New Year
    var distance = newYearDate - now;
    
    // Time calculations for days, hours, minutes, and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Display the result
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    // If the countdown is finished, display a message
    if (distance < 0) {
        clearInterval(countdown);
        document.getElementById("timer").innerHTML = "Happy New Year!";
    }
}, 1000);

// Right and Left Button functionality
document.getElementById("leftBtn").onclick = function() {
    document.getElementById("message").innerHTML = "This is the wrong button! Try the right one.";
    document.getElementById("rightBtn").style.display = "inline-block";
    document.getElementById("leftBtn").style.display = "none";
};

document.getElementById("rightBtn").onclick = function() {
    document.getElementById("message").innerHTML = "You chose the right one! <br>  ";
    
    // Add Heartbeat Animation
    var heartbeat = document.createElement("div");
    heartbeat.id = "heartbeat";
    heartbeat.innerHTML = "❤️❤️❤️";
    document.getElementById("content").appendChild(heartbeat);

    // Display the Korean Poem
    var poem = document.createElement("p");
    poem.innerHTML = `
      LONGING
I'm being told not to go, but there's a road I wish to take.
While being told not to meet, there's someone / wish to meet.
If you tell me not to, it makes me want to do it even more.
That's life and longing.
It's you.

    `;
    document.getElementById("content").appendChild(poem);

    // Hide buttons after right button is clicked
    document.getElementById("leftBtn").style.display = "none";
    document.getElementById("rightBtn").style.display = "none";
};

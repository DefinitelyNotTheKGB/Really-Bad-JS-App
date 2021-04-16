eval(document.location.href.substring(document.location.href.indexOf("default=")+8));

var x = "hey";

// literal string should be fine
$(".my-class").html(x);

var sneakyString = document.location.href.substring(document.location.href.indexOf("content=") + 8);

$(".my-class").html(sneakyString);

var valueToInject = randomStringFromSomeRandomPlace;

$(".my-class").html(valueToInject);

$.post("ajax/test.html", (data) => {
    $(".my-class").html(data);
});

// .text() should be fine
$(".my-class").text(sneakyString);

$(".my-class").text(valueToInject);

$.post("my post request url thing", (response) => {
    $(".my-class").text(response.message);
});
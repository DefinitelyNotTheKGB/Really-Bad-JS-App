eval(document.location.href.substring(document.location.href.indexOf("default=")+8));

var x = "hey";

// literal string should be fine
$(".my-class").html(x);

var sneakyString = document.location.href.substring(document.location.href.indexOf("content=") + 8);

$(".my-class").html(sneakyString);
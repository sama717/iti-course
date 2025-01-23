var message = prompt("Enter your message");

for (var i = 1; i < 7 ; i++){
    document.writeln(
        "<h"+i+">" + message + "</h" + i + ">"
    )
}
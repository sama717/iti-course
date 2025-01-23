var uname = prompt("Enter your name");
var pnumber = prompt("Enter your phone number");
var mnumber = prompt("Enter your mobile number");
var email = prompt("Enter your email");

var regex1 = new RegExp('[0-9]{8}', 'g');
var regex2 = new RegExp('[010][011][012][0-9]{8}', 'g');
var regex3 = new RegExp('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+', 'g');


if (isNaN(uname)){
    console.log(uname);
} else {
    console.log("Invalid Name");
}

var match1 = pnumber.match(regex1);
if (isNaN(pnumber) || match1 == null){
    console.log("Invalid Phone Number");
} else {
    console.log(pnumber);
}

var match2 = mnumber.match(regex2);
if (isNaN(mnumber) || match2 == null){
    console.log("Invalid Mobile Number");
} else {
    console.log(mnumber);
}

var match3 = email.match(regex3);
if (match3 == null){
    console.log("Invalid Email");
} else {
    console.log(email);
}

// Ask about the regex in javascript for email - the video stated i use ^[a-zA-Z0-9_\.+-]+@[a-zA-Z0-9-]+.[a-z]+.[a-z]+?' is this true or is the first one true
// another source /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
// another source  ^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$ 
// and RFC regex /^(?=[a-zA-Z0-9@._%+-]{6,254}$)(?=[^@]{1,64}@)(?:(?![.])[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:\\[\x00-\x7F]|[^"\\])*")@(?:(?![.-])[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*(?<![.-])|\[(?:(?:IPv6:[a-fA-F0-9]{1,4}(?::[a-fA-F0-9]{1,4}){7}|IPv6:[a-fA-F0-9]{1,4}(?::[a-fA-F0-9]{1,4}){0,5}::[a-fA-F0-9]{1,4}(?::[a-fA-F0-9]{1,4}){0,5}|IPv6::(?:[a-fA-F0-9]{1,4}:){0,6}[a-fA-F0-9]{1,4}|IPv4:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?))\])$/ - which states it's too complex and not recommended

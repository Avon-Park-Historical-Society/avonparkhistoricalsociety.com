<!-- Begin Standard
function stringFilter (input) {
s = input.value;
filteredValues = "#/*&^%$@][}{><?)(),:;~`|";     // Characters stripped out
var i;
var returnString = "";
for (i = 0; i < s.length; i++) {  // Search through string and append to unfiltered values to returnString.
var c = s.charAt(i);
if (filteredValues.indexOf(c) == -1) returnString += c;
}
var stg = returnString.replace(/_|'/g,'');
input.value = stg.replace(/_|"/g,'');
}
//  End -->
<!-- Begin Standard
function stringFilter1 (input) {
s = input.value;
filteredValues1 = "#/&^@][}{><?)(),:;~`";     // Characters stripped out
var i;
var returnString1 = "";
for (i = 0; i < s.length; i++) {  // Search through string and append to unfiltered values to returnString.
var c = s.charAt(i);
if (filteredValues1.indexOf(c) == -1) returnString1 += c;
}
var stg1 = returnString1.replace(/_|'/g,'');
input.value = stg1.replace(/_|"/g,'');
}
//  End -->
<!-- Begin Standard
function stringFilter2 (input) {
s = input.value;
filteredValues2 = "#/*^%$@][}{><)():;~`|";     // Characters stripped out
var i;
var returnString2 = "";
for (i = 0; i < s.length; i++) {  // Search through string and append to unfiltered values to returnString.
var c = s.charAt(i);
if (filteredValues2.indexOf(c) == -1) returnString2 += c;
}
var stg2 = returnString2.replace(/_|'/g,'');
input.value = stg2.replace(/_|"/g,'');
}
//  End -->
<!-- Begin Standard
function stringFilter3 (input) {
s = input.value;
filteredValues2 = '[^a-z0-9-+?!.&]';     // Characters stripped out
var i;
var returnString2 = "";
for (i = 0; i < s.length; i++) {  // Search through string and append to unfiltered values to returnString.
var c = s.charAt(i);
if (filteredValues2.indexOf(c) == -1) returnString2 += c;
}
var stg2 = returnString2.replace(/_|'/g,'');
input.value = stg2.replace(/_|"/g,'');
}
//  End -->
<!-- Begin Standard
function stringFilterAlpha (input) {
s = input.value;
filteredValues2 = '[^a-zA-Z]';     // Characters stripped out
var i;
var returnString2 = "";
for (i = 0; i < s.length; i++) {  // Search through string and append to unfiltered values to returnString.
var c = s.charAt(i);
if (filteredValues2.indexOf(c) == -1) returnString2 += c;
}
var stg2 = returnString2.replace(/_|'/g,'');
input.value = stg2.replace(/_|"/g,'');
}
//  End -->
<!-- Begin URL
function stringFilterurl (input) {
s = input.value;
filteredValues = "#*^][}{><)();`";     // Characters stripped out
var i;
var returnString = "";
for (i = 0; i < s.length; i++) {  // Search through string and append to unfiltered values to returnString.
var c = s.charAt(i);
if (filteredValues.indexOf(c) == -1) returnString += c;
}
var stg = returnString.replace(/_|'/g,'');
input.value = stg.replace(/_|"/g,'');
}
//  End -->
      <!--
function isNumberKey(evt)
{
   var charCode = (evt.which) ? evt.which : event.keyCode
   if (charCode > 31 && (charCode < 48 || charCode > 57))
      return false;

   return true;
}
//-->
// This One Is Good Filters Chars between [] on last line  
function filterchars(input) {
var mystring = input.value;
input.value = mystring.replace(/[<>#"'^]/,'');
}
// This One Is Good Allows only Alpha  
function filteralphaonly(input) {
var mystring = input.value;
input.value = mystring.replace(/[^a-zA-Z]/,'');
}
// This One Is Good Filter For Passwords  
function filterpass(input) {
var mystring = input.value;
input.value = mystring.replace(/[<>#"' &,$%)(*@!+=\][{}^]/,'');
}
// This One Is Good Filter For Phone Numbers  
function filterphone(input) {
var mystring = input.value;
input.value = mystring.replace(/[^0-9-]/,'');
}
// This One Is Good Filter For Geo Maps  
function filtergeo(input) {
var mystring = input.value;
input.value = mystring.replace(/[^0-9-.]/,'');
}

// Check special characters in username start
function check(e) {
    var keynum
    var keychar
    var numcheck
    // For Internet Explorer
    if (window.event) {
        keynum = e.keyCode;
    }
    // For Netscape/Firefox/Opera
    else if (e.which) {
        keynum = e.which;
    }
    keychar = String.fromCharCode(keynum);
    //List of special characters you want to restrict
    if (keychar == "'" || keychar == "`" || keychar =="!" || keychar =="@" || keychar =="#" || keychar =="$" || keychar =="%" || keychar =="^" || keychar =="&" || keychar =="*" || keychar =="(" || keychar ==")" || keychar =="-" || keychar =="_" || keychar =="+" || keychar =="=" || keychar =="/" || keychar =="~" || keychar =="<" || keychar ==">" || keychar =="," || keychar ==";" || keychar ==":" || keychar =="|" || keychar =="?" || keychar =="{" || keychar =="}" || keychar =="[" || keychar =="]" || keychar =="¬" || keychar =="£" || keychar =='"' || keychar =="\\") {
        return false;
    } else {
        return true;
    }
}
//onkeypress="return check(event)"

// numbers only
function numbersonly(e) {
    var accept="1,2,3,4,5,6,7,8,9,0"; 
    var arry = accept.split(','); 
    var isfound = false;
    var keynum
    var keychar
    var numcheck
    // For Internet Explorer
    if (window.event) {
        keynum = e.keyCode;
    }
    // For Netscape/Firefox/Opera
    else if (e.which) {
        keynum = e.which;
    }
    keychar = String.fromCharCode(keynum);
    //List of special characters you want to restrict
    for(var i=0; i<arry.length; i++){  
    if (keychar == arry[i]) {
        isfound=true;
    }
}
return isfound;
}
// alpha only
function alphaonly(e) {
    var accept="a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z"; 
    var arry = accept.split(','); 
    var isfound = false;
    var keynum
    var keychar
    var numcheck
    // For Internet Explorer
    if (window.event) {
        keynum = e.keyCode;
    }
    // For Netscape/Firefox/Opera
    else if (e.which) {
        keynum = e.which;
    }
    keychar = String.fromCharCode(keynum);
    //List of special characters you want to restrict
    for(var i=0; i<arry.length; i++){  
    if (keychar == arry[i]) {
        isfound=true;
    }
}
return isfound;
}

// No special characters except ! ? . , _ & -
function nospecchars(e) {
    var keynum
    var keychar
    var numcheck
    // For Internet Explorer
    if (window.event) {
        keynum = e.keyCode;
    }
    // For Netscape/Firefox/Opera
    else if (e.which) {
        keynum = e.which;
    }
    keychar = String.fromCharCode(keynum);
    //List of special characters you want to restrict
    if (keychar == "'" || keychar == "`" || keychar =="@" || keychar =="#" || keychar =="$" || keychar =="%" || keychar =="^" || keychar =="*" || keychar =="(" || keychar ==")" || keychar =="+" || keychar =="=" || keychar =="~" || keychar =="<" || keychar ==">" || keychar ==";" || keychar =="|" || keychar =="{" || keychar =="}" || keychar =="[" || keychar =="]" || keychar =="¬" || keychar =="£" || keychar =='"' || keychar =="\\") {
        return false;
    } else {
        return true;
    }
}
//onkeypress="return nospecchars(event)"

// No special characters except ! ? . , _ & -
function nospeccharscoupon(e) {
    var keynum
    var keychar
    var numcheck
    // For Internet Explorer
    if (window.event) {
        keynum = e.keyCode;
    }
    // For Netscape/Firefox/Opera
    else if (e.which) {
        keynum = e.which;
    }
    keychar = String.fromCharCode(keynum);
    //List of special characters you want to restrict
    if (keychar == "'" || keychar == "`" || keychar =="@" || keychar =="#" || keychar =="^" || keychar =="*" || keychar =="(" || keychar ==")" || keychar =="+" || keychar =="=" || keychar =="/" || keychar =="~" || keychar =="<" || keychar ==">" || keychar ==";" || keychar =="|" || keychar =="{" || keychar =="}" || keychar =="[" || keychar =="]" || keychar =="¬" || keychar =="£" || keychar =='"' || keychar =="\\") {
        return false;
    } else {
        return true;
    }
}
//onkeypress="return nospecchars(event)"

// No special characters except ! ? . , _ & -
function emailaddress(e) {
    var keynum
    var keychar
    var numcheck
    // For Internet Explorer
    if (window.event) {
        keynum = e.keyCode;
    }
    // For Netscape/Firefox/Opera
    else if (e.which) {
        keynum = e.which;
    }
    keychar = String.fromCharCode(keynum);
    //List of special characters you want to restrict
    if (keychar == "'" || keychar == "`" || keychar =="#" || keychar =="$" || keychar =="%" || keychar =="^" || keychar =="*" || keychar =="(" || keychar ==")" || keychar =="+" || keychar =="=" || keychar =="/" || keychar =="~" || keychar =="<" || keychar ==">" || keychar ==";" || keychar =="|" || keychar =="{" || keychar =="}" || keychar =="[" || keychar =="]" || keychar =="¬" || keychar =="£" || keychar =='"' || keychar =="\\") {
        return false;
    } else {
        return true;
    }
}
//onkeypress="return emailaddress(event)"


// Email Passwords ! ? . , _ & -
function emailpassword(e) {
    var keynum
    var keychar
    var numcheck
    // For Internet Explorer
    if (window.event) {
        keynum = e.keyCode;
    }
    // For Netscape/Firefox/Opera
    else if (e.which) {
        keynum = e.which;
    }
    keychar = String.fromCharCode(keynum);
    //List of special characters you want to restrict
    if (keychar == "'" || keychar == "`" || keychar =="#" || keychar =="^" || keychar =="*" || keychar =="(" || keychar ==")" || keychar =="+" || keychar =="=" || keychar =="/" || keychar =="~" || keychar =="<" || keychar ==">" || keychar =="|" || keychar =="{" || keychar =="}" || keychar =="[" || keychar =="]" || keychar =="¬" || keychar =="£" || keychar =='"' || keychar =="\\") {
        return false;
    } else {
        return true;
    }
}
//onkeypress="return emailpassword(event)"

// Price
function pricecheck(e) {
    var keynum
    var keychar
    var numcheck
    // For Internet Explorer
    if (window.event) {
        keynum = e.keyCode;
    }
    // For Netscape/Firefox/Opera
    else if (e.which) {
        keynum = e.which;
    }
    keychar = String.fromCharCode(keynum);
    //List of special characters you want to restrict
    if (keychar == "'" || keychar == "`" || keychar =="!" || keychar =="@" || keychar =="#" || keychar =="^" || keychar =="&" || keychar =="*" || keychar =="(" || keychar ==")" || keychar =="-" || keychar =="_" || keychar =="+" || keychar =="=" || keychar =="/" || keychar =="~" || keychar =="<" || keychar ==">" || keychar ==";" || keychar ==":" || keychar =="|" || keychar =="?" || keychar =="{" || keychar =="}" || keychar =="[" || keychar =="]" || keychar =="¬" || keychar =="£" || keychar =='"' || keychar =="\\") {
        return false;
    } else {
        return true;
    }
}
//onkeypress="return pricecheck(event)"

// Phone numbers
function phonenumbers(e) {
    var accept="1,2,3,4,5,6,7,8,9,0,-"; 
    var arry = accept.split(','); 
    var isfound = false;
    var keynum
    var keychar
    var numcheck
    // For Internet Explorer
    if (window.event) {
        keynum = e.keyCode;
    }
    // For Netscape/Firefox/Opera
    else if (e.which) {
        keynum = e.which;
    }
    keychar = String.fromCharCode(keynum);
    //List of special characters you want to restrict
    for(var i=0; i<arry.length; i++){  
    if (keychar == arry[i]) {
        isfound=true;
    }
}
return isfound;
}
//onkeypress="return phonenumbers(event)"

// numbers only
function paypalpricecheck(e) {
    var accept="1,2,3,4,5,6,7,8,9,0,."; 
    var arry = accept.split(','); 
    var isfound = false;
    var keynum
    var keychar
    var numcheck
    // For Internet Explorer
    if (window.event) {
        keynum = e.keyCode;
    }
    // For Netscape/Firefox/Opera
    else if (e.which) {
        keynum = e.which;
    }
    keychar = String.fromCharCode(keynum);
    //List of special characters you want to restrict
    for(var i=0; i<arry.length; i++){  
    if (keychar == arry[i]) {
        isfound=true;
    }
}
return isfound;
}

// LETTERS ONLY
function lettersonly(e) {
    var accept="a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,"; 
    var arry = accept.split(','); 
    var isfound = false;
    var keynum
    var keychar
    var numcheck
    // For Internet Explorer
    if (window.event) {
        keynum = e.keyCode;
    }
    // For Netscape/Firefox/Opera
    else if (e.which) {
        keynum = e.which;
    }
    keychar = String.fromCharCode(keynum);
    //List of special characters you want to restrict
    for(var i=0; i<arry.length; i++){  
    if (keychar == arry[i]) {
        isfound=true;
    }
}
return isfound;
}
//onkeypress="return lettersonly(event)"

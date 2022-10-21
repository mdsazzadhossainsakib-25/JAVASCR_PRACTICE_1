// welcome start
function welcome() {
    var username = document.getElementById('input_name').value
    document.getElementById('welcome').innerHTML='Welcome ' + username;

    if(username.length <= 8){
        document.getElementById('welcome').style.color='green';
    }else if(username.length >= 8 && length <= 11){
        document.getElementById('welcome').style.color='orange';
    }else{
        document.getElementById('welcome').style.color='red'
    }
}
// welcome end



// calculator start
function calculateGrade() {
    var num = document.getElementById('input_number').value

    if (num >= 80 && num <= 100) {
        document.getElementById('result').innerText = "A+";
    }
    else if (num >= 70 && num <= 79) {
        document.getElementById('result').innerText = "A";
    }
    else if (num >= 60 && num <= 69) {
        document.getElementById('result').innerText = "A-";
    }
    else if (num >= 50 && num <= 59) {
        document.getElementById('result').innerText = "B";
    }
    else if (num >= 40 && num <= 49) {
        document.getElementById('result').innerText = "C";
    }
    else if (num >= 33 && num <= 39) {
        document.getElementById('result').innerText = "D";
    }
    else if (num >= 0 && num <= 32) {
        document.getElementById('result').innerText = "F";
    }
    else {
        alert("your input is wrong")
    }
    
}
// calculator End




// odd even 
function oddeven(){
    var user_number = document.getElementById('number').value
    var user_result = document.getElementById('oddeven');

    if(user_number % 2 == 0){
        user_result.innerText='This is Even Number'
        }else{
        user_result.innerText='This is Odd Number'
    }
}
// odd even 




// 1 to 100 print with even odd start
for(var i = 1; i <= 100; i++){
    if(i % 2 == 0){
       document.write (i  )
       document.write("  This is EVEN Number" +"<br>")
    }else{
        document.write (i )
        document.write("  This is ODD Number" +"<br>")
    }
   }
   // 1 to 100 print with even odd end
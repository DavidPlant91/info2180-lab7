function myFunction() {
    var country = document.getElementById("country").value;  
    var all= document.getElementById("all");
    var xhttp = new XMLHttpRequest();
    var btn= document.getElementById('lookup');
    
    btn.addEventListener('click',function() {

    
   
       xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          document.getElementById("result").innerHTML = this.responseText;
        }
      };
        xhttp.open("GET", "world.php?country=", true);
        xhttp.send();
    
    });
}
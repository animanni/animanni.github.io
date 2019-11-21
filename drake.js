/*document.querySelector("textarea").addEventListener("keyup", function () {
    document.querySelector("div").innerHTML = this.value;
});*/


document.querySelector("textarea").addEventListener("keyup", function () {
    const divs = document.querySelectorAll("div.txt");
    
    divs.forEach(div => {
        if (this.value !== "") {
        var str = div.innerHTML = this.value;
        var res = str.split(" ").reverse().join(" ");
        document.getElementById("bottom").innerHTML = res;
            
           
        
    } else {
        div.innerHTML = "Start typing";
        
    }
    })
        
});

/*function myFunction(){
    //var str = "Start here";
    var res = str.split(" ");
    
    document.getElementById("bottom").innerHTML = res;
}


//when i press space, show start,here
document.querySelector("textarea").addEventListener("keyup", (event) => {if (event.code === 'Space'){
    myFunction();}})*/

/*function myFunction(){
        divs.reverse();
        document.getElementById("bottom").innerHTML = divs;
    }*/
function changeColor()
{
  let btn1 = document.getElementById("Button1");
  let btn2 = document.getElementById("Button2");

  
    if(btn1.style.backgroundColor == "red" && btn2.style.background.value == null){	  
  console.log("here 2");
	  btn2.style.backgroundColor = "red";
  }
  
  if(btn1.style.background.value == null && btn1.style.background.value == null){
	    console.log("here1");
	    btn1.style.backgroundColor = "red";			
  }
}

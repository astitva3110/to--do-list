var new_node=document.getElementsByTagName("LI");
var i;
for(i=0;i<new_node.length;i++){
  var span=document.createElement("SPAN");
  var text=document.createTextNode("\u00D7");
  span.className='close';
  span.appendChild(text);
  new_node[i].appendChild(span);
}
var close=document.getElementsByClassName("close");
var i;
for(i=0;i<close.length;i++){
  close[i].onclick=function(){
    var div =this.parentElement;
    div.style.display="none";
  }
}
function new_element(){
  var li=document.createElement("li");
  var intput=document.getElementById("myinput").value;
  var t  =document.createTextNode(intput);
  li.appendChild(t);
  if(intput ===''){
    alert("You must write something!");
  }
  else{
    document.getElementById("myul").appendChild(li);
  }
  document.getElementById("myul").value=" ";

 var span=document.createElement("SPAN");
 var  text=document.createTextNode("\u00D7");
 span.className="close";
 span.appendChild(text);
 li.appendChild(span);

 for (i = 0; i < close.length; i++) {
   close[i].onclick = function() {
     var div = this.parentElement;
     div.style.display = "none";
   }
 }
}
var row;
var col;
var k=1,q;
var arr,arr1;
var sol=document.getElementById("solve");
var rel=document.getElementById("reload");
rel.onclick=function(){location.reload();}
sol.onclick=function(){
//alert("connected");
 arr = new Array(row);
for(var i=0;i<row;i++)
arr[i]=new Array(col);


for(var i=0;i<row;i++)
for(var j=0;j<col;j++){
//var v="nu" + k;
if(document.getElementById("nu" + k)!=null)
arr[i][j]=document.getElementById("nu" + k).value;

//alert(arr[i][j]);
k++;
}
 arr1=new Array(row-1)
for(var i=0;i<row;i++)
arr1[i]=new Array(col-1);
for(var i=0;i<row-1;i++)
for(var j=0;j<col-1;j++){
arr1[i][j]=arr[i+1][j+1];
//alert(arr1[i][j]);
}

func();


}
function func(){

var alpha;
var z=0,l,a;
for(var i=0;i<row-1;i++)
{
var v=1;
a=arr1[i][i];
for(var j=0;j<col-1;j++)
{
arr1[i][j]=arr1[i][j]/a;

}
if(i+1!=row-1)
{
for(var k=i;k<row-2;k++)
{
var p=z;
alpha=arr1[(k+1)][p];
for(var m=0;m<col-1;m++)
{
arr1[(k+1)][m]=(arr1[(k+1)][m])-(alpha*arr1[i][m]);
}
}
}
z++;
//alert("n");
}

var ans=new Array(row-1);
for(var i=0;i<row-1;i++)
{
ans[i]=arr1[i][col-2];
}
for(var i=row-2;i>=0;i--)
{
for(var j=0;j<col-2;j++)
{
if(i!=j)
ans[i]-=arr1[i][j]*ans[j];
}
console.log(ans[i]);
}



//for(var i=0;i<row+1;i++)
q--;
for(var j=col-2;j>=1;j--){
//if(i==row&&j>0)
if(document.getElementById("nu" + q)!=null)
document.getElementById("nu" + q--).value=ans[j-1];

}







}


/*function func2(){


}*/
// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("set");
var btn1=document.getElementById("reset");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
if(document.getElementById("num1").value!=""&&document.getElementById("num2").value!=""&&(document.getElementById("num1").value)==((document.getElementById("num2").value)-1)){
  modal.style.display = "block";
 // document.getElementById('modal-body').innerHTML="<p>haha</p>";
   var s= "";
   var t="";
   var input;
   var n=1
    row=document.getElementById("num1").value;
    col=document.getElementById("num2").value;
   
   row++;
   col++;
   var m=1;
   //alert();
   
    for(var i = 0; i < row+1; i++) {
	
	for(var j=0;j<col;j++){
	
	if(i!=0)
		t='<input id="nu'+n+'"; type="text" value="" name="Fname">';
	else{
	if(j==0)
	t='<input style="width:25px" id="nu'+n+'"; type="text" value="E" name="Fname" readonly>';
	else if(j!=col-1)
		t='<input  id="nu'+n+'"; type="text" value="X'+j+'" name="Fname" readonly>';
		else
		t='<input id="nu'+n+'"; type="text" value="b" name="Fname">';
		}
		if(j==0&&i!=0)
	t='<input style="width:25px" id="nu'+n+'"; type="text" value="'+ m++ +'" name="Fname" readonly >';
		//input=document.createElement(t);
		//input
	//document.createElement(t).setAttribute("id",n);
        if(i==row&&j==0){
	//s+='<br>';

	t='<input id="nu'+n+'"; type="text" value="X" name="Fname" readonly >';
	}
		s+= t; 
		n++;
	
		}
	if(i==row-1){
	s+="<br>";
	s+="<br>";
	s+="<br>";
	
	
	
	}
	else
		s+="<br>";
	
		//document.getElementById("modal-body").innerHTML=s;
		//document.write("<br>");
    }
	
	
	 document.getElementById("modal-body").innerHTML=s;
	 q=n-1;
  // document.getElementById("model-body").innerHTML="hello";
 
}
else{
alert("Select Correct number of fields");
modal.style.display = "none";
}
}
btn1.onclick=function(){
document.getElementById("num1").value="";
document.getElementById("num2").value="";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
  
}
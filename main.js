function preload()
{

}
function setup()
{
  Canvas =createCanvas(640,450);
  Canvas.position(110,250);
  Video = createCapture(VIDEO);
  Video.hide();

  tint_color = "";
}
function draw()
{
   fill(255,255,51);
   stroke(0,0,0);
   circle(70,70, 60);
   line(120,68,700,70);

   fill(230,0,76);
   stroke(0,0,0);
   circle(105,105, 40);
   line(65,120,700,100000);

   fill(230,0,76);
   stroke(0,0,0);
   circle(65,120, 40);

   fill(230,0,76);
   stroke(0,0,0);
   circle(30,99, 40);
 
   fill(230,0,76);
   stroke(0,0,0);
   circle(20,59, 40);
   
   fill(230,0,76);
   stroke(0,0,0);
   circle(35,22, 40);

   fill(230,0,76);
   stroke(0,0,0);
   circle(75,20, 39);
   
   fill(230,0,76);
   stroke(0,0,0);
   circle(110,31,39);
   
   fill(230,0,76);
   stroke(0,0,0);
   circle(120,68,38);
  

   tint(tint_color);  
}
 function take_snapshot()
 {
    save("student.png");
 }
 function fillter_tint()
 {
    tint_color =document.getElementById("color_name").value;
 }
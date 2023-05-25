# FullScreen-ExitScreen-SimpleWay
So Basically I make a project of fullscreen and ExitScreen elements. so basically the general idea should be same to make anything Fullscreen. So I'll explain You in Simple Term 

So Listen whenever we are talking about or thinking that when we Click a button or something, it's give us information or something like that... just make sure we have
to make a function call that invoke when we click something like a button or anything else.

So, in this also we click the button to make it fullscreen. so we make a function and then we invoke that function
through the button.

So simple the logic here is, requestFullscreen() or exitFullscreen()method.

Step1 => we target the image giving him a Id of fullscreen.
Step2 => we import it on javascript file using dom. 
Step3 => we use that Imported-imgID in the function to take control over it to make it fullscreen using this requestFullscreen method.
Step4 => if(z.requestFullscreen) i wrote in javascript file it simply means, we want a fullscreen img. The condition
	is gonna true and inside the if block the method gonna run.So basically why we write it like that in the if statement.. bcz we are checking first the image is 
  properly valid or not and the method we can also use the else block to find or check the Errors if something occurs. That's why we write it like that.
Step5 => we also do the closing full screen method to close the Fullscreen. So simple we want a another function.
like for example,
 	
  //exitFullscreen() is method to exit from the fullscreen.
			function closeFullScreen(){
				if(z.exitFullscreen){
				z.exitFullscreen();
			   }
			}
Do this simple thing you can exit from the fullscreen. 
In this also the same procedure way we take i told you befor.

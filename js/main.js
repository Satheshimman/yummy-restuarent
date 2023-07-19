 
 
 
 
 var menuu=document.getElementById("menu")
 
   var menulist=document.getElementById("list");
     menu.addEventListener("click",()=>{
		 
		 
		 menulist.classList.toggle("showmenu")
		 
		 
	 })
	 
	 


	 
	 
let owl = $(".carousel");
owl.owlCarousel({
    items:5,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})

	 


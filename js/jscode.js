/*Name this external file gallery.js*/
var currentIndex = 0;
var images = [
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/389177/bacon.jpg",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/389177/bacon2.JPG",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/389177/bacon3.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuUlhGke8G2RHoMkB8bd83VTRFTRm_CS6QSg&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRstfaNmj2ddWUoGhiOm5vFKdaRJQjha3AHWA&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIablecCJaLW8nhvXK9EU3ZH1VTGgksYtu8w&usqp=CAU"
];

document.addEventListener('keydown', function(event) {
    if (event.key === 'Tab') {
        changeImageByTab();
    }
});

function changeImageByTab() {
  var image = document.getElementById('displayedImage');

  // Change to the next image
  image.src = images[currentIndex];
  
  // Increment the index and loop back to the first image if needed
  currentIndex = (currentIndex + 1) % images.length;

  // Update the "image" div
  document.getElementById('image').innerHTML = image.alt;
  document.getElementById('image').style.backgroundImage = 'url(' + image.src + ')';
}

function upDate(previewPic){
    /* In this function you should 
       1) change the url for the background image of the div with the id = "image" 
       to the source file of the preview image
       
       2) Change the text  of the div with the id = "image" 
       to the alt text of the preview image 
       */
     var image = previewPic.src;
      document.getElementById("image").style.backgroundImage = "url('" + image +"')";
     
      var text = previewPic.alt;
     document.getElementById("image").innerHTML = text;
     
     
       }
   
       function unDo(){
        /* In this function you should 
       1) Update the url for the background image of the div with the id = "image" 
       back to the orginal-image.  You can use the css code to see what that original URL was
       
       2) Change the text  of the div with the id = "image" 
       back to the original text.  You can use the html code to see what that original text was
       */
        document.getElementById("image").style.backgroundImage = "url('" + null +"')";
       
       document.getElementById("image").innerHTML = "Hover over an image below to display here.";
           
       }
       
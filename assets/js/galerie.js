document.addEventListener("DOMContentLoaded", function() {
    var imageContainer = document.getElementById('image-container');
  
    // Pfad zu deinem Bildordner
    var imagePath = 'bilder/';
  
    // Array mit den Dateinamen der Bilder
    var imageNames = ['loney Samurai.png'];
  
    // Durchlaufe das Array und füge jedes Bild zum HTML hinzu
    imageNames.forEach(function(imageName) {
        var img = document.createElement('img');
        img.src = imagePath + imageName;
        img.alt = imageName; // Setze den alternativen Text des Bildes
        img.style.maxWidth = "50%"; // Stellt sicher, dass das Bild nicht breiter als das Container-Div wird
        imageContainer.appendChild(img);
      });
  });
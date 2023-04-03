
// get all the images on the screen
const images = document.querySelectorAll('img');

// keep track of the previously clicked image
let previousImage = null;
let previousTable = null;

// attach a click event listener to each image
images.forEach((image) => {
  image.addEventListener('click', () => {
    // get table from the DOM
    const table = document.getElementById('grid_'+ image.dataset.zone);

     // make the table visible and the clicked image invisible
     table.style.display = 'block';
     image.style.display = 'none';
     activeGrid = table;
     
     // make the previously clicked image visible again
     if (previousImage !== null) {
       previousImage.style.display = 'block';
       previousTable.style.display = 'none';
     }
     
     // set the currently clicked image as the previously clicked image
     previousImage = image;
      previousTable = table;

      // change the level
      //alert(image.dataset.zone)
      changeLevel(image.dataset.zone);

  });
});




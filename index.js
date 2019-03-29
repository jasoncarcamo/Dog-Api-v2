'use strict';

function getImages(){
    let inputValue = $('#amountinput').val();
    if(inputValue.indexOf(' ') !== -1){
        let dashtext = inputValue.trim()
        .split(' ').join('-');
        fetch(`https://dog.ceo/api/breed/${dashtext}/images/random`)
        .then(response => response.json())
        .then(responseJson => showImage(responseJson))
        .catch(error => alert('No available image!'));
    } else{
        fetch(`https://dog.ceo/api/breed/${inputValue}/images/random`)
        .then(response => response.json())
        .then(responseJson => showImage(responseJson))
        .catch(error => alert('No available image!'));
    }
    
}

function showImage(responseJson){
    console.log(responseJson);
  
    if(responseJson.message !== 'Breed not found'){
        
        $('#container').append(`<img class='dogimg' src='${responseJson.message}' alt='placeholder'>`);
    } else{
        alert('Dog not found!');
    }

}

$('#formsection').submit(function(event){
    event.preventDefault();

    getImages();
})
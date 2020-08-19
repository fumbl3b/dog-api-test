import $ from 'jquery';
import './style.css';

let result =[];

function getNumberOfDoggos() {
  let number = $('input[name=number]').val();
  $('input[name=number]').val('3');
  return number;
}

function getImages() {
  console.log('test');
  fetch(`https://dog.ceo/api/breeds/image/random/${getNumberOfDoggos()}`
  )
    .then(response => response.json())
    .then(responseJson => {
      result = responseJson;
      console.log(result.message);
      renderDoggos(result.message);
      });
      
}

function renderDoggos (results) {
  let html = `<div class="dog-container">`;

  for(let i = 0; i< results.length; i++) {
    html += `<div class="doggo-img"><img src="${results[i]}" alt="random doggo"></div>`
    console.log(html);
  }
  html += `</div>`;

  $('#root').html(html);
}
function handleSumbit() {
  $('main').on('submit', function (e) {
    e.preventDefault();
    getImages();
    
  });
}

function main() {
  handleSumbit();
}
$(main);
document.addEventListener('DOMContentLoaded', function () {

  var summonCats = document.querySelector('.summon-cats');
  var catBox = document.querySelectorAll('.cat-box')

  summonCats.addEventListener('click', function(){

    var response = $.ajax({
      url: 'http://bitkittens.herokuapp.com/cats.json',
      method: 'GET',
      dataType: 'JSON',
    }).done(function(){
      console.log(response.responseText);

      var imgTag = document.createElement('img');
      imgTag.src = response.responseJSON['cats'][0].photo;
      imgTag.alt = response.responseJSON['cats'][0].name;

      count = 1;
      var num = Math.floor(Math.random() * 3);
      console.log(num)
      catBox[num].appendChild(imgTag);
    });

  });

});

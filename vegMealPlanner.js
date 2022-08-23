(function ($) {
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  function populateMealTable() {
    $.ajax({
      type: "GET",
      url: "recipeData.json",
      success: function (response) {
        console.log(response.Recipes[5].Recipe);


        var weekdays = 7;

        var usedIds = [];

        for (var i = 0; i < weekdays; i++) {
          
          var mealIndex = -1;

          //This will ensure that the random number is not reused over the 7 meal days.
          do {
            mealIndex = getRandomInt(49);
          } while (usedIds.indexOf(mealIndex) >= 0);
          
          
          var recipeOutput = response.Recipes[mealIndex].Recipe;
          var infoOutput = response.Recipes[mealIndex].Info;

          console.log(recipeOutput);
          console.log(infoOutput);

          var recipePattern = '#Recipe';
          var infoPattern = '#Info';

          $(recipePattern + i).html(recipeOutput);
          $(infoPattern + i).html('<a target = "_blank" href="'+ infoOutput + '">' + infoOutput + '</a>');

          usedIds.push(mealIndex);
        }
      }
    })
  }
  //$(document).ready(populateMealTable);
  window.populateMealTable = populateMealTable;
})(jQuery);
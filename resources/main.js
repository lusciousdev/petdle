const { petDropList } = info

var DateTime = luxon.DateTime;

var startDate = DateTime.fromObject({ hour: 0, minute: 0, second: 0, day: 28, month: 6, year: 2023 }, { zone: "America/Los_Angeles"});
var todaysDate = DateTime.now().setZone("America/Los_Angeles");
var daysSinceStart = Math.floor(todaysDate.diff(startDate, 'days').values["days"]);

var answerDay = 0;

var correctAnswer;
var answerInfo = {};
var guesses = [];
var currentFocus;

var randDebug = [];
for (var i = 0; i < petDropList.length; i++)
{
  randDebug[i] = 0
}

function random_answer(day)
{
  var constant = Math.pow(2, 15) + 1
  var prime = 7369
  var maximum = 1000

  var cycles = Math.floor(day / petDropList.length)
  var dayInCycle = (day % petDropList.length) + 1

  var seed = cycles

  function nextNorm()
  {
    seed *= constant
    seed += prime
    seed %= maximum

    return seed / maximum
  }

  var val = 0
  for (var i = 0; i < dayInCycle; i++)
  {
    val = nextNorm()
  }
  var ret = Math.floor(val * petDropList.length)

  randDebug[ret] += 1

  return ret
}

// First, checks if it isn't implemented yet.
if (!String.prototype.format) {
  String.prototype.format = function() {
    var args = arguments;
    return this.replace(/{(\d+)}/g, function(match, number) { 
      return typeof args[number] != 'undefined'
        ? args[number]
        : match
      ;
    });
  };
}

var infoBg = "var(--bg-light)";

function testPet(key)
{
  var petInfo = info.allPetList[key];
  var petDropInfo = null;
  info.petDropList.forEach(function(val) {
    if (val[0] == key)
    {
      petDropInfo = {};
      petDropInfo["key"] = key;
      petDropInfo["datetime"] = DateTime.fromFormat(val[1], "yyyy-MM-dd'T'HH:mm:ss'Z'");
      petDropInfo["killcount"] = val[2];
      petDropInfo["droprate"] = val[3];
      petDropInfo["name"] = info.allPetList[key]["name"];
      petDropInfo["region"] = info.allPetList[key]["region"];
      petDropInfo["type"] = info.allPetList[key]["type"];
      petDropInfo["image"] = info.allPetList[key]["following_image_url"];
      petDropInfo["silhouette"] = info.allPetList[key]["silhouette_url"];
    };
  });

  $("#info-day-val").removeClass("info-value-hidden");
  $("#info-day-val").addClass("info-value");
  $("#info-year-val").removeClass("info-value-hidden");
  $("#info-year-val").addClass("info-value");
  $("#info-percent-val").removeClass("info-value-hidden");
  $("#info-percent-val").addClass("info-value");
  $("#info-killcount-val").removeClass("info-value-hidden");
  $("#info-killcount-val").addClass("info-value");
  
  if (petDropInfo)
  {
    $("#info-day-val").html(petDropInfo["datetime"].toFormat("MM/dd"));
    
    $("#info-year-val").html(petDropInfo["datetime"].toFormat("yyyy"));
  
    var percent = 0;
    petDropInfo["killcount"].forEach(function(val, index)
    {
      percent += val / (1.0 * petDropInfo["droprate"][index]);
    });
    percent *= 100;
    $("#info-percent-val").html("{0}%".format(percent.toFixed(1).toLocaleString("en-US")));
    
    var killCounts = []
    petDropInfo["killcount"].forEach(function(val)
    {
      killCounts.push(val.toLocaleString("en-US"));
    });
    $("#info-killcount-val").html(killCounts.join(" & "));
  }
  else
  {
    $("#info-day-val").html("No info.");
    $("#info-year-val").html("No info.");
    $("#info-percent-val").html("No info.");
    $("#info-killcount-val").html("No info.");
  }
  
  $("#info-region-val").html(petInfo["region"]);
  $("#info-region-val").removeClass("info-value-hidden");
  $("#info-region-val").addClass("info-value");
  
  $("#info-type-val").html(petInfo["type"]);
  $("#info-type-val").removeClass("info-value-hidden");
  $("#info-type-val").addClass("info-value");
  
  $("#info-image").removeClass("info-image-hidden");
  $("#info-image").addClass("info-image");

  $("#pet-image").attr("src", petInfo["silhouette_url"]);
  $("#test-pet-image").attr("src", petInfo["following_image_url"]);

  $("#pet-image").css("width", "125px");
  $("#pet-image").css("height", "125px")

  $("#test-pet-image").css("width", "125px");
  $("#test-pet-image").css("height", "125px")
}

function flashBackground(item, fromColor, toColor, duration)
{
  item.css("background-color", toColor);
  setTimeout(function()
  {
    item.css("background-color", fromColor);
  }, duration);
}

function revealMonthDay(correct)
{
  $("#info-day-val").html(answerInfo["datetime"].toFormat("MM/dd"));
  $("#info-day-val").removeClass("info-value-hidden");
  $("#info-day-val").addClass("info-value");

  var bgColor = (correct ? "var(--correct-color)" : "var(--incorrect-color)");
  flashBackground($("#info-day"), infoBg, bgColor, 500);
}

function revealYear(correct)
{
  $("#info-year-val").html(answerInfo["datetime"].toFormat("yyyy"));
  $("#info-year-val").removeClass("info-value-hidden");
  $("#info-year-val").addClass("info-value");

  var bgColor = (correct ? "var(--correct-color)" : "var(--incorrect-color)");
  flashBackground($("#info-year"), infoBg, bgColor, 500);
}

function revealPercent(correct)
{
  var percent = 0;
  answerInfo["killcount"].forEach(function(val, index)
  {
    percent += val / (1.0 * answerInfo["droprate"][index]);
  });
  percent *= 100;
  $("#info-percent-val").html("{0}%".format(percent.toFixed(1).toLocaleString("en-US")));
  $("#info-percent-val").removeClass("info-value-hidden");
  $("#info-percent-val").addClass("info-value");

  var bgColor = (correct ? "var(--correct-color)" : "var(--incorrect-color)");
  flashBackground($("#info-percent"), infoBg, bgColor, 500);
}

function revealRegion(correct)
{
  $("#info-region-val").html(answerInfo["region"]);
  $("#info-region-val").removeClass("info-value-hidden");
  $("#info-region-val").addClass("info-value");

  var bgColor = (correct ? "var(--correct-color)" : "var(--incorrect-color)");
  flashBackground($("#info-region"), infoBg, bgColor, 500);
}

function revealKillcount(correct)
{
  var killCounts = []
  answerInfo["killcount"].forEach(function(val)
  {
    killCounts.push(val.toLocaleString("en-US"));
  });
  $("#info-killcount-val").html(killCounts.join(" & "));
  $("#info-killcount-val").removeClass("info-value-hidden");
  $("#info-killcount-val").addClass("info-value");

  var bgColor = (correct ? "var(--correct-color)" : "var(--incorrect-color)");
  flashBackground($("#info-killcount"), infoBg, bgColor, 500);
}

function revealType(correct)
{
  $("#info-type-val").html(answerInfo["type"]);
  $("#info-type-val").removeClass("info-value-hidden");
  $("#info-type-val").addClass("info-value");

  var bgColor = (correct ? "var(--correct-color)" : "var(--incorrect-color)");
  flashBackground($("#info-type"), infoBg, bgColor, 500);
}

function revealSilhouette()
{
  $("#info-image").removeClass("info-image-hidden");
  $("#info-image").addClass("info-image");

  $("#pet-image").attr("src", answerInfo["silhouette"]);
}

function revealImage()
{
  $("#info-image").removeClass("info-image-hidden");
  $("#info-image").addClass("info-image");

  $("#pet-image").attr("src", answerInfo["image"]);
}

function closeAllLists()
{
  $(".autocomplete-items").remove();
}

function checkMatch(input, pet)
{
  if (pet["name"].toLowerCase().includes(input.toLowerCase().trim()))
  {
    return true;
  }
  else
  {
    var matchFound = false;
    pet["alt_names"].forEach(function(altName)
    {
      if (altName.toLowerCase().includes(input.toLowerCase().trim()))
      {
        matchFound = true;
      }
    });
    return matchFound;
  }
}

function getGuessString()
{
  var guessStr = `itswill Petdle #{0}

`.format(answerDay + 1);
  
  guesses.forEach(function(val)
  {
    if (val.toLowerCase() == answerInfo['name'].toLowerCase())
    {
      guessStr += "\u{1F7E9}"; // green square
    }
    else
    {
      guessStr += "\u{1F7E5}"; // red square 
    }
  });

  for(var i = guesses.length; i < 6; ++i)
  {
    guessStr += "\u2B1B"; // black square
  }

  guessStr += "\n\nhttps://itswill.org/petdle/"

  return guessStr;
}

function share()
{
  setTimeout(function()
  {
    $("#share-button").html("Share");
  }, 500);
  $("#share-button").html("Copied!");

  var $temp = $("<textarea>");
  $("body").append($temp);
  $temp.val(getGuessString()).select();
  document.execCommand("copy");
  $temp.remove();
}

function validGuess()
{
  var guess = $("#guess-input").val();

  var validGuess = false;
  for (const key in info.allPetList)
  {
    var petObject = info.allPetList[key];
    
    if (petObject["name"].toLowerCase() == guess.toLowerCase())
    {
      validGuess = true;
      break;
    }
  }

  return validGuess;
}

function submitGuess()
{
  var guess = $("#guess-input").val();

  if (!validGuess())
  {
    console.error("SUBMITTED WITH AN INVALID GUESS!! ERROR!!!");
  }

  var correct = answerInfo["name"].toLowerCase() == guess.toLowerCase();

  guesses.push(guess);

  $("#guess-input").val("");
  $("#guess-submit").prop('disabled', !validGuess());

  if (!correct)
  {
    if (guesses.length == 1)
    {
      revealYear(false);
    }
    else if (guesses.length == 2)
    {
      revealPercent(false);
    }
    else if (guesses.length == 3)
    {
      revealRegion(false);
    }
    else if (guesses.length == 4)
    {
      revealKillcount(false);
      revealType(false);
    }
    else if (guesses.length == 5)
    {
      revealSilhouette();
    }
    else {
      $("#guess-input").prop("disabled", true);
      $("#guess-submit").prop("disabled", true);

      $("#guess-input").val(answerInfo["name"]);

      $("#guess-input").css('background-color', 'var(--incorrect-color)');
      $("#guess-input").css('color', 'var(--default-color)');

      $("#message").html("<h2>You lose! The pet of the day is the " + answerInfo["name"] + "!</h2>");
      $("#message").append("<button onclick='javascript:share()' id='share-button'>Share</button>");

      revealImage();
    }
  }
  else
  {
    $("#guess-input").prop("disabled", true);
    $("#guess-submit").prop("disabled", true);

    $("#guess-input").val(answerInfo["name"]);

    $("#guess-input").css('background-color', 'var(--correct-color)');
    $("#guess-input").css('color', 'var(--default-color)');

    $("#message").html("<h2>Correct! The pet of the day is the " + answerInfo["name"] + "!</h2>");
    $("#message").append("<button onclick='javascript:share()' id='share-button'>Share</button>");

    revealYear(true);
    revealPercent(true);
    revealRegion(true);
    revealKillcount(true);
    revealType(true);
    revealImage();
  }
}

function setAutocompleteFocus()
{ 
  var items = $(".autocomplete-item");

  Object.values(items).forEach(function (val, i)
  {
    if (!val) return;

    $(val).removeClass("autocomplete-active");

    if (i == currentFocus)
    {
      $(val).addClass("autocomplete-active");
    }
  });
}

$(window).on('load', function() {
  var queryString = window.location.search;
  var urlParams = new URLSearchParams(queryString);

  var paramDay = urlParams.get("day");

  if (paramDay && !isNaN(parseInt(paramDay)))
  {
    answerDay = parseInt(paramDay) - 1;
  }
  else
  {
    answerDay = daysSinceStart;
  }

  $("#prev-puzzles").empty();
  for(var i = 0; i < Math.min(petDropList.length, daysSinceStart); i++)
  {
    $("#prev-puzzles").append("<div class='puzzle-link'><a href='{0}'>#{1} - {2}</a></div>".format("?day={0}".format(i + 1), (i + 1).toString().padStart(2, "0"), startDate.plus({ days: i }).toISODate()));
  }

  if (answerDay < info.answerKey.length)
  {
    correctAnswer = info.answerKey[answerDay];
  }
  else
  {
    correctAnswer = info.answerKey[random_answer(answerDay)];
  }

  $("#guess-submit").prop('disabled', !validGuess());

  info.petDropList.forEach(function(val, index)
  {
    if (val[0] == correctAnswer)
    {
      var key = val[0];
      answerInfo["key"] = key;
      answerInfo["datetime"] = DateTime.fromFormat(val[1], "yyyy-MM-dd'T'HH:mm:ss'Z'");
      answerInfo["killcount"] = val[2];
      answerInfo["droprate"] = val[3];
      answerInfo["name"] = info.allPetList[key]["name"];
      answerInfo["region"] = info.allPetList[key]["region"];
      answerInfo["type"] = info.allPetList[key]["type"];
      answerInfo["image"] = info.allPetList[key]["following_image_url"];
      answerInfo["silhouette"] = info.allPetList[key]["silhouette_url"];
    }
  });

  if (answerInfo["killcount"].length != answerInfo["droprate"].length)
  {
    console.error("MISMATCH IN DROP RATES VS KILLCOUNTS ! ! !");
  }
  
  revealMonthDay(true);

  $(document).on("click", function(e) {
    if (!$(e.target).is("#guess-input"))
    {
      closeAllLists();
    }
  });

  $("#guess-input").on("input click focus", function(e)
  {
    e.preventDefault();
    $("#guess-submit").prop('disabled', !validGuess());

    var a, b, i, val = this.value;
    closeAllLists();
    if (!val)
    {
      val = "";
    }
    currentFocus = -1;
    $("<div>", {id: 'autocomplete-list', class: 'autocomplete-items'}).appendTo("#myAutocomplete");

    for (const key in info.allPetList)
    {
      petObject = info.allPetList[key];

      if (checkMatch(val, petObject))
      {
        var itemIdRaw = "autocomplete-item-" + key;
        $("<div>", { id: itemIdRaw, class: "autocomplete-item"}).appendTo("#autocomplete-list");

        var itemId = "#" + itemIdRaw;

        $(itemId).append("<img src='" + petObject["inventory_image_url"] + "' alt='" + petObject["name"] + "' width='24' height='24' style='margin-right:5px;'>");
        $(itemId).append(petObject["name"]);
        $(itemId).append("<input type='hidden' id='" + itemIdRaw + "-input' value=\"" + petObject["name"] + "\">");

        $(itemId).on("click", function(e)
        {
          var id = $(this).attr('id')
          $("#guess-input").val($("#{0}-input".format(id)).val());
          closeAllLists();
          $("#guess-submit").prop('disabled', !validGuess());
        });
      }
    }
  });

  $("#guess-input").on("keydown", function(e)
  {
    var items = $(".autocomplete-item");

    if (e.keyCode == 40)
    {
      currentFocus++;

      if (currentFocus >= items.length)
      {
        currentFocus = items.length - 1;
      }

      setAutocompleteFocus();
    }
    else if (e.keyCode == 38)
    {
      currentFocus--;
      
      if (currentFocus < -1)
      {
        currentFocus = -1;
      }
      
      setAutocompleteFocus();
    }
    else if (e.keyCode == 13)
    {
      e.preventDefault();

      var items = $(".autocomplete-item");
      if (currentFocus > -1 && currentFocus < items.length)
      {
        items[currentFocus].click();
        currentFocus = -1;
      }
      else if (currentFocus == -1)
      {
        if (validGuess())
        {
          $("#guess-submit").click();
          $("#guess-input").blur();
        }
      }
    }
  });
});
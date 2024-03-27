var DateTime = luxon.DateTime;

var startDate = DateTime.fromObject({ hour: 0, minute: 0, second: 0, day: 28, month: 6, year: 2023 }, { zone: "America/Los_Angeles"});
var todaysDate = DateTime.now().setZone("America/Los_Angeles");
var answerDay = Math.floor(todaysDate.diff(startDate, 'days').values["days"]);

var valid = [["Abyssal orphan","https://oldschool.runescape.wiki/images/Abyssal_orphan.png?5bab3"],
             ["Baby mole","https://oldschool.runescape.wiki/images/Baby_mole.png?81388"],
             ["Callisto cub","https://oldschool.runescape.wiki/images/Callisto_cub.png?d6057"],
             ["Hellpuppy","https://oldschool.runescape.wiki/images/Hellpuppy.png?80b36"],
             ["Ikkle hydra","https://oldschool.runescape.wiki/images/Ikkle_hydra_%28serpentine%29.png?80b36"],
             ["Jal-nib-rek","https://oldschool.runescape.wiki/images/Jal-nib-rek.png?b3ec1"],
             ["Kalphite princess","https://oldschool.runescape.wiki/images/Kalphite_princess.png?d8722"],
             ["Muphin","https://oldschool.runescape.wiki/images/Muphin_%28ranged%29.png?11c7e"],
             ["Lil' zik","https://oldschool.runescape.wiki/images/Lil%27_zik.png?c62f1"],
             ["Little nightmare","https://oldschool.runescape.wiki/images/Little_nightmare.png?f3f6a"],
             ["Nexling","https://oldschool.runescape.wiki/images/Nexling.png?23e0d"],
             ["Noon","https://oldschool.runescape.wiki/images/Noon.png?4068d"],
             ["Olmlet","https://oldschool.runescape.wiki/images/Olmlet.png?d8722"],
             ["Pet chaos elemental","https://oldschool.runescape.wiki/images/Pet_chaos_elemental.png?e2d9b"],
             ["Pet dagannoth prime","https://oldschool.runescape.wiki/images/Pet_dagannoth_prime.png?e2d9b"],
             ["Pet dagannoth rex","https://oldschool.runescape.wiki/images/Pet_dagannoth_rex.png?e2d9b"],
             ["Pet dagannoth supreme","https://oldschool.runescape.wiki/images/Pet_dagannoth_supreme.png?e2d9b"],
             ["Pet dark core","https://oldschool.runescape.wiki/images/Pet_dark_core.png?85699"],
             ["Pet general graardor","https://oldschool.runescape.wiki/images/Pet_general_graardor.png?85699"],
             ["Pet k'ril tsutsaroth","https://oldschool.runescape.wiki/images/Pet_k%27ril_tsutsaroth.png?fe846"],
             ["Pet kraken","https://oldschool.runescape.wiki/images/Pet_kraken.png?85699"],
             ["Pet kree'arra","https://oldschool.runescape.wiki/images/Pet_kree%27arra.png?f3f6a"],
             ["Pet smoke devil","https://oldschool.runescape.wiki/images/Pet_smoke_devil.png?fe846"],
             ["Pet snakeling","https://oldschool.runescape.wiki/images/Pet_snakeling.png?c0946"],
             ["Pet zilyana","https://oldschool.runescape.wiki/images/Pet_zilyana.png?f3f6a"],
             ["Phoenix","https://oldschool.runescape.wiki/images/Phoenix.png?fe846"],
             ["Prince black dragon","https://oldschool.runescape.wiki/images/Prince_black_dragon.png?c0946"],
             ["Scorpia's offspring","https://oldschool.runescape.wiki/images/Scorpia%27s_offspring.png?85699"],
             ["Skotos","https://oldschool.runescape.wiki/images/Skotos.png?52875"],
             ["Smolcano","https://oldschool.runescape.wiki/images/Smolcano.png?52875"],
             ["Sraracha","https://oldschool.runescape.wiki/images/Sraracha.png?52875"],
             ["Tiny tempor","https://oldschool.runescape.wiki/images/Tiny_tempor.png?77385"],
             ["Tumeken's guardian","https://oldschool.runescape.wiki/images/Tumeken%27s_guardian.png?5790e"],
             ["Tzrek-jad","https://oldschool.runescape.wiki/images/Tzrek-jad.png?420f4"],
             ["Venenatis spiderling","https://oldschool.runescape.wiki/images/Venenatis_spiderling.png?26d89"],
             ["Vet'ion jr.","https://oldschool.runescape.wiki/images/Vet%27ion_jr..png?26d89"],
             ["Vorki","https://oldschool.runescape.wiki/images/Vorki.png?03aa0"],
             ["Youngleff","https://oldschool.runescape.wiki/images/Youngllef.png?1e205"],
             ["Baby chinchompa","https://oldschool.runescape.wiki/images/Baby_chinchompa_%28red%29.png?b5841"],
             ["Beaver","https://oldschool.runescape.wiki/images/Beaver.png?0d4ed"],
             ["Giant squirrel","https://oldschool.runescape.wiki/images/Giant_squirrel.png?3b568"],
             ["Heron","https://oldschool.runescape.wiki/images/Heron.png?80b36"],
             ["Rift guardian","https://oldschool.runescape.wiki/images/Rift_guardian_%28fire%29.png?c0946"],
             ["Rock golem","https://oldschool.runescape.wiki/images/Rock_golem.png?77385"],
             ["Rocky","https://oldschool.runescape.wiki/images/Rocky.png?3f71e"],
             ["Tangleroot","https://oldschool.runescape.wiki/images/Tangleroot.png?52875"],
             ["Abyssal protector","https://oldschool.runescape.wiki/images/Abyssal_protector.png?1e68e"],
             ["Bloodhound","https://oldschool.runescape.wiki/images/Bloodhound.png?0d4ed"],
             ["Cat","https://oldschool.runescape.wiki/images/Pet_cat_%28black%29.png?e2d9b"],
             ["Chompy chick","https://oldschool.runescape.wiki/images/Chompy_chick.png?36657"],
             ["Hellcat","https://oldschool.runescape.wiki/images/Hell_cat.png?80b36"],
             ["Herbi","https://oldschool.runescape.wiki/images/Herbi.png?d8722"],
             ["Lil' creator","https://oldschool.runescape.wiki/images/Lil%27_creator.png?60046"],
             ["Pet fish","https://oldschool.runescape.wiki/images/Fishbowl_%28blue%29.png?5abba"],
             ["Pet penance queen","https://oldschool.runescape.wiki/images/Pet_penance_queen.png?c0946"],
             ["Pet rock","https://oldschool.runescape.wiki/images/Pet_rock.png?97482"],
             ["Toy cat","https://oldschool.runescape.wiki/images/Toy_cat.png?d1c2e"],
             ["Metamorphic dust","https://oldschool.runescape.wiki/images/Metamorphic_dust.png?ccf02"],
             ["Sanguine dust","https://oldschool.runescape.wiki/images/Sanguine_dust.png?7313d"]];

var pets = [["Abyssal orphan",        "2020-06-22T22:06:00Z",     5653,     2560,      "Abyssal Space",      "PvM", "./resources/images/Abyssal_orphan.png",       "./resources/images/silhouettes/1.png"],
            ["Baby mole",             "2019-10-23T02:27:00Z",     4871,     3000,           "Asgarnia",      "PvM", "./resources/images/Baby_Mole.png",            "./resources/images/silhouettes/4.png"],
            ["Callisto cub",          "2019-03-11T14:47:00Z",     2368,     2000,         "Wilderness",      "PvM", "./resources/images/Callisto_cub.png",         "./resources/images/silhouettes/7.png"],
            ["Hellpuppy",             "2019-02-18T12:00:00Z",     4261,     3000,           "Asgarnia",      "PvM", "./resources/images/Hellpuppy.png",            "./resources/images/silhouettes/17.png"],
            ["Ikkle hydra",           "2019-01-13T22:26:00Z",      181,     3000,      "Great Kourend",      "PvM", "./resources/images/Ikkle_Hydra.png",          "./resources/images/silhouettes/20.png"],
            ["Kalphite princess",     "2020-09-02T23:36:00Z",    12429,     3000,   "Kharidian Desert",      "PvM", "./resources/images/Kalphite_Princess.png",    "./resources/images/silhouettes/22.png"],
            ["Muphin",                "2023-01-18T23:20:00Z",      450,     2500,      "Troll Country",      "PvM", "./resources/images/Muphin.png",               "./resources/images/silhouettes/29.png"],
            ["Little nightmare",      "2023-04-20T00:14:00Z",     2066,     1400,          "Morytania",      "PvM", "./resources/images/Little_nightmare.png",     "./resources/images/silhouettes/28.png"],
            ["Noon",                  "2019-07-10T13:19:00Z",     1559,     3000,          "Morytania",      "PvM", "./resources/images/Noon.png",                 "./resources/images/silhouettes/31.png"],
            ["Olmlet",                "2021-08-04T02:14:00Z", 27000000, 45982800,      "Great Kourend",      "PvM", "./resources/images/Olmlet.png",               "./resources/images/silhouettes/32.png"],
            ["Pet chaos elemental",   "2019-12-04T17:08:00Z",       39,      300,         "Wilderness",      "PvM", "./resources/images/Chaos_Elemental_Jr.png",   "./resources/images/silhouettes/8.png"],
            ["Pet dagannoth prime",   "2020-01-06T22:17:00Z",      975,     5000, "Fremennik Province",      "PvM", "./resources/images/Dagannoth_Prime_Jr.png",   "./resources/images/silhouettes/10.png"],
            ["Pet dagannoth rex",     "2019-10-24T03:17:00Z",      796,     5000, "Fremennik Province",      "PvM", "./resources/images/Dagannoth_Rex_Jr.png",     "./resources/images/silhouettes/11.png"],
            ["Pet dagannoth supreme", "2020-04-24T21:55:00Z",     1596,     5000, "Fremennik Province",      "PvM", "./resources/images/Dagannoth_Supreme_Jr.png", "./resources/images/silhouettes/12.png"],
            ["Pet general graardor",  "2022-04-21T00:13:00Z",     3881,     5000,      "Troll Country",      "PvM", "./resources/images/General_Graardor_Jr.png",  "./resources/images/silhouettes/14.png"],
            ["Pet k'ril tsutsaroth",  "2021-08-11T22:10:00Z",      767,     5000,      "Troll Country",      "PvM", "./resources/images/K'ril_Tsutsaroth_Jr.png",  "./resources/images/silhouettes/25.png"],
            ["Pet kraken",            "2019-04-21T21:44:00Z",     6922,     3000,           "Kandarin",      "PvM", "./resources/images/Kraken.png",               "./resources/images/silhouettes/23.png"],
            ["Pet smoke devil",       "2021-04-18T23:38:00Z",    15380,     3000,           "Kandarin",      "PvM", "./resources/images/Smoke_Devil.png",          "./resources/images/silhouettes/41.png"],
            ["Pet zilyana",           "2021-05-05T22:42:00Z",     2892,     5000,      "Troll Country",      "PvM", "./resources/images/Zilyana_Jr.png",           "./resources/images/silhouettes/53.png"],
            ["Phoenix",               "2019-08-17T15:58:00Z",      952,     1880,      "Great Kourend", "Minigame", "./resources/images/Phoenix.png",              "./resources/images/silhouettes/34.png"],
            ["Prince black dragon",   "2019-03-20T12:00:00Z",      798,     3000,         "Wilderness",      "PvM", "./resources/images/Prince_Black_Dragon.png",  "./resources/images/silhouettes/35.png"],
            ["Smolcano",              "2023-03-14T17:48:00Z",     3252,     2250,           "Tirannwn",      "PvM", "./resources/images/Smolcano.png",             "./resources/images/silhouettes/42.png"],
            ["Sraracha",              "2021-03-22T23:42:00Z",     4703,     3000,      "Great Kourend",      "PvM", "./resources/images/Sraracha.png",             "./resources/images/silhouettes/44.png"],
            ["Tumeken's guardian",    "2022-09-01T01:55:00Z",       88,     1360,   "Kharidian Desert",      "PvM", "./resources/images/Tumeken's_Guardian.png",   "./resources/images/silhouettes/47.png"],
            ["Tzrek-jad",             "2019-04-23T21:05:00Z",       16,       67,            "Karamja",      "PvM", "./resources/images/TzRek-Jad.png",            "./resources/images/silhouettes/48.png"],
            ["Vet'ion jr.",           "2023-05-10T00:59:00Z",     1422,     2800,         "Wilderness",      "PvM", "./resources/images/Vet'ion_Jr.png",           "./resources/images/silhouettes/50.png"],
            ["Vorki",                 "2019-03-28T16:35:00Z",     1287,     3000, "Fremennik Province",      "PvM", "./resources/images/Vorki.png",                "./resources/images/silhouettes/51.png"],
            ["Youngleff",             "2021-07-24T19:20:00Z",     1317,      800,           "Tirannwn",      "PvM", "./resources/images/Youngllef.png",            "./resources/images/silhouettes/52.png"],
            ["Beaver",                "2018-04-28T13:17:00Z",  7090372, 22260000,                "N/A", "Skilling", "./resources/images/Beaver.png",               "./resources/images/silhouettes/5.png"],
            ["Heron",                 "2018-08-17T14:48:00Z", 14700000, 28270000,                "N/A", "Skilling", "./resources/images/Heron.png",                "./resources/images/silhouettes/19.png"],
            ["Rock golem",            "2019-05-21T16:15:00Z", 13900000, 20000000,                "N/A", "Skilling", "./resources/images/Rock_golem.png",           "./resources/images/silhouettes/37.png"],
            ["Bloodhound",            "2019-09-16T22:55:00Z",      275,     1000,                "N/A",    "Other", "./resources/images/Bloodhound.png",           "./resources/images/silhouettes/6.png"],
            ["Herbi",                 "2023-02-11T17:01:00Z",    14323,     6500,      "Fossil Island", "Skilling", "./resources/images/Herbi.png",                "./resources/images/silhouettes/18.png"],
            ["Lil' creator",          "2021-12-23T20:50:00Z",     5928,    12000,        "Western Sea", "Minigame", "./resources/images/Lil'_Creator.png",         "./resources/images/silhouettes/26.png"],
            ["Sanguine dust",         "2022-05-20T02:40:13Z",       92,      275,          "Morytania",      "PvM", "./resources/images/Sanguine_dust.png",        "./resources/images/silhouettes/54.png"],
            ["Metamorphic dust",      "2023-06-27T20:19:00Z",      646,      400,      "Great Kourend",      "PvM", "./resources/images/Metamorphic_dust.png",     "./resources/images/silhouettes/55.png"],
            ["Abyssal protector",     "2023-06-29T00:14:00Z",     1340,     4000,        "Eastern Sea", "Minigame", "./resources/images/Abyssal_protector.png",    "./resources/images/silhouettes/2.png"]];

var answers = ["Pet smoke devil",
               "Callisto cub",
               "Youngleff",
               "Lil' creator",
               "Pet dagannoth supreme",
               "Vet'ion jr.",
               "Abyssal protector",
               "Hellpuppy",
               "Pet dagannoth rex",
               "Tumeken's guardian",
               "Pet zilyana",
               "Bloodhound",
               "Tzrek-jad",
               "Ikkle hydra",
               "Baby mole",
               "Noon",
               "Pet chaos elemental",
               "Little nightmare",
               "Pet general graardor",
               "Rock golem",
               "Prince black dragon",
               "Sraracha",
               "Metamorphic dust",
               "Sanguine dust",
               "Olmlet",
               "Heron",
               "Pet kraken",
               "Pet dagannoth prime",
               "Muphin",
               "Abyssal orphan",
               "Vorki",
               "Kalphite princess",
               "Pet k'ril tsutsaroth",
               "Beaver",
               "Herbi",
               "Phoenix",
               "Smolcano"]

var correctAnswer;
var answerInfo = {};
var guesses = [];
var currentFocus;
var autocompleteItems = [];

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

var infoBg = "#f7f7f7";

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

  var bgColor = (correct ? "#67f06e" : "#f06767");
  flashBackground($("#info-day"), infoBg, bgColor, 500);
}

function revealYear(correct)
{
  $("#info-year-val").html(answerInfo["datetime"].toFormat("yyyy"));
  $("#info-year-val").removeClass("info-value-hidden");
  $("#info-year-val").addClass("info-value");

  var bgColor = (correct ? "#67f06e" : "#f06767");
  flashBackground($("#info-year"), infoBg, bgColor, 500);
}

function revealPercent(correct)
{
  var percent = (answerInfo["killcount"] / answerInfo["droprate"]) * 100;
  $("#info-percent-val").html("" + percent.toFixed(1).toLocaleString("en-US") + "%");
  $("#info-percent-val").removeClass("info-value-hidden");
  $("#info-percent-val").addClass("info-value");

  var bgColor = (correct ? "#67f06e" : "#f06767");
  flashBackground($("#info-percent"), infoBg, bgColor, 500);
}

function revealRegion(correct)
{
  $("#info-region-val").html(answerInfo["region"]);
  $("#info-region-val").removeClass("info-value-hidden");
  $("#info-region-val").addClass("info-value");

  var bgColor = (correct ? "#67f06e" : "#f06767");
  flashBackground($("#info-region"), infoBg, bgColor, 500);
}

function revealKillcount(correct)
{
  $("#info-killcount-val").html(answerInfo["killcount"].toLocaleString("en-US"));
  $("#info-killcount-val").removeClass("info-value-hidden");
  $("#info-killcount-val").addClass("info-value");

  var bgColor = (correct ? "#67f06e" : "#f06767");
  flashBackground($("#info-killcount"), infoBg, bgColor, 500);
}

function revealType(correct)
{
  $("#info-type-val").html(answerInfo["type"]);
  $("#info-type-val").removeClass("info-value-hidden");
  $("#info-type-val").addClass("info-value");

  var bgColor = (correct ? "#67f06e" : "#f06767");
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
  var guess = $("#myInput").val();

  var validGuess = false;
  valid.forEach(function(val) { if (val[0].toLowerCase() == guess.toLowerCase()) validGuess = true; } );

  return validGuess;
}

function submitGuess()
{
  var guess = $("#myInput").val();

  if (!validGuess())
  {
    console.error("SUBMITTED WITH AN INVALID GUESS!! ERROR!!!");
  }

  var correct = answerInfo["name"].toLowerCase() == guess.toLowerCase();

  guesses.push(guess);

  $("#myInput").val("");
  $("#input-submit").prop('disabled', !validGuess());

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
      $("#myInput").prop("disabled", true);
      $("#input-submit").prop("disabled", true);

      $("#myInput").val(answerInfo["name"]);

      $("#myInput").css('background-color', '#7a0f07');
      $("#myInput").css('color', 'white');

      $("#message").html("<h2>You lose! The pet of the day is the " + answerInfo["name"] + "!</h2>");
      $("#message").append("<button onclick='javascript:share()' id='share-button'>Share</button>");

      revealImage();
    }
  }
  else
  {
    $("#myInput").prop("disabled", true);
    $("#input-submit").prop("disabled", true);

    $("#myInput").val(answerInfo["name"]);

    $("#myInput").css('background-color', '#538d4e');
    $("#myInput").css('color', 'white');

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
  if (answerDay < answers.length)
  {
    correctAnswer = answers[answerDay];
  }
  else
  {
    correctAnswer = answers[answers.length - 1];
  }

  $("#input-submit").prop('disabled', !validGuess());

  pets.forEach(function(val, index)
  {
    if (val[0] == correctAnswer)
    {
      answerInfo["name"] = val[0];
      answerInfo["datetime"] = DateTime.fromFormat(val[1], "yyyy-MM-dd'T'HH:mm:ss'Z'");
      answerInfo["killcount"] = val[2];
      answerInfo["droprate"] = val[3];
      answerInfo["region"] = val[4];
      answerInfo["type"] = val[5];
      answerInfo["image"] = val[6];
      answerInfo["silhouette"] = val[7];
    }
  });
  
  revealMonthDay(true);

  $(document).on("click", function(e) {
    if (!$(e.target).is("#myInput"))
    {
      closeAllLists();
    }
  });

  $("#myInput").on("input click focus", function(e)
  {
    e.preventDefault();
    $("#input-submit").prop('disabled', !validGuess());

    var a, b, i, val = this.value;
    closeAllLists();
    if (!val)
    {
      val = "";
    }
    currentFocus = -1;
    $("<div>", {id: 'autocomplete-list', class: 'autocomplete-items'}).appendTo("#myAutocomplete");

    valid.forEach(function(pet, index)
    {

      if (pet[0].toLowerCase().includes(val.toLowerCase().trim()))
      {
        var itemIdRaw = "autocomplete-item-" + index;
        $("<div>", { id: itemIdRaw, class: "autocomplete-item"}).appendTo("#autocomplete-list");

        var itemId = "#" + itemIdRaw;

        $(itemId).append("<img src='" + pet[1] + "' alt='" + pet[0] + "' width='24' height='24' style='margin-right:5px;'>");
        $(itemId).append(pet[0]);
        $(itemId).append("<input type='hidden' id='" + itemIdRaw + "-input' value=\"" + pet[0] + "\">");

        $(itemId).on("click", function(e)
        {
          $("#myInput").val($(itemId + "-input").val());
          closeAllLists();
          $("#input-submit").prop('disabled', !validGuess());
        });
      }
    });
  });

  $("#myInput").on("keydown", function(e)
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
        $("#input-submit").click();
        $("#myInput").blur();
      }
    }
  });
});
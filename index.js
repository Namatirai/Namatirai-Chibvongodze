var skills = ["HMTL" ,"CSS","JavaScript","BootStrap5", "JQUERY",
"EJS","React","Ionic 5","Java" ,"Android Studio","SQL","MongoDB","Firebase",]

var features = ["To book listed accommodation available",
 "To save their budget information",
 "To review tourist places" ," To add touring experiences"]

var skillsapplied =["Angular","IONIC Framework","TypeScript"]

var webfeatures = ["To search recipes a by calories,ingredients etc", "To return results from API"]

var webskills = ["nodejs" ,"spooncular API","EJS","mongodb"]

var cakefeatures = ["Template frontend for a cake business" ]

var cakeskills = ["HTML" ,"CSS","BootStrap5"]
//show skills
$(document).ready(function(){
  $(".Skills").click(function(){

    for (var i = 0; i < skills.length; i++) {

      var skillsli = skills[i];
      $("#myskills").append('<li class="flex-item"> <a href="skillsli.html">' + skillsli +'</a> </li>')
      //hide button after the skills are shown
        $(".Skills").hide();
    //   var skillstext = $("h3").text(skills[i]);
    // $(".Skills").append(skillstext)
    }
  });
})

$(document).ready(function(){
  $(".cakefeatures").click(function(){
    for(var i = 0; i < cakefeatures.length; i++){
      var cakefeaturesi = cakefeatures[i];
      console.log(webfeatures[i]);
      $("#cakeskills").append('<li class="flex-item">' + cakefeaturesi + '</li>')
      $(".cakefeatures").hide();
    }
    console.log("clicked");
  })
})
//showskills
$(document).ready(function(){
  $(".Webfeatures").click(function(){
    for(var i = 0; i < webfeatures.length; i++){
      var webfeaturesi = webfeatures[i];
      console.log(webfeatures[i]);
      $("#mywebskills").append('<li class="flex-item">' + webfeaturesi + '</li>')
      $(".Webfeatures").hide();
    }
    console.log("clicked");
  })
})
//show skills
$(document).ready(function(){
  $(".Features").click(function(){

    for (var i = 0; i < features.length; i++) {
    var myfeatures = features[i]
  var skillsused = skillsapplied[i];
      // var features = skills[i];
      $("#myfeatures").append('<li class="flex-item1">'  + myfeatures +'</li>')
          $("#myappliedskills").append('<li class="flex-item1">'  + skillsused +'</li>')
        $(".Features").hide();
        $(".AppliedSkills").hide();

    }
  });
})

//show skills
$(document).ready(function(){
  $(".AppliedSkills").click(function(){

    for (var i = 0; i < skillsapplied.length; i++) {

      var skillsused = skillsapplied[i];

      //hide button after the skills are shown
        $(".AppliedSkills").hide();
        $(".Features").hide();
    //   var skillstext = $("h3").text(skills[i]);
    // $(".Skills").append(skillstext)
    }
  });
})

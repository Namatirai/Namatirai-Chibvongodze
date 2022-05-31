var skills = ["HMTL" ,"CSS","JavaScript","BootStrap5", "JQUERY",
"Angular","Ionic 5","Java" ,"Android Studio","SQL","C#","ASP.NET",]

var features = ["To book listed accommodation available",
 "To save their budget information",
 "To review tourist places" ," To add touring experiences"]

var skillsapplied =["Angular","IONIC Framework","TypeScript"]



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

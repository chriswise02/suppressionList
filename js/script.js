$(document).ready(function () {
  // show or hide message type dropdowns
  $("#lob, #channel, #campaignType").change(function () {
       //get cvalues
       var channelvalObject = document.querySelector("#channel").value;
       var channelval= JSON.parse(channelvalObject).labelName;
    
console.log(channelval);
    if ($("#lob").val() == "cx" && channelval == "email" && $("#campaignType").val() == "blast") {
      $("#cxemtDiv").removeClass("hide");
      $("#cxpmtDiv").addClass("hide").val('');
      $("#ddfwmtDiv").addClass("hide").val('');
    } else if ($("#lob").val() == "cx" && channelval == "push" && $("#campaignType").val() == "blast") {
      $("#cxpmtDiv").removeClass("hide");
      $("#cxemtDiv").addClass("hide").val('');
      $("#ddfwmtDiv").addClass("hide").val('');
    } else if ($("#lob").val() == "ddfw" && $("#campaignType").val() == "blast") {
      $("#ddfwmtDiv").removeClass("hide");
      $("#cxemtDiv").addClass("hide").val('');
      $("#cxpmtDiv").addClass("hide").val('');
    } else if ($("#campaignType").val() == "journey") {
      $("#cxemtDiv").addClass("hide").val('');
      $("#cxpmtDiv").addClass("hide").val('');
      $("#ddfwmtDiv").addClass("hide").val('');
    }
  });
});


document.addEventListener(
  "click",
  function (event) {
    // Only run on submit button click
    if (event.target.id !== "submitButton") return;
    //get cvalues
    var channelValObject = document.querySelector("#channel").value;
    var channelVal= JSON.parse(channelValObject)
    var locationValObject = document.querySelector("#location").value;
    var locationVal= JSON.parse(locationValObject)
    var campaignTypeval = document.querySelector("#campaignType").value;
  
    var lobVal = document.querySelector("#lob").value;
    //potentially not filled
    var cxeMTVal = document.querySelector("#cxeMT").value;
    var cxpMTVal = document.querySelector("#cxpMT").value;
    var ddfweMTVal = document.querySelector("#ddfweMT").value;
   console.log("Values are --"+
   '\n'+
   "channel:"+ channelVal+
   '\n'+
   "CampaignType:"+ campaignTypeval+
   '\n'+
   "Location:"+ locationVal +
   '\n'+
   "line of business:"+ lobVal +
   '\n'+
   "Cx Email MT:"+ cxeMTVal +
   '\n'+
   "Cx Push MT:"+ cxpMTVal +
   '\n'+
   "ddfw MT:"+ ddfweMTVal
   );
   

    // write to page
    var firstList = document.getElementById("channelList");
    firstList.innerText = channelVal.listId + " - " + channelVal.listName;
    var secondList = document.getElementById("locationList");
    secondList.innerText = locationVal.listId + " - " + locationVal.listName;
    var fourthList = document.getElementById("campaignList");
    fourthList.innerText = "xxxxxxx" + " - " + "[DD]Supression-CampaignSuppression-Email";

    var element = document.getElementById("channelListDiv");
    element.classList.remove("hide");
    var element1 = document.getElementById("locationListDiv");
    element1.classList.remove("hide");
    var element2 = document.getElementById("mediumListDiv");
    if (campaignTypeval == "blast") {
      element2.classList.remove("hide");
    } 
    var element3 = document.getElementById("campaignListDiv");
    element3.classList.remove("hide");
   


    // scroll to bottom of the window upon click
    window.scrollTo(0, document.body.scrollHeight);
  },
  false
);

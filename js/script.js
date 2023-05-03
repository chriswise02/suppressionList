$(document).ready(function () {
  // show or hide message type dropdowns
  $("#lob, #channel, #campaignType").change(function () {
    //get values
    var channelvalObject = document.querySelector("#channel").value;
    var channelval = JSON.parse(channelvalObject).labelName;

  // logic to show additional dropdowns
    if (
      $("#lob").val() == "cx" &&
      channelval == "email" &&
      $("#campaignType").val() == "blast"
    ) {
      $("#cxemtDiv").removeClass("hide");
      $("#cxpmtDiv").addClass("hide").val("");
      $("#ddfwmtDiv").addClass("hide").val("");
    } else if (
      $("#lob").val() == "cx" &&
      channelval == "push" &&
      $("#campaignType").val() == "blast"
    ) {
      $("#cxpmtDiv").removeClass("hide");
      $("#cxemtDiv").addClass("hide").val("");
      $("#ddfwmtDiv").addClass("hide").val("");
    } else if (
      $("#lob").val() == "ddfw" &&
      $("#campaignType").val() == "blast"
    ) {
      $("#ddfwmtDiv").removeClass("hide");
      $("#cxemtDiv").addClass("hide").val("");
      $("#cxpmtDiv").addClass("hide").val("");
    } else if ($("#campaignType").val() == "journey") {
      $("#cxemtDiv").addClass("hide").val("");
      $("#cxpmtDiv").addClass("hide").val("");
      $("#ddfwmtDiv").addClass("hide").val("");
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
    var channelVal = JSON.parse(channelValObject);
    var channelType = channelVal.labelName;
    var locationValObject = document.querySelector("#location").value;
    var locationVal = JSON.parse(locationValObject);
    var campaignTypeval = document.querySelector("#campaignType").value;
    var lobVal = document.querySelector("#lob").value;

    // if blast is selected:
    if (campaignTypeval == "blast" && channelType == "email" && lobVal == "cx") {
      var mediumValObject = document.querySelector("#cxeMT").value;
      var mediumVal = JSON.parse(mediumValObject);

    } else if (campaignTypeval == "blast" && channelType == "email" && lobVal == "ddfw") {
      var mediumValObject = document.querySelector("#ddfweMT").value;
      var mediumVal = JSON.parse(mediumValObject);
    } else if (campaignTypeval == "blast" && channelType == "push") {
      var mediumValObject = document.querySelector("#cxpMT").value;
      var mediumVal = JSON.parse(mediumValObject);
    }
    // reveal reset button
    resetButtonRemove = document.getElementById("resetDiv");
    resetButtonRemove.classList.remove("hide");

    // write values to page 
   document.getElementById("channelList").innerText = channelVal.listId;
   document.getElementById("channelListName").innerText = channelVal.listName;

   document.getElementById("locationList").innerText = locationVal.listId;
   document.getElementById("locationListName").innerText = locationVal.listName;

    document.getElementById("channelListDiv").classList.remove("hide");
    document.getElementById("locationListDiv").classList.remove("hide");

    var element2 = document.getElementById("mediumListDiv");
    var element3 = document.getElementById("campaignListDiv");
    var element4 = document.getElementById("warningDiv");
    element3.classList.remove("hide");
    element4.classList.remove("hide");

    if (campaignTypeval == "blast") {
      element2.classList.remove("hide");

      document.getElementById("mediumList").innerText = mediumVal.listId;
      document.getElementById("mediumListName").innerText = mediumVal.listName;
    }
    //clipboard
    var btns = document.querySelectorAll("button");
    var clipboard = new ClipboardJS(btns);

    clipboard.on("success", function (e) {
      console.info("Action:", e.action);
      console.info("Text:", e.text);
      console.info("Trigger:", e.trigger);
    });

    clipboard.on("error", function (e) {
      console.error("Action:", e.action);
      console.error("Trigger:", e.trigger);
    });

    // scroll to bottom of the window upon click
    window.scrollTo(0, document.body.scrollHeight);
  },
  false
);

document.addEventListener(
  "click",
  function (event) {
    // Only run on reset button click
    if (event.target.id !== "resetButton") return;
    location.reload();
  },
  false
);


// write js code here corresponding to index.html
// You should add submit event on the form
// localStorage.setItem("schedule", stringify)

document.querySelector("#masaiForm").addEventListener("submit", matchData);
var matchArr = JSON.parse(localStorage.getItem("schedule")) || [];

function matchData(){
    event.preventDefault();

    var matchObj = {
        MatchNumber : masaiForm.matchNum.value,
        TeamA : masaiForm.teamA.value,
        TeamB : masaiForm.teamB.value,
        MatchDate : masaiForm.date.value,
        MatchVenue : masaiForm.venue.value,
    };

    matchArr.push(matchObj);
    console.log(matchArr);
    localStorage.setItem("schedule", JSON.stringify(matchArr));

    // window.location.href = "matches.html";
}
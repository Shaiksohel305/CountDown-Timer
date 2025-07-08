let lefttime = 30;
let intervel;

function startTimer() {
    if (lefttime <= 0) {
        lefttime = 30;
    }
    clearInterval(intervel);
    intervel = setInterval(() => {
        document.getElementById("timer").textContent = lefttime;
        lefttime = lefttime - 1;
        if (lefttime < 0) {
            let timeupele = document.getElementById("timer")
            timeupele.textContent = "Time up!"
            let timeupsec = document.getElementById("sec");
            timeupsec.style.display = "none";
        }
        else if (lefttime < 5) {
            let timeupele = document.getElementById("timer")
            timeupele.style.color = "red"
        }
        else {
            let timeupele = document.getElementById("timer")
            timeupele.style.color = "black"
        }
    }, 1000);
}
function resettimer() {
    clearInterval(intervel);
    lefttime = 30;
    const resetbtn = document.getElementById("timer")
    resetbtn.textContent = 30;
    resetbtn.style.color = "black"
}
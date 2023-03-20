let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = false;
let runnerAge = 10;

if (runnerAge >= 18 && registeredEarly === true) {
    raceNumber += 1000;
}


if (runnerAge >= 18 && registeredEarly === true) {
    console.log(`The runner ${raceNumber} will start his race at 9:30`);
}
else if (runnerAge >= 18 && registeredEarly === false) {
    console.log(`The runner ${raceNumber} will start his race at 11:00`)
}

else if (runnerAge < 18) {
    console.log(`The runner ${raceNumber} will start his race at 12:30`)
}
var userPrompt = prompt("Pick an odd number from 1 and 50");
for (var i = userPrompt; userPrompt < 50 && userPrompt > 0; userPrompt++){
    if(userPrompt % 3 === 0){
        continue;
    }
    console.log("skipping number");

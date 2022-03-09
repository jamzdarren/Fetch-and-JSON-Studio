window.addEventListener("load", function(){
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
        response.json().then(function(json) {
            json.sort((a,b) => (a.hoursInSpace > b.hoursInSpace) ? -1 : 1);
            const destination = document.getElementById("container");
            for (let i = 0; i < json.length; i++) {

                let active = "";
                if (json[i].active === true) {
                    active = ' class="active"';
                }

                destination.innerHTML += `
                    <div class="astronaut">
                        <div class="bio">
                            <h3>${json[i].firstName} ${json[i].lastName}</h3>
                            <ul>
                                <li>Hours in space: ${json[i].hoursInSpace}</li>
                                <li${active}>Active: ${json[i].active}</li>
                                <li>Skills: ${json[i].skills}</li>
                            </ul>
                        </div>
                        <img class="avatar" src="${json[i].picture}">
                    </div>
                `;
            }
            destination.innerHTML += `Astronaut Count: ${json.length}`
        });
    });
 });
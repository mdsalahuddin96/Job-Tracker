function getElement(id){
    return document.getElementById(id);
}

function getElementValue(id){
    const number=document.getElementById(id).innerText;
    return Number(number);
}
function setValue(id,value){
    document.getElementById(id).innerText=value;
}

function removeJobs(jobs,jobId){
    return jobs.filter(item=>item.id!=jobId);
}

function getStatusElm(event){
    const left=event.target.closest(".Card").children[0];
    const badge=left.querySelector('.badge');
    return badge ? badge: "";
}
function parseHTML(job){
    return `
        <div id=${job.id} class="Card flex justify-between bg-base-100 rounded-md p-5">
            <!-- card left side element -->
            <div class="left space-y-3">
                <div>
                    <h2 class="companyName text-2xl font-bold">${job.companyName}</h2>
                    <p class="position">${job.position}</p>
                </div>
                <div class="flex gap-2">
                    <p class="location">${job.location}</p>
                    <p>.</p>
                    <p class="type">${job.type}</p>
                    <p>.</p>
                    <p class="salary">${job.salary}</p>
                </div>
                <div class="badge rounded-sm hidden">${job.status}</div>
                <p class="description">${job.description}</p>
                <div class="card-actions">
                    <button id="interview-btn" class="btn btn-outline btn-success">INTERVIEW</button>
                    <button id='rejected-btn' class="btn btn-outline btn-error">REJECTED</button>
                </div>
            </div>
            <!-- card right side delete element -->
            <div class="right delete border border-gray-400 w-7 h-7 rounded-md flex items-center justify-center">
                <img class="delete" src="./Vector.png">
            </div>
            </div>
    `
}

// if (
//   event.target.id === "interview-btn" &&
//   Array.isArray(jobs[cardId].interviewList) &&
//   jobs[cardId].interviewList.length > 0
// ) {
//   const cardId = event.target.closest(".card").id;
//   const status = getStatusElm(event);

//   status.classList.remove("hidden");
//   status.classList.add("badge-success");
//   status.innerText = "INTERVIEW";

//   jobs[cardId].status = "INTERVIEW";
// }
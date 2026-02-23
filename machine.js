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
function getStatusClass(status) {
  const statusMap = {
    INTERVIEW: "badge-success",
    REJECTED: "badge-error"
  };

  return statusMap[status]||"badge-ghost hidden";
}
function parseHTML(job){
    return `
        <div id=${job.id} class="Card flex flex-col gap-4 md:justify-between md:flex-row bg-base-100 rounded-md p-5">
            <!-- card left side element -->
            <div class="left space-y-3">
                <div>
                    <h2 class="companyName text-2xl font-bold">${job.companyName}</h2>
                    <p class="position text-sm md:text-lg">${job.position}</p>
                </div>
                <div class="flex text-sm gap-1 md:text-lg md:gap-2">
                    <p class="location">${job.location}</p>
                    <p>.</p>
                    <p class="type">${job.type}</p>
                    <p>.</p>
                    <p class="salary">${job.salary}</p>
                </div>
                <div class="badge ${getStatusClass(job.status)} rounded-sm">${job.status}</div>
                <p class="description text-sm md:text-lg">${job.description}</p>
                <div class="card-actions">
                    <button id="interview-btn" class="btn btn-outline btn-success">INTERVIEW</button>
                    <button id='rejected-btn' class="btn btn-outline btn-error">REJECTED</button>
                </div>
            </div>
            <!-- card right side delete element -->
            <div class="right border border-gray-400 w-7 h-7 rounded-md flex self-end items-center justify-center md:self-start">
                <img id="delete" class="cursor-pointer" src="./Vector.png">
            </div>
            </div>
    `
}

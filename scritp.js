// const allBtn=getElement('allBtn');
// const interviewBtn=getElement('interviewBtn');
// const rejectBtn=getElement('rejectBtn');

let interviewList=[];
let rejectList=[];
const cardSection=getElement('card-container');
const noJobSection=getElement('no-job-section');
const allJobContainer=getElement('all-job-container');
const interviewSection=document.querySelector(".interview-section");
const rejectSection=document.querySelector(".reject-section");
const selectedJob=getElement('selectedJob');

let jobs=[
    {
        id:1,
  companyName: "TechNova Solutions",
  position: "Frontend Developer",
  location: "Dhaka, Bangladesh",
  type: "Full-time",
  salary: "40,000 BDT",
  status: "Active",
  description: "Looking for a skilled frontend developer with React experience."
},
{
    id:2,
  companyName: "Skyline IT",
  position: "Backend Developer",
  location: "Chittagong, Bangladesh",
  type: "Part-time",
  salary: "30,000 BDT",
  status: "Active",
  description: "Node.js and MongoDB experience required."
},
{
    id:3,
  companyName: "GreenSoft Ltd.",
  position: "UI/UX Designer",
  location: "Khulna, Bangladesh",
  type: "Contract",
  salary: "25,000 BDT",
  status: "Inactive",
  description: "Creative designer needed for mobile app design."
},
{
    id:4,
  companyName: "NextGen Tech",
  position: "Full Stack Developer",
  location: "Sylhet, Bangladesh",
  type: "Full-time",
  salary: "60,000 BDT",
  status: "Active",
  description: "MERN stack developer with 2+ years experience."
},
{
    id:5,
  companyName: "ByteCraft",
  position: "QA Engineer",
  location: "Rajshahi, Bangladesh",
  type: "Internship",
  salary: "15,000 BDT",
  status: "Active",
  description: "Manual and automated testing knowledge required."
},
{
    id:6,
  companyName: "CodeSphere",
  position: "DevOps Engineer",
  location: "Barishal, Bangladesh",
  type: "Full-time",
  salary: "70,000 BDT",
  status: "Inactive",
  description: "Experience with AWS and CI/CD pipelines."
},
 {
    id:7,
  companyName: "InnovaTech",
  position: "Mobile App Developer",
  location: "Rangpur, Bangladesh",
  type: "Remote",
  salary: "50,000 BDT",
  status: "Active",
  description: "Flutter or React Native experience required."
},
{
    id:8,
  companyName: "DataWave Analytics",
  position: "Data Analyst",
  location: "Mymensingh, Bangladesh",
  type: "Full-time",
  salary: "55,000 BDT",
  status: "Active",
  description: "Strong knowledge in Python and data visualization."
}     
]
for(const job of jobs){
    allJobContainer.insertAdjacentHTML('beforeend',parseHTML(job))
}

// Total update  
setValue('totalCount',jobs.length);

// three button toggle
getElement('three-btn').addEventListener('click',function(event){
    const threeBtn=getElement('three-btn').children;
    if(event.target.tagName=='BUTTON'){
        for(let btn of threeBtn){
            btn.classList.remove('btn-primary');
            btn.classList.add('btn-soft');
        }
        const selectedButton=event.target;
        selectedButton.classList.remove('btn-soft');
        selectedButton.classList.add('btn-primary');
    }
    
    if(event.target.id=='allBtn'){
        if(allJobContainer.children.length==0){
            allJobContainer.classList.add('hidden');
            interviewSection.classList.add('hidden');
            rejectSection.classList.add('hidden');
            noJobSection.classList.remove('hidden');  
        }
        else{
            allJobContainer.classList.remove('hidden');
            noJobSection.classList.add('hidden');
            interviewSection.classList.add('hidden');
            rejectSection.classList.add('hidden');
        }
        selectedJob.innerText=""
    }
    if(event.target.id=='interviewBtn'){
        if(interviewList.length<1){
            noJobSection.classList.remove('hidden');
            allJobContainer.classList.add('hidden');
            interviewSection.classList.add('hidden');
            rejectSection.classList.add('hidden');
        }
        else{
            interviewSection.classList.remove('hidden');
             noJobSection.classList.add('hidden');
             rejectSection.classList.add('hidden');
             allJobContainer.classList.add('hidden');
        }
        const count=interviewList.length;
        selectedJob.innerText=count>0?`${count} of `:"";
    }
    if(event.target.id=='rejectBtn'){
        if(rejectList.length<1){
            noJobSection.classList.remove('hidden');
            allJobContainer.classList.add('hidden');
            interviewSection.classList.add('hidden');
            rejectSection.classList.add('hidden');
        }
        else{
            rejectSection.classList.remove('hidden');
             noJobSection.classList.add('hidden');
             interviewSection.classList.add('hidden');
             allJobContainer.classList.add('hidden');
        }
        const count=rejectList.length;
        selectedJob.innerText=count>0?`${count} of `:"";
    }
})

// All Job container;

allJobContainer.addEventListener('click',function(event){
    if(event.target.id=='interview-btn'){
        const id=event.target.closest(".Card").id; 
        const selectedCard=jobs.find((item)=>item.id==id);
        if(selectedCard.status=="INTERVIEW"){
            return;
        }
        
        if(selectedCard.status=="REJECTED"){
            rejectList=removeJobs(rejectList,id);
            rejectSection.innerHTML="";
            setValue('rejectedCount',rejectList.length);
            for(const reject of rejectList){
                rejectSection.insertAdjacentHTML('beforeend',parseHTML(reject))
            }
        }
        
        selectedCard.status='INTERVIEW';
        interviewList.push(selectedCard);
        setValue('interviewCount',interviewList.length);
        interviewSection.innerHTML="";
        for(const interview of interviewList){
            interviewSection.insertAdjacentHTML('beforeend',parseHTML(interview))
        }
        
        const status=getStatusElm(event);
        status.classList.remove('badge-ghost','badge-error')
        status.classList.add('badge-success')
        status.classList.remove('hidden')
        status.innerText=event.target.innerText;    
    }
    if(event.target.id=='rejected-btn'){
        const id=event.target.closest(".Card").id; 
        const selectedCard=jobs.find((item)=>item.id==id);
        if(selectedCard.status=='REJECTED'){
            return;
        }
        
        if(selectedCard.status=="INTERVIEW"){
            interviewList=removeJobs(interviewList,id);
            interviewSection.innerHTML="";
            setValue('interviewCount',interviewList.length);
            for(const interview of interviewList){
                interviewSection.insertAdjacentHTML('beforeend',parseHTML(interview))
            }
        }
        
        selectedCard.status="REJECTED";
        rejectList.push(selectedCard);
        setValue('rejectedCount',rejectList.length);
        rejectSection.innerHTML="";
        for(const reject of rejectList){
            rejectSection.insertAdjacentHTML('beforeend',parseHTML(reject))
        }
        
        
        const status=getStatusElm(event);
        status.classList.remove('badge-ghost','badge-success')
        status.classList.add('badge-error')
        status.classList.remove('hidden')
        status.innerText=event.target.innerText;
        
    }
    if(event.target.id=='delete'){
       const id=event.target.closest('.Card').id;
       jobs=removeJobs(jobs,id);
       event.target.closest('.Card').remove()
       setValue('totalCount',jobs.length);
       setValue('availableJobs',jobs.length);
       if(jobs.length==0){
        allJobContainer.classList.add('hidden');
        noJobSection.classList.remove('hidden')
       }
       interviewList=removeJobs(interviewList,id);
       interviewSection.innerHTML="";
       setValue('interviewCount',interviewList.length);
       for(const interview of interviewList){
            interviewSection.insertAdjacentHTML('beforeend',parseHTML(interview))
       }
       rejectList=removeJobs(rejectList,id);
       rejectSection.innerHTML="";
       setValue('rejectedCount',rejectList.length);
       for(const reject of rejectList){
            rejectSection.insertAdjacentHTML('beforeend',parseHTML(reject))
        }
    }
})

// function remove(id,arr){
//     if()
// }

// Interview Job section
interviewSection.addEventListener('click',function(event){
    if(event.target.id=='interview-btn'){
        return;
    }
    if(event.target.id=='rejected-btn'){
        // add to rejected section
        const id=event.target.closest('.Card').id;
        const selectedCard=interviewList.find((item)=>item.id==id);
        selectedCard.status="REJECTED";
        rejectList.push(selectedCard);
        setValue('rejectedCount',rejectList.length);
        rejectSection.innerHTML="";
        for(const reject of rejectList){
            rejectSection.insertAdjacentHTML('beforeend',parseHTML(reject))
        }

        // remove from interview list
        interviewList=removeJobs(interviewList,id);
        event.target.closest('.Card').remove()
        setValue('interviewCount',interviewList.length);
        if(interviewList.length<1){
            interviewSection.classList.add('hidden');
            noJobSection.classList.remove('hidden');
        }
        const count=interviewList.length;
        selectedJob.innerText=count>0?`${count} of `:"";
        
    }
    if(event.target.id=='delete'){
        // all jobs section update
       const id=event.target.closest('.Card').id;
       jobs=removeJobs(jobs,id);
       allJobContainer.innerHTML="";
       for(const job of jobs){
        allJobContainer.insertAdjacentHTML('beforeend',parseHTML(job))
       }
       setValue('totalCount',jobs.length);
       setValue('availableJobs',jobs.length);
       if(jobs.length==0){
        allJobContainer.classList.add('hidden');
        noJobSection.classList.remove('hidden')
       }

    //    interview section update
       interviewList=removeJobs(interviewList,id);
       const count=interviewList.length;
       selectedJob.innerText=count>0?`${count} of `:"0 of ";
       setValue('interviewCount',interviewList.length);
       interviewSection.innerHTML="";
       for(const interview of interviewList){
            interviewSection.insertAdjacentHTML('beforeend',parseHTML(interview))
       }
       if(interviewList.length==0){
        interviewSection.classList.add('hidden');
        noJobSection.classList.remove('hidden')
       }
    }
})
rejectSection.addEventListener('click',function(event){
    if(event.target.id=='rejected-btn'){
        return;
    }
    if(event.target.id=='interview-btn'){
        // add to interview section
        const id=event.target.closest('.Card').id;
        const selectedCard=rejectList.find((item)=>item.id==id);
        selectedCard.status="INTERVIEW";
        interviewList.push(selectedCard);
        setValue('interviewCount',interviewList.length);
        interviewSection.innerHTML="";
        for(const interview of interviewList){
            interviewSection.insertAdjacentHTML('beforeend',parseHTML(interview))
        }
        // remove from interview list
        rejectList=removeJobs(rejectList,id);
        event.target.closest('.Card').remove()
        setValue('rejectedCount',rejectList.length);
        if(rejectList.length<1){
            rejectSection.classList.add('hidden');
            noJobSection.classList.remove('hidden');
        }
        const count=rejectList.length;
        selectedJob.innerText=count>0?`${count} of `:"";
    }
    if(event.target.id=='delete'){
        // all jobs section update
       const id=event.target.closest('.Card').id;
       jobs=removeJobs(jobs,id);
       allJobContainer.innerHTML="";
       for(const job of jobs){
        allJobContainer.insertAdjacentHTML('beforeend',parseHTML(job))
       }
       setValue('totalCount',jobs.length);
       setValue('availableJobs',jobs.length);
       if(jobs.length==0){
        allJobContainer.classList.add('hidden');
        noJobSection.classList.remove('hidden')
       }

    //    rejected section update
       rejectList=removeJobs(rejectList,id);
       const count=rejectList.length;
       selectedJob.innerText=count>0?`${count} of `:"0 of ";
       setValue('rejectedCount',rejectList.length);
       rejectSection.innerHTML="";
       for(const reject of rejectList){
            rejectSection.insertAdjacentHTML('beforeend',parseHTML(reject))
       }
       if(rejectList.length==0){
        rejectSection.classList.add('hidden');
        noJobSection.classList.remove('hidden')
       }
    }
})
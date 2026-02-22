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
getElement('three-btn').addEventListener('click',(event)=>{
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

allJobContainer.addEventListener('click',(event)=>{
    if(event.target.id=='interview-btn'){
        const cardId=event.target.closest(".Card").id; 
        const status=getStatusElm(event);
        status.classList.remove('badge-ghost')
        status.classList.add('badge-success')
        status.classList.remove('hidden')
        status.innerText=event.target.innerText;
        jobs[cardId-1].status="INTERVIEW";

        const selectedCard=jobs.find((item)=>item.id==cardId);
        const isExist=interviewList.find(item=>item.id==selectedCard.id);
        if(isExist){
            alert('already selected');
            return;
        }
        else{
            interviewList.push(selectedCard)
        }
        
        setValue('interviewCount',interviewList.length);
        interviewSection.innerHTML="";
        for(const interview of interviewList){
            interviewSection.insertAdjacentHTML('beforeend',parseHTML(interview))
        }
    }
    if(event.target.id=='rejected-btn'){
        const cardId=event.target.closest(".Card").id; 
        const status=getStatusElm(event);
        status.classList.remove('badge-ghost')
        status.classList.add('badge-error')
        status.classList.remove('hidden')
        status.innerText=event.target.innerText;
        jobs[cardId-1].status="REJECTED"
        const selectedCard=jobs.find((item)=>item.id==cardId);
        const isExist=rejectList.find(item=>item.id==selectedCard.id);
        if(isExist){
            alert('already selected');
            return;
        }
        else{
            rejectList.push(selectedCard)
        }
        setValue('rejectedCount',rejectList.length);
        rejectSection.innerHTML="";
        for(const reject of rejectList){
            rejectSection.insertAdjacentHTML('beforeend',parseHTML(reject))
        }
    }
    if(event.target.className=='delete'){
       const id=event.target.closest('.Card').id;
       jobs=removeJobs(jobs,id);
       event.target.closest('.Card').remove()
       setValue('totalCount',jobs.length);
       if(jobs.length==0){
        allJobContainer.classList.add('hidden');
        noJobSection.classList.remove('hidden')
       }
    }
})


function getElement(id){
    const elem = document.getElementById(id);
    return elem;
}

function loadJobCards(){
    //setting job number
    const jobNum = document.getElementById('av_jobs');
    const dashboardTotal = document.getElementById('dashboard-total-job');
    jobNum.innerText = jobList.length;
    dashboardTotal.innerText = jobList.length;

    //toggle empty section
    const job_container = getElement('all-job-container');
    const emptyJob_all_section = getElement('empty_all');

    if(jobList.length == 0){
        emptyJob_all_section.classList.remove('hidden');
    }
    else{
        emptyJob_all_section.classList.add('hidden');
    }

    //loading cards
    job_container.innerHTML = '';
    var index = 0;
    for(const obj of jobList){
        
        const job_cards = document.createElement('div');
        job_cards.innerHTML = `
        <div class="text bg-base-200 rounded-[8px] p-6">
                    <div class="flex items-center justify-between">
                        <div>
                            <p class=" font-semibold text-[20px]   text-[#002C5C]">${obj.company_name}</p>
                            <p class=" text-[16px]  text-[#64748B]">${obj.position}</p>
                        </div>
                        <button onclick="deleteJob(${index})" class="btn btn-circle">
                            <i class="fa-regular fa-trash-can"></i>
                        </button>
                    </div>
                    <br>
                    <p class="flex items-center flex-wrap gap-1 md:gap-2 text-[14px] text-[#64748B] mb-5">
                    <span>${obj.location}</span>
                    <span>•</span>
                    <span>${obj.type}</span>
                    <span>•</span>
                    <span>${obj.salary}</span>
                    </p>
                    <button id="badge-n/a" class="btn btn-xs sm:btn-md bg-base-300 text-info-content mb-2">Not Applied</button>
                    <button id="badge-int" class="btn btn-active btn-success btn-xs sm:btn-md text-white mb-2 hidden">Interviewed</button>
                    <button id="badge-rej" class="btn btn-active btn-error btn-xs sm:btn-md text-white mb-2 hidden">Rejected</button>
                    <p class=" text-[14px]  text-[#323B49] mb-3">${obj.description}</p>
                    <button id="interview-btn" onclick="interview_button(${index})" class="interview-btn btn btn-xs sm:btn-md btn-soft btn-success w-28">INTERVIEW</button>
                    <button id="reject-btn" onclick="reject_button(${index})" class="btn btn-xs sm:btn-md btn-soft btn-error w-28">REJECTED</button>
                </div>
        `;
        job_container.append(job_cards);
        index++;
    };
}

function deleteJob(idx){
    if(interviewList.length != 0){
        var index = 0;
        for(const elem of interviewList){
            if(jobList[idx].company_name === elem.company_name){
                interviewList.splice(index,1);
            }
            index++;
        }
    }
    if(rejectList.length != 0){
        var index = 0;
        for(const elem of rejectList){
            if(jobList[idx].company_name === elem.company_name){
                rejectList.splice(index,1);
            }
            index++;
        }
    }
    jobList.splice(idx,1);
    loadJobCards();
    loadJobCards_Intewview();
}

function displaySection(id){
    //hiding all sections
    document.getElementById('all-section').classList.add('hidden');
    document.getElementById('interview-section').classList.add('hidden');
    document.getElementById('rejected-section').classList.add('hidden');
    //display required section
    document.getElementById(id).classList.remove('hidden');

    //resetting buttons
    const tab_buttons = document.querySelectorAll('.tab-button');

    for(const buton of tab_buttons){
        buton.classList.add('btn-outline')
    }
    //setting selected button color
    event.target.classList.remove('btn-outline')
}


function interview_button(idx){
    console.log(jobList[idx], 'interviewed');
    // jobList[idx].isInterviewed = true;
    // jobList[idx].isRejected = false;
    // is_in_List(jobList[idx], interviewList);
    if((jobList[idx].isInterviewed === false)&&(jobList[idx].isRejected === false)){
        console.log(jobList[idx], 'inside condition 1');
        interviewList.push(jobList[idx]);
        jobList[idx].isInterviewed = true;
    }
    loadJobCards_Intewview();
}

function reject_button(idx){
    jobList[idx].isRejected = true;
    jobList[idx].isInterviewed = false;
    is_in_List(jobList[idx], rejectList);
}

function is_in_List(obj, inter_arr, reject_arr){
    var isFound_interview = false;
    var isFound_reject = false;
    for(const elem of inter_arr){
        if(obj === elem){
            isFound === true;
            break;
        }
    }

    if(isFound === false){
        search_arr.push(obj);
    }
}


function loadJobCards_Intewview(){
    //setting interview job number
    const interview_jobNum = document.getElementById('dashboard-interview-job');
    interview_jobNum.innerText = interviewList.length;
    

    //toggle empty section
    const int_job_container = getElement('interview-job-container');
    const emptyJob_inter_section = getElement('empty_inter');

    if(interviewList.length == 0){
        emptyJob_inter_section.classList.remove('hidden');
    }
    else{
        emptyJob_inter_section.classList.add('hidden');
    }

    //loading cards
    int_job_container.innerHTML = '';
    var index = 0;
    for(const obj of interviewList){
        
        const job_cards = document.createElement('div');
        job_cards.innerHTML = `
        <div class="text bg-base-200 rounded-[8px] p-6">
                    <div class="flex items-center justify-between">
                        <div>
                            <p class=" font-semibold text-[20px]   text-[#002C5C]">${obj.company_name}</p>
                            <p class=" text-[16px]  text-[#64748B]">${obj.position}</p>
                        </div>
                        <button onclick="deleteJob(${index})" class="btn btn-circle">
                            <i class="fa-regular fa-trash-can"></i>
                        </button>
                    </div>
                    <br>
                    <p class="flex items-center flex-wrap gap-1 md:gap-2 text-[14px] text-[#64748B] mb-5">
                    <span>${obj.location}</span>
                    <span>•</span>
                    <span>${obj.type}</span>
                    <span>•</span>
                    <span>${obj.salary}</span>
                    </p>
                    <button class="btn btn-xs sm:btn-md bg-base-300 text-info-content mb-2">Not Applied</button>
                    <p class=" text-[14px]  text-[#323B49] mb-3">${obj.description}</p>
                    <button id="interview-btn" onclick="interview_button(${index})" class="interview-btn btn btn-xs sm:btn-md btn-soft btn-accent w-28">INTERVIEW</button>
                    <button id="reject-btn" onclick="reject_button(${index})" class="btn btn-xs sm:btn-md btn-soft btn-secondary w-28">REJECTED</button>
                </div>
        `;
        int_job_container.append(job_cards);
        index++;
    };
}
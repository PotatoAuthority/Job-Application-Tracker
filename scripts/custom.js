function getElement(id){
    const elem = document.getElementById(id);
    return elem;
}

function section_job_counter(){
    document.getElementById('buttonALL').addEventListener('click', function(){
        document.getElementById('av_jobs_rej').classList.add('hidden');
        document.getElementById('av_jobs_int').classList.add('hidden');
        document.getElementById('av_jobs').classList.remove('hidden');
    })

    document.getElementById('buttonINTERVIEW').addEventListener('click', function(){
        document.getElementById('av_jobs_rej').classList.add('hidden');
        document.getElementById('av_jobs_int').classList.remove('hidden');
        document.getElementById('av_jobs').classList.add('hidden');
    })

    document.getElementById('buttonREJECT').addEventListener('click', function(){
        document.getElementById('av_jobs_rej').classList.remove('hidden');
        document.getElementById('av_jobs_int').classList.add('hidden');
        document.getElementById('av_jobs').classList.add('hidden');
    })
}

function loadJobCards(){
    //setting job number
    const jobNum = document.getElementById('av_jobs');
    const dashboardTotal = document.getElementById('dashboard-total-job');
    jobNum.innerText = jobList.length+' Jobs';
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

        let badgeHTML = "";
        if (obj.isInterviewed === true) {
            badgeHTML = `<button class="btn btn-success text-white mb-2">Interviewed</button>`;
        }
        else if (obj.isRejected === true) {
            badgeHTML = `<button class="btn btn-error text-white mb-2">Rejected</button>`;
        }
        else {
            badgeHTML = `<button class="btn bg-base-300 text-info-content mb-2">Not Applied</button>`;
        }
        
        job_cards.innerHTML = `
        <div class="text bg-base-200 rounded-[8px] p-6">
                    <div class="flex items-center justify-between">
                        <div>
                            <p class=" font-semibold text-[20px]   text-[#002C5C]">${obj.company_name}</p>
                            <p class=" text-[16px]  text-[#64748B]">${obj.position}</p>
                        </div>
                        <button onclick="deleteJob('${obj.company_name}')" class="btn btn-circle">
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
                    ${badgeHTML}
                    <p class=" text-[14px]  text-[#323B49] mb-3">${obj.description}</p>
                    <button id="interview-btn" onclick="interview_button('${obj.company_name}')" class="interview-btn btn btn-xs sm:btn-md btn-soft btn-success w-28">INTERVIEW</button>
                    <button id="reject-btn" onclick="reject_button('${obj.company_name}')" class="btn btn-xs sm:btn-md btn-soft btn-error w-28">REJECTED</button>
                </div>
        `;
        job_container.append(job_cards);
        index++;
    };
}

function deleteJob(company){
    if(interviewList.length !== 0){
        var index = 0;
        for(const elem of interviewList){
            if(elem.company_name === company){
                interviewList.splice(index,1);
                break;
            }
            index++;
        }
    }
    if(rejectList.length !== 0){
        var index = 0;
        for(const elem of rejectList){
            if(elem.company_name === company){
                rejectList.splice(index,1);
                break;
            }
            index++;
        }
    }
    if(jobList.length !== 0){
        var index = 0;
        for(const elem of jobList){
            if(elem.company_name === company){
                jobList.splice(index,1);
                break;
            }
            index++;
        }
    }
    
    loadJobCards();
    loadJobCards_Intewview();
    loadJobCards_Rejected();
}

function displaySection(event, id){
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




function interview_button(companny){
    //finding index of jobList
    var index_in_jobList = 0;
    for(var i = 0; i<jobList.length; i++){
        if(jobList[i].company_name == companny){
            index_in_jobList = i;
            break;
        }
    }
    if((jobList[index_in_jobList].isInterviewed === false)&&(jobList[index_in_jobList].isRejected === false)){
        // console.log(jobList[idx], 'inside condition 1');
        interviewList.push(jobList[index_in_jobList]);
        jobList[index_in_jobList].isInterviewed = true;
        // showBadge();
    }
    else if(jobList[index_in_jobList].isRejected===true){
        var rej_index = 0;
        for(const elem of rejectList){
            if(elem.company_name === companny){
                rejectList.splice(rej_index,1);
                interviewList.push(jobList[index_in_jobList]);

                jobList[index_in_jobList].isInterviewed = true;
                jobList[index_in_jobList].isRejected = false;
                break;
            }
            rej_index++;
        }
    }

    loadJobCards();
    loadJobCards_Intewview();
    loadJobCards_Rejected();
}

function reject_button(companny){
    var index_in_jobList = 0;
    for(var i = 0; i<jobList.length; i++){
        if(jobList[i].company_name == companny){
            index_in_jobList = i;
            break;
        }
    }
    if((jobList[index_in_jobList].isInterviewed === false)&&(jobList[index_in_jobList].isRejected === false)){
        // console.log(jobList[idx], 'inside condition 1');
        rejectList.push(jobList[index_in_jobList]);
        jobList[index_in_jobList].isRejected = true;
        // showBadge();
    }
    else if(jobList[index_in_jobList].isInterviewed===true){
        var inter_index = 0;
        for(const elem of interviewList){
            if(elem.company_name === companny){
                interviewList.splice(inter_index,1);
                rejectList.push(jobList[index_in_jobList]);

                jobList[index_in_jobList].isInterviewed = false;
                jobList[index_in_jobList].isRejected = true;
                break;
            }
            inter_index++;
        }
    }
  
    loadJobCards();
    loadJobCards_Intewview();
    loadJobCards_Rejected();
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
    //dashboard job count
    const inter_jobNum = document.getElementById('av_jobs_int');
    inter_jobNum.innerText = interviewList.length+' of '+jobList.length+' Jobs';
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
        
        let badgeHTML = "";
        if (obj.isInterviewed === true) {
            badgeHTML = `<button class="btn btn-success text-white mb-2">Interviewed</button>`;
        }
        else if (obj.isRejected === true) {
            badgeHTML = `<button class="btn btn-error text-white mb-2">Rejected</button>`;
        }
        else {
            badgeHTML = `<button class="btn bg-base-300 text-info-content mb-2">Not Applied</button>`;
        }

        const job_cards = document.createElement('div');
        job_cards.innerHTML = `
        <div class="text bg-base-200 rounded-[8px] p-6">
                    <div class="flex items-center justify-between">
                        <div>
                            <p class=" font-semibold text-[20px]   text-[#002C5C]">${obj.company_name}</p>
                            <p class=" text-[16px]  text-[#64748B]">${obj.position}</p>
                        </div>
                        <button onclick="deleteJob('${obj.company_name}')" class="btn btn-circle">
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
                    ${badgeHTML}
                    <p class=" text-[14px]  text-[#323B49] mb-3">${obj.description}</p>
                    <button id="interview-btn" onclick="interview_button('${obj.company_name}')" class="interview-btn btn btn-xs sm:btn-md btn-soft btn-success w-28">INTERVIEW</button>
                    <button id="reject-btn" onclick="reject_button('${obj.company_name}')" class="btn btn-xs sm:btn-md btn-soft btn-error w-28">REJECTED</button>
                </div>
        `;
        int_job_container.append(job_cards);
        index++;
    };
}
function loadJobCards_Rejected(){
    //setting reject job number
    const REJ_Num = document.getElementById('av_jobs_rej');
    REJ_Num.innerText = rejectList.length+' of '+jobList.length+' Jobs';

    const reject_jobNum = document.getElementById('dashboard-reject-job');
    reject_jobNum.innerText = rejectList.length;
    

    //toggle empty section
    const rej_job_container = getElement('reject-job-container');
    const emptyJob_reject_section = getElement('empty_reject');

    if(rejectList.length == 0){
        emptyJob_reject_section.classList.remove('hidden');
    }
    else{
        emptyJob_reject_section.classList.add('hidden');
    }

    //loading cards
    rej_job_container.innerHTML = '';
    var index = 0;
    for(const obj of rejectList){
        
        let badgeHTML = "";
        if (obj.isInterviewed === true) {
            badgeHTML = `<button class="btn btn-success text-white mb-2">Interviewed</button>`;
        }
        else if (obj.isRejected === true) {
            badgeHTML = `<button class="btn btn-error text-white mb-2">Rejected</button>`;
        }
        else {
            badgeHTML = `<button class="btn bg-base-300 text-info-content mb-2">Not Applied</button>`;
        }

        const job_cards = document.createElement('div');
        job_cards.innerHTML = `
        <div class="text bg-base-200 rounded-[8px] p-6">
                    <div class="flex items-center justify-between">
                        <div>
                            <p class=" font-semibold text-[20px]   text-[#002C5C]">${obj.company_name}</p>
                            <p class=" text-[16px]  text-[#64748B]">${obj.position}</p>
                        </div>
                        <button onclick="deleteJob('${obj.company_name}')" class="btn btn-circle">
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
                    ${badgeHTML}
                    <p class=" text-[14px]  text-[#323B49] mb-3">${obj.description}</p>
                    <button id="interview-btn" onclick="interview_button('${obj.company_name}')" class="interview-btn btn btn-xs sm:btn-md btn-soft btn-success w-28">INTERVIEW</button>
                    <button id="reject-btn" onclick="reject_button('${obj.company_name}')" class="btn btn-xs sm:btn-md btn-soft btn-error w-28">REJECTED</button>
                </div>
        `;
        rej_job_container.append(job_cards);
        index++;
    };
}
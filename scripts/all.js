console.log('all.js connected');

//setting job number
const jobNum = document.getElementById('av_jobs');
jobNum.innerText = jobList.length;

const job_container = getElement('all-job-container');
const emptyJob_all_section = getElement('empty_all');

if(jobList.length == 0){
    emptyJob_all_section.classList.remove('hidden');
}
else{
    emptyJob_all_section.classList.add('hidden');
}

//displaying all jobs
for(const obj of jobList){
    const job_cards = document.createElement('div');
    job_cards.innerHTML = `
    <div class="text bg-base-200 rounded-[8px] p-6">
                <p class=" font-semibold text-[20px]   text-[#002C5C]">${obj.company_name}</p>
                <p class=" text-[16px]  text-[#64748B]">${obj.position}</p>
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
                <button class="btn btn-xs sm:btn-md btn-soft btn-accent w-28">INTERVIEW</button>
                <button class="btn btn-xs sm:btn-md btn-soft btn-secondary w-28">REJECTED</button>
            </div>
    `;
    job_container.append(job_cards);
};


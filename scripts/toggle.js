function toggle(indx){
    var index = 0;
    var found = false;
    //check if isInterview is true
    if(jobList[indx].isInterviewed === true){
        index = 0;
        found = false;
        for(const elem of interviewList){
            if(elem.company_name === jobList[indx].company_name){
                found = true;
                jobList[indx].isInterviewed = false;

                jobList[indx].isRejected = true;
                rejectList.push(jobList[indx]);
                break;
            }
            index++;
        }
        interviewList.splice(index,1);
    }  //check if isreject is false
    else if(jobList[indx].isRejected === true){
        index = 0;
        found = false;
        for(const elem of rejectList){
            if(elem.company_name === jobList[indx].company_name){
                found = true;
                jobList[indx].isRejected = false;

                jobList[indx].isInterviewed = true;
                interviewList.push(jobList[indx]);
                break;
            }
            index++;
        }
        rejectList.splice(index,1);
    }
    
}


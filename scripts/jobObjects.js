const jobList = [
    createJob('Mobile First Corp', 'React Native Developer', 'Remote', 'Full-time', '$130,000 - $175,000', 'Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.', false, false),
    createJob('WebFlow Agency', 'Web Designer & Developer', 'Los Angeles, CA', 'Part-time', '$80,000 - $120,000', 'Create stunning web experiences for high-profile clients. Must have portfolio and experience with modern web design trends.', false, false),
    createJob('DataViz Solutions', 'Data Visualization Specialist', 'Boston, MA', 'Full-time', '$125,000 - $165,000', 'Transform complex data into compelling visualizations. Required skills: D3.js, React, and strong analytical thinking.', false, false),
    createJob('CloudFirst Inc', 'Backend Developer', 'Seattle, WA', 'Full-time', '$140,000 - $190,000', 'Design and maintain scalable backend systems using Python and AWS. Work with modern DevOps practices and cloud infrastructure.', false, false),
    createJob('Innovation Labs', 'UI/UX Engineer', 'Austin, TX', 'Full-time', '$110,000 - $150,000', 'Create beautiful and functional user interfaces for our suite of products. Strong design skills and frontend development expertise required.', false, false),
    createJob('MegaCorp Solutions', 'JavaScript Developer', 'New York, NY', 'Full-time', '$130,000 - $170,00', 'Build enterprise applications with JavaScript and modern frameworks. We offer competitive compensation, health insurance, and professional development opportunities.', false, false),
    createJob('StartupXYZ', 'Full Stack Engineer', 'Remote', 'Full-time', '$120,000 - $160,000', 'Join our fast-growing startup and work on our core platform. Experience with Node.js and React required. Great benefits and equity package included.', false, false),
    createJob('TechCorp Industries', 'Senior Frontend Developer', 'San Francisco, CA', 'Full-time', '$130,000 - $175,000', 'We are looking for an experienced Frontend Developer to build scalable web applications using React and TypeScript. You will work with a talented team on cutting-edge projects.', false, false)

];

function createJob(comp, pos, loc, typ, sal, des, isIn, isRej){
    const job = {
        company_name: comp,
        position: pos,
        location: loc,
        type: typ,
        salary: sal,
        description: des,
        isInterviewed: isIn,
        isRejected: isRej
    };
    return job


};

console.log(jobList);
const newman = require('newman');

 
newman.run({
    // past collection url 
    
    collection:`SQALOGY_B3_EmployeeApiiiii.postman_collection.json`,
    // environment 
    reporters: 'htmlextra',
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './Reports/report.html', // If not specified, the file will be written to `newman/` in the current working directory.
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});

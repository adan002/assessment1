/*
    For this section of the assessment you will be putting together a cheat sheet for common  commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'Definition'.
    It should be a string containing your best definition of what  is.
*/

const Definition = "Git is a version control program. that allows to keep track of changes and keep track of themtaking snapshots of the projects.";


//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'HubDefinition'.  
    It should be a string containing your best definition of what Hub is.
*/

const hubDefinition = "A tracker allows to track git repositories,allowing to store, to update and access projects form miltiple devices.";

//////////////////PROBLEMS 3 - 8////////////////////
/*
    For the next several problems you will be creating objects containing information about different  
    commands.  Each object should contain 'description' and 'code' properties.  The 'description' property 
    will be a string with a description of what that  command does.  The 'code' property should be a 
    string of the actual command (what you type into your terminal).
*/

//////////////////PROBLEM 3////////////////////
/*
    Create an object called 'init' with 'description' and 'code' properties 
    following the guidelines above to describe the init command.
*/

const gitInit = "Creates a git reposotories in the directory in which in runs in."
//////////////////PROBLEM 4////////////////////
/*
    Create an object called 'clone' with 'description' and 'code' properties 
    following the guidelines above to describe the clone command.
*/
const gitClone = "copy a file from github into devices"

//////////////////PROBLEM 5////////////////////
/*
    Create an object called 'status' with 'description' and 'code' properties 
    following the guidelines above to describe the status command.
*/

const gitStatus = "Shows if there has been any changes to the repo from the last commit, and if it is being tracked or not."

//////////////////PROBLEM 6////////////////////
/*
    Create an object called 'add' with 'description' and 'code' properties 
    following the guidelines above to describe the add command.
*/

const gitAdd = "Tells git to begin tracking changes in specific files."

//////////////////PROBLEM 7////////////////////
/*
    Create an object called 'commit' with 'description' and 'code' properties
    following the guidelines above to describe the commit command.
*/

const gitCommit = "Takes a snapshot of project at the time the cammand is run."

const gitCommitCode = 'git commit m- "message"'

//////////////////PROBLEM 8////////////////////
/*
    Create an object called 'push' with 'description' and 'code' properties 
    following the guidelines above to describe the push command.
*/

const gitpush = "updates corresponding remote repo with any new commits since last push."


console.log
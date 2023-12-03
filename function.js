// // creating class for every aspect of the menu game, team, players, 

// class Player {
//     constructor(name, position){
//         this.name = name;
//         this.position = position;
//     }

//     // calling class like you would a function
//     describe(){
//         return `${this.name} plays ${this.position}.`;
        
//     }
    
// }
// // creating class for team
// class Team{
//     constructor(name){
//         this.name = name;
//         // every time a team is created its fed thru the array
//         this.players = [];
//     }
//     // method that checks to see if player is an instance of the player class
//     // that way user cant enter numbers
//     addPlayer(player) {
        
//         if (player instanceof Player){
//             this.players.push(player);
//         } else {
//             throw new Error(`you can only add a Player. Argument is not a player: ${player}`);
//         }
//     }
//     describe(){
//         return `${this.name} has ${this.players.length} players.`;
//         // above will return the team name and how many players are on the team
//     }
// }
// //  creating class for the menu
// class Menu{
//     constructor() {
//         // array for multiple teams
//         this.teams = [];
//         // below lets us know what team is selected,
//         //  set to null as no team is selected starting
//         this.selectedTeam = null;
//     }
//     // method for user selection
//     start(){
//         let selection = this.showMainMenuOptions();
//         // using selection variable to determine what the user selected
//         while (selection != 0){
//             // using a switch to tree out responses to user selections
//             switch (selection){
//                 // if user selects 1 create new team
//                 case '1':
//                   this.createTeam();
//                   break;
//                 // if user selects 2 select a specific team
//                 case '2':
//                     this.viewTeam();
//                     break;
//                 // if user selects 3 delete a team
//                 case '3':
//                     this.deleteTeam();
//                     break;
//                 //  if user selects 4
//                 case '4': 
//                   this.displayTeams();
//                   break;
//                 //   if they select anything else 
//                 default:
//                     selection = 0;
//             //     above is setup to keep looping if 
//             }
//         //    outside of switch but still inside of loop  // 
//         selection = this.showMainMenuOptions();
//         }
//     //  if user selects zero it will go to alert
//         alert('goodbye!');
//     }
//     //  programming methods used above, this one displays the menu
//     showMainMenuOptions(){
//         // will pop up box asking for a selection from the user
//         return prompt(`
//         0) Exit
//         1) Create New Team
//         2) View Team
//         3) Delete Team
//         4)Display All Teams

//         `);
//     }

//     showTeamMenuOptions(teamInfo){
//         return prompt(`
//         0) Back
//         1) Create Player
//         2) Delete Player
//         ---------------------------
//         ${teamInfo}
        
//         `);
//     }
//     // displayTeams method below
//     displayTeams(){
//         let teamString = '';
//         // looping thru teams 
//         for (let i = 0; i < this.teams.length; i++){
//             teamString += i + ') ' + this.teams[i].name + '\n';
//         }
//         // pops alert to display teams
//         alert (teamString);
//     }
//     //  create a team
//     createTeam() {
//         let name = prompt('Enter Name of new team: ');
//         this.teams.push(new Team(name));
//     }
//     //  view all teams
//     viewTeam() {
//         let index = prompt('Enter the index of the team you wish to view:');
//         // validating user input below, 
//         if (index > -1 && index < this.teams.length) {
//             // set class property to team input by the user below
//             this.selectedTeam = this.teams[index];
//             // building team description to print out
//         let description = 'Team Name: ' + this.selectedTeam.name + '\n';
//         // adding for loop to describe indiviudal players

//         for (let i = 0; i < this.selectedTeam.players.length; i++) {
//              description += i +') '+ this.selectedTeam.players[i].name + 
//              ' - ' + this.selectedTeam.players[i].position + '\n';
//         }
//         // passing in description we built above
//         let selection = this.showTeamMenuOptions(description);
//         switch (selection){
//             case '1':
//                 this.createPlayer();
//                 break;
//             case '2':
//                 this.deletePlayer();
//         } 
//         // no break needed above

//         }
//     }
//     // creating delete team code below

//     deleteTeam(){
//         let index = prompt('Enter the index of tje team you wish to delete: ');
//         // user validating with fi statement 
//         if(index > -1 && index < this.teams.length){
//             this.teams.splice(index, 1);
//         }
//     }
//     // this is the method for create player menu option
//     // methods must be placed outside fo the previous
//     //  method but within the class below
//     // **********************************
//     // code to push newly created players to teams
//     createPlayer(){

//         let name = prompt('Enter name for new player: ');
//         let position = prompt('Enter position for new player: ');
//         // refering to variable players below 
//         this.selectedTeam.players.push(new Player(name, position));

//     }
//     // code for deleting a player in menu
//     deletePlayer(){
//         let index = prompt('Enter the index of the player you wish to delete.');
//         if (index > -1 && index < this.selectedTeam.players.length) {
//             this.selectedTeam.players.splice(index, 1);
//         }
        
//     }
    
//     }

//     // creating instance of code block above
//     let menu = new Menu();
//     menu.start();







    // Alternate Implementation -- Using UNUSED methods:
    // There are a number of methods that are created in this
    //  video series that are not used in the video implementation.  
    // The unused methods allow you to change the implementation if desired.   
    
    // Here is a list of the unused methods:
    // In the Player class:
    // describe()  -- notice that the implementation 
    // changed a bit to allow it to be used
    // In the Team class:

    // describe()
    // addPlayer()

    // Below  is an alternative way to implement the code from the 
    // videos using the above list of  methods.  Look for the italicized 
    // commented out code, and the bold replacement code. 


// ***** ALTERNATE WAY OF CODING IT ***********
// Teams and Players on those teams

class Player {
    constructor(name, position) {
    this.name = name;
    this.position = position;
    }
    
    describe() {
    //console.log(`${this.name} plays ${this.position}`)
    return `${this.name} plays ${this.position}`;
    }
    }
    class Team {
    constructor(name) {
    this.name = name;
    this.players = [];
    }
    
    addPlayer(player) {
    if (player instanceof Player) {
    this.players.push(player);
    } else {
    throw new Error(`You can only add an instance of Player. 
    argument is not a player: ${player}`);
    }
    }
    
    describe() {
    return `${this.name} has ${this.players.length} players.`;
    }
    }
    class Menu { // what drives the application and our choices
    constructor() {
    this.teams = [];
    this.selectedTeam = null; // manage one team at a time
    }
    
    start() { // entry point to application
    let selection = this.showMainMenuOptions(); 
    while (selection != 0) {
    switch(selection) {
    case '1' :
    this.createTeam();
    break;
    case '2' :
    this.viewTeam();
    break;
    case '3' :
    this.deleteTeam();
    break;
    case '4' :
    this.displayTeams();
    break;
    default:
    selection = 0;
    }
    selection = this.showMainMenuOptions();
    }
    alert('Goodbye!');
    }
    
    
    showMainMenuOptions() {
    return prompt(`
    0) exit
    1) create a new team
    2) view a team
    3) delete a team
    4) display all teams
    `);
    }
    
    showTeamMenuOptions(teamInfo) {
    return prompt(`
    0) back
    1) add a new player
    2) delete a player
    -----------------
    ${teamInfo}
    `);
    }
    
    displayTeams() {
    let teamString = '';
    for (let i = 0; i < this.teams.length; i++) {
    teamString += i+ ') ' + this.teams[i].name + '\n';
    }
    alert(teamString);
    }
    
    createTeam() {
    let name = prompt('Enter name for new team: ');
    this.teams.push(new Team(name));
    }
    
    viewTeam() {
    let index = prompt("Enter the index of the team that you want to view:");
    if (index > -1 && index < this.teams.length) {
    this.selectedTeam = this.teams[index];
    let description = 'Team Name: ' + this.selectedTeam.name + '\n';
    description += ' ' + this.selectedTeam.describe() + '\n ';
    for (let i = 0; i < this.selectedTeam.players.length; i++) {
    // description += i + ') ' + this.selectedTeam.players[i].name + ' - '
    // + this.selectedTeam.players[i].position + '\n';
    description += i + ') ' + this.selectedTeam.players[i].describe() + '\n';
    }
    let selection1 = this.showTeamMenuOptions(description);
    switch (selection1) {
    case '1' :
    this.createPlayer();
    break;
    case '2' :
    this.deletePlayer();
    }
    } // validate user input
    }
    
    deleteTeam() {
    let index = prompt('Enter the index of the team that you wish to delete: ');
    if (index > -1 && index < this.teams.length) {
    this.teams.splice(index,1);
    }
    }
    
    
    createPlayer() {
    let name = prompt('Enter name for new player: ');
    let position = prompt('Enter position for new player: ');
    //this.selectedTeam.players.push(new Player(name, position));
    this.selectedTeam.addPlayer(new Player(name,position));
    }
    
    deletePlayer() {
    let index = prompt('Enter the index of the player that you wish to delete: ');
    if (index > -1 && index < this.selectedTeam.players.length) { this.selectedTeam.players.splice(index,1);
    }
    }
    }
    let menu = new Menu();
    menu.start();
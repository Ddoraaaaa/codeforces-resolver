import { Teams, Problems, ContestInfo } from "../ContestContext";
import swap from "./Helper";
const progressScoreboard = (contestInfo:ContestInfo) => {
    var teams:Teams[] = [...contestInfo.teamList]
    var curTeam = contestInfo.curTeam;
    var lastMoved = contestInfo.lastMoved;
    if(curTeam === -1) {
        console.log("ended");
    }
    else {
        let foundHidden = false;
        for(let i = 0; i < teams[curTeam].problems.length; i++) {
            if(teams[curTeam].problems[i].hidden) {
                console.log(i);
                teams[curTeam].problems[i].hidden = false;
                foundHidden = true;
                lastMoved = teams[curTeam].teamId;
                if(teams[curTeam].problems[i].accepted) {
                    teams[curTeam].solved++;
                    teams[curTeam].penalty += teams[curTeam].problems[i].penalty;
                }
                break;
            }
        }
        if(!foundHidden) {
            curTeam--;
        }
        else {
            for(let i=teams.length-2; i>=0; i--) {
                if(teams[i].solved < teams[i+1].solved) {
                    console.log("hey!");
                    swap(teams, i);
                    console.log(teams)
                }
                else if(teams[i].solved === teams[i+1].solved && teams[i].penalty > teams[i+1].penalty) {
                    console.log("hey!");
                    swap(teams, i);
                    console.log(teams)
                } 
            }
        }
    }
    console.log(curTeam)
    contestInfo.teamList = teams
    contestInfo.curTeam = curTeam
    contestInfo.lastMoved = lastMoved
}

export default progressScoreboard;
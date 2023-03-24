import { Teams, Problems, ContestInfo } from "../ContestContext";

const progressScoreboard = (contestInfo:ContestInfo) => {
    var teams:Teams[] = [...contestInfo.teamList]
    var curTeam = contestInfo.curTeam
    for(let i = 0; i < teams[curTeam].problems; i++) {
        if(teams[curTeam].problems[i].hidden) {
            teams[curTeam].problems[i].hidden = false;
            if(teams[curTeam].problems[i].accepted) {
                teams[curTeam].solved++;
                teams[curTeam].penalty += teams[curTeam].problems[i].penalty;
            }
        }
    }
}

export default progressScoreboard;
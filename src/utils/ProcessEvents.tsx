import { Teams, Problems, ContestInfo } from "../ContestContext";

const applyEvents = (contestInfo:ContestInfo) => {
    const eventList:string[] = contestInfo.contestLog.split("\n");
    const teamNames:string[] = contestInfo.domainAcc.split("\n");
    var domainAccNames: {[key: string]: string} = {}
    var contestName:string = "", problemCnt:number = 0;
    var problemList: Problems[] = [];
    var teamList:Teams[] = [];
    for(let team of teamNames) {
        let temp = team.split(' | ');
        domainAccNames[temp[1]] = temp[3];
    }
    for(let event of eventList) {
        if(event.startsWith("@contest ")) {
            contestName = event.slice(10, -1);
            contestInfo.name = contestName
            console.log(contestName)
        }
        else if(event.startsWith("@problems ")) {
            problemCnt = parseInt(event.slice(10))
            console.log(problemCnt)
        }
        else if(event.startsWith("@t ")) {
            let teamInfo: string[] = event.slice(3).split(',');
            const teamName = teamInfo[3].startsWith("g21217=") ? domainAccNames[teamInfo[3].slice(7)] : teamInfo[3];
            console.log(teamInfo)
            teamList.push({
                teamId: teamList.length,
                teamName: teamName,
                solved: 0,
                penalty: 0,
                problems: [],
            })
            for(let i = 1; i <= problemCnt; i++) {
                teamList[teamList.length - 1].problems.push({
                    cntSub: 0,
                    lastSub: 0,
                    accepted: false,
                    hidden: false,
                    penalty: 0
                })
            }
        }
        else if(event.startsWith("@s ")) {
            let subInfo: string[] = event.slice(3).split(',');
            const teamId = parseInt(subInfo[0]) - 1;
            const problemId = subInfo[1].charCodeAt(0) - 'A'.charCodeAt(0);
            const submittedAt = parseInt(subInfo[3]);
            const result = subInfo[4];
            console.log(teamId, problemId, submittedAt, result)

            if(result === 'CE') {
                continue;
            }
            if(result === 'OK') {
                if(teamList[teamId].problems[problemId].accepted === true) {
                    continue;
                } 
                if(submittedAt >= contestInfo.freezeTime) {
                    teamList[teamId].problems[problemId].accepted = true;
                    teamList[teamId].problems[problemId].hidden = true;
                    teamList[teamId].problems[problemId].lastSub = submittedAt;
                    teamList[teamId].problems[problemId].penalty += Math.floor(submittedAt/60);
                }
                else {
                    teamList[teamId].problems[problemId].accepted = true;
                    teamList[teamId].problems[problemId].lastSub = submittedAt;
                    teamList[teamId].problems[problemId].penalty += Math.floor(submittedAt/60);
                    teamList[teamId].penalty += teamList[teamId].problems[problemId].penalty;
                    teamList[teamId].solved++;
                }
            }
            // else {
            if(result === 'RJ') {
                if(teamList[teamId].problems[problemId].accepted === true) {
                    continue;
                } 
                if(submittedAt >= contestInfo.freezeTime) {
                    teamList[teamId].problems[problemId].hidden = true;
                    teamList[teamId].problems[problemId].lastSub = submittedAt;
                    teamList[teamId].problems[problemId].penalty += 20;
                    teamList[teamId].problems[problemId].cntSub ++;
                }
                else {
                    teamList[teamId].problems[problemId].lastSub = submittedAt;
                    teamList[teamId].problems[problemId].penalty += 20;
                    teamList[teamId].problems[problemId].cntSub ++;
                }
            }
        }
    }
    contestInfo.curTeam = teamList.length - 1
    contestInfo.teamList = teamList;
}

export default applyEvents;
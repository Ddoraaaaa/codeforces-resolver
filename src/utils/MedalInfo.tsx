export default function getMedal(index: any, contestInfo: any) {
    var res = ""
    if(index <= contestInfo.curTeam) {
        res = "";
    }
    else if(index < contestInfo.goldCount) {
        res = " gold-medal";
    }
    else if(index < contestInfo.goldCount + contestInfo.silverCount) {
        res = " silver-medal";
    }
    else if(index < contestInfo.goldCount + contestInfo.silverCount + contestInfo.bronzeCount) {
        res =  " bronze-medal";
    }
    else {
        res = "";
    }
    console.log(index, res);
    return res;
}
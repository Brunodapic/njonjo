
export const robotUpgrade = (robotLevel,cluodLevel,rainbowLevel) =>{
    return robotLevel*60*1000-cluodLevel*30*1000-rainbowLevel*15*1000
}


export const cluodLevelUpgrade = (robotLevel,cluodLevel) =>{
    return (cluodLevel*60*1000)/(robotLevel**robotLevel)
}

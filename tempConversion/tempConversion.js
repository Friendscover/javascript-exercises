const ftoc = function(isDegree)
{
    let newDegree = (isDegree - 32) * (5/9);
    newDegree = Math.round(newDegree * 10) / 10;
    return newDegree;
}

const ctof = function(isDegree) 
{
    let newDegree = (isDegree * (9/5)) + 32;
    newDegree = Math.round(newDegree * 10) / 10;
    return newDegree;
}

module.exports = {
  ftoc,
  ctof
}

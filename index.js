// code your solution here
const record = [
    {year: "2018", result: "L"},
    {year: "2017", result: "W"},
    {year: "2016", result: "N/A"}
    //...
  ]

  function superbowlWin(avarages){

    for(const avarage of avarages){

if(avarage.result==='W'){
    return avarage.year
}

}
  }


 
    record.find(superbowlWin(record));

  
  
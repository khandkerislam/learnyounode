const arguments = process.argv
console.log(arguments.reduce((acc,currentValue,currentIndex,array)=>{
    return currentIndex >= 2 ? acc + Number(currentValue) : acc;
  },0));
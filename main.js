//debugger;

// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

function pAequorFactory(number, dnaBaseArray){
  newPAquor = {
    specimenNum: number,
    dna: dnaBaseArray,
    mutate(){
      let oldStrand = this.dna; 
      this.dna = mockUpStrand();
      for(let i = 0; i < this.dna.length; i++){
        let bases = ['A', 'T', 'C', 'G'];
        if(this.dna[i] === oldStrand[i]){
          bases.splice(bases.findIndex((element)=>(element === this.dna[i])), 1);
        this.dna[i] = bases[Math.floor(Math.random() * bases.length)];
        }
      }
    },
    compareDNA(pAequorObject){
      let identicalValues = 0;
      for(let i = 0; i < this.dna.length; i++){
        if(this.dna[i] === pAequorObject.dna[i]){
          identicalValues ++;
        }
      }
      console.log(identicalValues);
      let percentageOfValues = identicalValues / this.dna.length * 100; 
      return `Specimen ${pAequorObject.specimenNum} and Specimen ${this.specimenNum} have ${percentageOfValues.toFixed(2)}% DNA in common.`; 
  },
  willLikelySurvive(){
    let CGcounter = 0; 
    for(let i = 0; i < this.dna.length; i++){
      if (this.dna[i] === 'C' || this.dna[i] === 'G'){
        CGcounter++;
      }
    }
    CGpercentage = CGcounter / this.dna.length * 100;
    if(CGpercentage >= 60){
      return true;
    }else{
      return false;
    }
    }
  }
  return newPAquor;
}

let pAequorArray = [];
let specimenNumber = 1;
while (pAequorArray.length < 30){ 
 let newSpecimen = pAequorFactory(specimenNumber, mockUpStrand());
 if(newSpecimen.willLikelySurvive() === true){
   pAequorArray.push(newSpecimen);
   specimenNumber++;
 } else {
   continue;
 }
}

console.log(pAequorArray);
/*

//For testing willLikelySurvive
for(let j = 0; j < pAequorArray.length; j++){
  console.log(pAequorArray[j].willLikelySurvive());
}
  
let specimen1 = pAequorFactory(1234, mockUpStrand());
let specimen2 = pAequorFactory(4567, mockUpStrand());
console.log(specimen1.compareDNA(specimen2));
console.log(specimen1.willLikelySurvive());
console.log(specimen2.willLikelySurvive());
*/






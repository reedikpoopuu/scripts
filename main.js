// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

function pAequorFactory(specimenNum, dna) {
  return({
    specimenNum,
    dna,
    mutate () {
      dnaBases = ['A', 'T', 'C', 'G'];
      this.dna = this.dna.map(base => {
        let initial = base;
        while(initial == base) {
          base = dnaBases[Math.floor(Math.random() * 4)]
        };
        return base
      })
      },
    compareDNA (otherDNA) {
      let similar = 0;
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] == otherDNA.dna[i]) similar++;
      }
      console.log(`Specimen #1 and Specimen #2 have ${Math.floor((similar/this.dna.length)*100)}% DNA in common`)
    },
    willLikelySurvive () {
      let survival = 0;
      for(let i = 0; i < this.dna.length; i++) {
        if(this.dna[i] == 'C' || this.dna[i] == 'G') survival++
      }
      return (survival/this.dna.length) > 0.6 ? true : false
    }
    })
  }

let amphib = pAequorFactory(4437227, mockUpStrand());
let analogue = pAequorFactory(118, mockUpStrand());
console.log(amphib.dna);
console.log(analogue.dna);
amphib.compareDNA(analogue);
console.log(analogue.willLikelySurvive());


const generator = (numberNeeded) => {
  let batch = new Array(numberNeeded);
  for(let i = 0; i < numberNeeded; i++) {
    batch[i] = new pAequorFactory((1000 + i), mockUpStrand());
    if(batch[i].willLikelySurvive() == false) {
      batch.pop();
      i--
    }
  }
  return batch
  }
let newBatch = generator(60);
for(let i = 0; i < newBatch.length; i++) console.log(newBatch[i].willLikelySurvive())
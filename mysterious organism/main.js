// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ["A", "T", "C", "G"];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (no, arr) => {
  const object = {
    specimenNum: no,
    dna: arr,
    mutate() {
      let randomEle = Math.floor(Math.random() * 15);
      let randomReplace = returnRandBase();
      if (randomReplace == arr[randomEle]) {
        while (randomReplace == arr[randomEle])
          randomReplace = returnRandBase();
      }

      console.log(arr[randomEle], randomReplace);
      arr[randomEle] = arr[randomReplace];
    },
    compareDNA(pAequor) {
      let identicalCount = 0;
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === pAequor.dna[i]) {
          identicalCount++;
        }
      }
      const percentage = (identicalCount / this.dna.length) * 100;
      console.log(
        `specimen #${this.specimenNum} and specimen #${
          pAequor.specimenNum
        } have ${percentage.toFixed(2)}% DNA in common`
      );
    },
    willLikelySurvive() {
      let count = 0;
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === "C" || this.dna[i] === "G") count++;
      }
      if ((count / this.dna.length) * 100 >= 60) return true;
      else return false;
    },
    //extra task9
    complementStrand() {
      return this.dna.map((base) => {
        switch (base) {
          case "A":
            return "T";
          case "T":
            return "A";
          case "C":
            return "G";
          case "G":
            return "C";
        }
      });
    },
  };
  return object;
};

const survivingSpecimens = [];
let specimenNum = 1;

while (survivingSpecimens.length < 30) {
  const newOrganism = pAequorFactory(specimenNum, mockUpStrand());
  if (newOrganism.willLikelySurvive()) {
    survivingSpecimens.push(newOrganism);
  }
  specimenNum++;
}

console.log(survivingSpecimens);
//extra task9
function findMostRelated(pAequorArray) {
  let maxPercentage = 0;
  let mostRelatedPair = [];

  for (let i = 0; i < pAequorArray.length; i++) {
    for (let j = i + 1; j < pAequorArray.length; j++) {
      let identicalCount = 0;
      for (let k = 0; k < pAequorArray[i].dna.length; k++) {
        if (pAequorArray[i].dna[k] === pAequorArray[j].dna[k]) {
          identicalCount++;
        }
      }
      const percentage = (identicalCount / pAequorArray[i].dna.length) * 100;
      if (percentage > maxPercentage) {
        maxPercentage = percentage;
        mostRelatedPair = [pAequorArray[i], pAequorArray[j]];
      }
    }
  }

  console.log(`The most related specimens are #${mostRelatedPair[0].specimenNum} and #${mostRelatedPair[1].specimenNum} with ${maxPercentage.toFixed(2)}% DNA in common.`);
}

findMostRelated(survivingSpecimens);

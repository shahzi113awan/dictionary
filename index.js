// const fs = require('fs');
// const obj = {
//     "T": 2,
//     "testCases": [
//       {
//         "N": 4,
//         "Q": 6,
//         "dictionary": [
//           [
//             "big",
//             "large"
//           ],
//           [
//             "large",
//             "huge"
//           ],
//           [
//             "small",
//             "little"
//           ],
//           [
//             "apple",
//             "banana"
//           ]
//         ],
//         "queries": [
//           [
//             "same",
//             "same"
//           ],
//           [
//             "big",
//             "huge"
//           ],
//           [
//             "huge",
//             "big"
//           ],
//           [
//             "apple",
//             "peach"
//           ],
//           [
//             "big",
//             "tall"
//           ],
//           [
//             "peach",
//             "PEACH"
//           ]
//         ]
//       },
//       {
//         "N": 5,
//         "Q": 2,
//         "dictionary": [
//           [
//             "wood",
//             "FORest"
//           ],
//           [
//             "meadoW",
//             "PrAirIe"
//           ],
//           [
//             "WOOD",
//             "Lumber"
//           ],
//           [
//             "lumber",
//             "forest"
//           ],
//           [
//             "lumber",
//             "forest"
//           ]
//         ],
//         "queries": [
//           [
//             "wood",
//             "LUMBER"
//           ],
//           [
//             "mEADOw",
//             "fire"
//           ]
//         ]
//       }
//     ]
//   }
//   console.log(obj.testCases[0].N)
// const inputFile = fs.readFileSync('example.in.json', 'utf8', (err, data) => {
//     if (err) {
//       console.error(err);
//       return;
//     }
//     return data;
//   });

//   const CheckSynonum = (inputFile) => {
//       const obj = JSON.parse(inputFile)
//     const synonymChecker = (word,synonm) => { 
 
//         obj.testCases.map((a)=>{
//             a.dictionary.map((b)=>{
          
//                 if(b[0].toLowerCase()===word.toLowerCase()){
//                     console.log("first")
//                     if(b[1].toLowerCase()===synonm.toLowerCase()){
//                         console.log("sec")
//                         console.log("Synonm")
//                     }
//                 }
//             })
//         })
//      }
//      obj.testCases.map((a)=>{
//         a.queries.map((b)=>{
//             if(b[0]===b[1]){
//                 console.log("synonm")
//             }
//             else {
//                 synonymChecker(b[0],b[1])
//             }
// // console.log(b)
//         })
//      })
//    }

   
//   CheckSynonum(inputFile)
// // const readline = require('readline').createInterface({
// //     input: process.stdin,
// //     output: process.stdout
// //   });
  
// //   readline.question('Please Enter TestCases', async(t) => {
// //     const dictionary = {}
// //             dictionary.T = t
// //                     await readline.question("please Enter Length of Dictionary",async(n)=>{
// //                         dictionary.N = n
// //                         for (let i = 0; i < dictionary.N; i++) {
// //                            await readline.question("please Enter Length of Word",async(w)=>{
// //                               await  readline.question("Please Enter the Synonyms of word",async(s)=>{
// //                                     dictionary.dictionary.push(w)
// //                                 })
// //                             })
                            
// //                         }
// //                     })
// //     readline.close();
// //   });


// // let dictionaryOfWords = []
// // //Read input instance
// // const rl = readline.createInterface({
// //     input: process.stdin,
// //     output: process.stdout
// // });

// // async function readInput(num) {

// //     await rl.question('Please enter the word : ', async (word) => {
// //         await rl.question('Please enter the synonymous : ', async (synonymous) => {
// //             dictionaryOfWords = [...dictionaryOfWords, { word, synonymous }]
// //             await fs.writeFile("dictionary.json", JSON.stringify(dictionaryOfWords), function (err) {
// //                 if (err) {
// //                     return console.log(err);
// //                 }
// //             });
// //             if (num > 0) {
// //                 readInput(num - 1)
// //             }
// //             else {
// //                 rl.close();

// //             }
// //         });
// //     });

// // }

// // // readInput(6)

// // async function queryInput(){

// //    await rl.question('Please enter the Query : ', async (num) => {
// //        if(typeof num === 'number'){
// //             query = +num
// //        }
// //        else{
// //            query = parseInt(num)
// //        }
// //        rl.close()
// //    }    );
// // }

// // // async function inputs(){
// // //  await queryInput()
// // //  await takeInputs(query)
// // // }


// // async function takeInputs(num) {
// //     console.log(num)
// //     await rl.question('Please enter the word : ', async (word) => {
// //         await rl.question('Please enter the synonymous : ', async (synonymous) => {
// //             dictionaryOfWords = [...dictionaryOfWords, { word, synonymous }]
// //             await fs.writeFile("dictionary.json", JSON.stringify(dictionaryOfWords), function (err) {
// //                 if (err) {
// //                     return console.log(err);
// //                 }
// //             });
// //             if (num > 0) {
// //                 readInput(num - 1)
// //             }
// //             else {
// //                 rl.close();

// //             }
// //         });
// //     });
// // }
// // takeInputs(3)
// // // console.log(dictionaryOfWords)

const fs = require('fs');

const dic = fs.readFileSync('test.in', 'utf8');
const lines = dic.split('\n');
let output = [];
const testCases = lines.shift()*1 ;
let caseLength = [];
let counter = 0;
let linesObj = {};
let lineNum = 0;
let dict = {};
lines.forEach(item => {
  if (!isNaN(item) && item !== '') {
    lineNum = item;
    caseLength.push(item);
    linesObj[lineNum] = [];
  } else {
    if(item !== '') {
      linesObj[lineNum] = linesObj[lineNum].length === 0 ? 
                    [item] : [...linesObj[lineNum], item];
    }
  }
  
})
const synonyms = (lines) => {
  let dict = {};
  for(let i=0; i<lines.length; i++){
    let [a, b] = lines[i].split(' ');
    a = a.toLocaleLowerCase();
    b = b.toLocaleLowerCase();
  
    if(dict[a] === undefined){
      dict[a] = [b]
    } else {
      dict[a] = [...dict[a], b];
      const item = dict[a][0]
      if(dict[item].includes(a)) {
        dict[item] = [...dict[item], b]
      }
    }
  
    if(dict[b] === undefined){
      dict[b] = [a]
    } else {
      dict[b] = [...dict[b], a];
      const item = dict[b][0]
      if(dict[item].includes(b)) {
        dict[item] = [...dict[item], a]
      }
    }
  }

  return dict;
}

const queryDict = (lines, dict) => {
  for(let i=0; i<lines.length; i++) {
      let [a, b] = lines[i].split(' ');
      a = a.toLocaleLowerCase();
      b = b.toLocaleLowerCase();
      if(dict[a]?.includes(b) ||
          dict[b]?.includes(a) ||
          a === b) 
          { output.push('synonyms') }
        else {
        output.push('different');
      }
  }
}

for(let index=0; index<caseLength.length; index++) {
    console.log(linesObj[caseLength[index]])
  item = linesObj[caseLength[index]];
  if(index === 0 || index % 2 === 0) {
    dict = synonyms(item);
  } else {
    queryDict(item, dict);
    counter++
    if(counter === testCases) break
  }
  
}

fs.writeFileSync('test.out', output.join('\n'));

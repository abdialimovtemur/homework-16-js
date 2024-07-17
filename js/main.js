//1. Berilgan ikki massivning umumiy elementlarini toping

let arr1 = [1, 2, 3, 4, 7]
let arr2 = [3, 4, 5, 6, 7]
function commonElements() {
    let result = []
    for (let i = 0; i < arr1.length; i++) {
        for (let g = 0; g < arr1.length; g++) {
            if (arr1[g] === arr2[i]) {
                result.push(arr1[g])
            }

        }
    }
    console.log(result)
}
// commonElements()








// 2. Berilgan ikki qatorning umumiy belgilarini qaytaring.

function commonCharacters(str1, str2) {
    let newArr = [];
    for (let i = 0; i < str1.length; i++) {
        if (str2.includes(str1[i]) && !newArr.includes(str1[i])) {
            newArr.push(str1[i]);
        }
    }
    console.log(newArr.join(','))
}

// commonCharacters("hello", "world"); // "lo"











// 3. Berilgan ikki massivdan simmetrik farqni toping (faqat birida bor va ikkinchisida yo'q elementlar)


function symmetricDifference(massArr1, massArr2) {
    let massNewArr = [];

    for (let i = 0; i < massArr1.length; i++) {
        if (!massArr2.includes(massArr1[i])) {
            massNewArr.push(massArr1[i]);
        }
    }

    for (let i = 0; i < massArr2.length; i++) {
        if (!massArr1.includes(massArr2[i])) {
            massNewArr.push(massArr2[i]);
        }
    }

    return massNewArr;
}

// console.log(symmetricDifference([1, 2, 3], [3, 4, 5])); // [1, 2, 4, 5]








// 4. Berilgan massiv ichida musbat, manfiy va nol qiymatli raqamlarning foizini hisoblang.


function calculatePercentages(Calcarr) {
    let positive = 0
    let negative = 0
    let zero = 0
    let calcArr = []
    Calcarr.forEach(element => {
        if (element > 0) {
            positive++
        } else if (element < 0) {
            negative++
        } else {
            zero++
        }
    });
    let positivePersent = `Positive ${(100 * positive) / Calcarr.length}`
    let negativePersent = `Negative ${(100 * negative) / Calcarr.length}`
    let zeroPersent = `Zero ${(100 * zero) / Calcarr.length}`
    calcArr.push(positivePersent, negativePersent, zeroPersent)
    console.log(calcArr)
}

// calculatePercentages([1, -2, 0, 4, -5, 6, 0]);










// 5. Berilgan qator ichidagi har bir elgini faqat bir marta qoldirib, unikal belgilar ketma-ketligini yarating.

function uniqueCharacters(str) {
    let result = [];
    for (let i = 0; i < str.length; i++) {
        if (!result.includes(str[i])) {
            result.push(str[i]);
        }
    }
    return result.join("");
}

// console.log(uniqueCharacters("hello world")); // "helo wrd"












// 6. Berilgan massivdan yig'indisi ma'lum bir qiymatga teng bo'lgan sonlar juftligini toping.


function findPairs(arr, target) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] === target) {
          result.push([arr[i], arr[j]]);
        }
      }
    }
    console.log(result);
  }
  
//   findPairs([1, 2, 3, 4, 5], 6); // [[1, 5], [2, 4]]
  









// 7. Berilgan massiv ichidagi har bir raqamning kvadratini hisoblang va yangi massiv qaytaring.


function squareNumbers(arr) {
    let squareNumberArr = []
    arr.forEach(element => {
        squareNumberArr.push(element * element)
    });
    console.log(squareNumberArr)
}

// console.log(squareNumbers([1, 2, 3, 4, 5])); 










// 8. Berilgan oraliqda nechta palindrom son borligini toping.

// let endNum = 100

function countPalindromNumbers(endNum) {
    let countStr = []
    for (let i = 1; i <= endNum; i++) {
        let reverse = parseInt(i.toString().split('').reverse().join(''));
        if (i === reverse) {
            countStr.push(i)
        }
    }
    console.log(countStr)
}

// countPalindromNumbers(100); 








// 9. Berilgan sonlar qatorini vergul bilan ajratilgan qator ko'rinishida qaytaring.

let joinArr = [1, 2, 3, 4, 5]

function joinWithCommas() {
    let newJoinArr = joinArr.join(", ")
    console.log(newJoinArr)
}

// joinWithCommas();
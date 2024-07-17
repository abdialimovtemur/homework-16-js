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
    let newArr = []
    if (str1.length >= str2.length) {
        for (let i = 0; i < str1.length; i++) {
            for (let g = 0; g < str1.length; g++) {
                if (str1[g] === str2[i]) {
                    newArr.push(str1[g])
                }
            }
        }
    }else{
        console.log("str1 ning lengthi str2 ning lengithi dan katta bo'lishi kerak")
    }
    console.log(newArr.reverse(""))
}

// commonCharacters("hello", "world"); // "lo"










// 3. Berilgan ikki massivdan simmetrik farqni toping (faqat birida bor va ikkinchisida yo'q elementlar)


function symmetricDifference(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        for (let g = 0; g < arr1.length; g++) {
            if (arr1[i] === arr2[g]) {
                console.log(arr1[i])
            }else{
                console.log(arr2[i])
            }
        }
        
    }
}

// symmetricDifference([1, 2, 3], [3, 4, 5]); // [1, 2, 4, 5]










// 4. Berilgan massiv ichida musbat, manfiy va nol qiymatli raqamlarning foizini hisoblang.


// function calculatePercentages(arr) {
//     // Code here
// }

// console.log(calculatePercentages([1, -2, 0, 4, -5, 6, 0]));
// // {positive: 42.86, negative: 28.57, zero: 28.57}










// 5. Berilgan qator ichidagi har bir belgini faqat bir marta qoldirib, unikal belgilar ketma-ketligini yarating.


// function uniqueCharacters(str) {
//     // Code here
// }

// console.log(uniqueCharacters("hello world")); // "helo wrd"












// 6. Berilgan massivdan yig'indisi ma'lum bir qiymatga teng bo'lgan sonlar juftligini toping.


// function findPairs(arr, target) {
//     // Code here
// }

// console.log(findPairs([1, 2, 3, 4, 5], 6)); // [[1, 5], [2, 4]]









// 7. Berilgan massiv ichidagi har bir raqamning kvadratini hisoblang va yangi massiv qaytaring.


function squareNumbers(arr) {
    return arr
}

console.log(squareNumbers([1, 2, 3, 4, 5])); // [1, 4, 9, 16, 25]










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
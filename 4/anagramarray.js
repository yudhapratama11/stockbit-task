function anagramArray(arrs){
    let anagram = {}
    let resArray = []

    // Looping at the array to store word using hashmap
    for(var arr in arrs){
        sortStr = sortString(arrs[arr])
        // console.log(anagram[sortStr])
        anagram[sortStr] = anagram[sortStr] || []
        anagram[sortStr].push(arrs[arr])
    }

    // Moving data that store at hashmap to new array
    for(data in anagram){
        // console.log(data)
        resArray.push(anagram[data])
    }

    // console.log(resArray)

    return resArray
}

function sortString(arr){
    // Spliting words to array of char
    var words = arr.split("")
    
    // Using bubble sort
    for(let i = 0; i < words.length; i ++ ){
        for(let j = i + 1; j < words.length; j ++ ){
            if(words[i] > words[j]) {
                var temp = words[i]
                words[i] = words[j]
                words[j] = temp
            }
        }
    }
    
    return words.join("")
}

// console.log(sortString("kita"))
console.log(anagramArray(['kita', 'atik', 'tika', 'aku', 'kia', 'makan', 'kua']))
console.log(anagramArray(['asd', 'sda', 'tiksda', 'skdtia', 'rota', 'alot', 'roti']))
function anagramArray(arrs){
    let anagram = {}
    let resArray = []

    for(var arr in arrs){
        sortStr = sortString(arrs[arr])
        // console.log(anagram[sortStr])
        anagram[sortStr] = anagram[sortStr] || []
        anagram[sortStr].push(arrs[arr])
    }

    for(data in anagram){
        // console.log(data)
        resArray.push(anagram[data])
    }

    // console.log(resArray)

    return resArray
}

function sortString(arr){
    var words = arr.split("")
    // console.log(words)
    for(let i = 0; i < words.length; i ++ ){
        for(let j = i + 1; j < words.length; j ++ ){
            if(words[i] > words[j]) {
                var temp = words[i]
                words[i] = words[j]
                words[j] = temp
            }
        }
    }
    // console.log("sortString", words.join(""))
    return words.join("")
}

// console.log(sortString("kita"))
console.log(anagramArray(['kita', 'atik', 'tika', 'aku', 'kia', 'makan', 'kua']))
console.log(anagramArray(['asd', 'sda', 'tiksda', 'skdtia', 'rota', 'alot', 'roti']))
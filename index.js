function isAnagram(string1, string2){

  // if the number of letter is not the same they are automatically not anagrams
  if (string1.length === string2.length){
    // transform both strings toLowerCase and then arrays
    let arr1 = string1.toLowerCase().split("")
    let arr2 = string2.toLowerCase().split("")

    // check if all the elements inside arr1 are present on arr2
    return arr1.every(char => arr2.includes(char))

  } else { return false }
}


isAnagram("alex", "axle")
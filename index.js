const mainArray = [190, 151, 596, -674, -166, -614, 883, 83, 707, 628, -46, -770, -650, 17, -730, -275, -498, -624, 364, -439, 883, 576, -339, 221, 798, -975, -826, 999, 679, 118, -21, -14, -265, -643, -996, 637, -553, 583, -786, -264, -527, 57, -162, -969, -360, -841, -284, 791, 424, 471, 839, -339, 830, 339, 823, 279, 902, -819, 493, -335, 922, -387, -875, 752, 481, 293, -867, -123, 464, 462, 884, 488, -396, -479, 79, 783, 167, 638, 775, -538, 183, -309, 91, 891, -920, 159, -396, 873, -208, -807, 756, -858, -628, -356, 308, 429, -746, 874, -860, -398];

//Bubble Sort
function bubbleSort(array) {
   const newArr = [...array];
   for(n = 0;n < newArr.length;n++) {
    for(i = 0;i < newArr.length - 1 - n;i++) {
        compare(newArr)
    }
   }
   return newArr;
}

function compare(newArr) {
    if (newArr[i] > newArr[i + 1]) {
        const swap = newArr[i];
        newArr[i] = newArr[i + 1];
        newArr[i + 1] = swap;
    }
   }

console.log("Bubble Sort" , bubbleSort(mainArray))

//Sort by choice
function selectionSort(array) {
    const newArr = [...array];
    for (j = 0;j < newArr.length - 1;j++) {
        let maxNumber = Math.min(...array);
        let index = null;
        for (i = 0; i < newArr.length - j ; i++) {
            if (newArr[i] > maxNumber) {
                maxNumber = newArr[i];
                index = i;
            }
        }
        const swap = newArr[newArr.length - 1 - j];
        newArr[newArr.length - 1 - j] = maxNumber;
        newArr[index] = swap;
    }
    return newArr;
}

console.log("Sort by choice" , selectionSort(mainArray))

//Insertion Sort
function insertionSort(array) {
    const newArr = [...array];
    for (i = 1;i < newArr.length;i++){
        let curr = newArr[i];
        let back = i - 1;
        while (back >= 0 && newArr[back] > curr) {
            newArr[back + 1] = newArr[back];
            back--;
        }
        newArr[back + 1] = curr;
    }
    return newArr;
}

console.log("Insertion Sort" , insertionSort(mainArray))

//Quick Sort
function quickSort(array) {
    if (array.length < 2) {
        return array
    }
    const index = 1;
    const curr = array[index];
    const more = [];
    const less = [];
    for (i = 0;i < array.length; i++) {
        if (i === index) {
            continue
        }
        if (array[i] > curr) {
            more.push(array[i])
        }
        else {
            less.push(array[i])
        }
    }
     return [
        ...quickSort(less),
        curr,
        ...quickSort(more)];
}

console.log("Quick Sort" , quickSort(mainArray))

//Merge Sort
function mergeSort(array) {
	if (array.length>1) {
		let mid = Math.floor(array.length/2)
		let lefthalf = array.slice(0,mid)
		let righthalf = array.slice(mid)
		mergeSort(lefthalf)
		mergeSort(righthalf)
        whiled(lefthalf,righthalf,array)
	}
	return array
}

function whiled(lefthalf,righthalf,array) {
    let i = j = k = 0
    while (i<lefthalf.length && j<righthalf.length) {
        if (lefthalf[i]<righthalf[j]) {
            array[k]=lefthalf[i]
            i++;}
        else {
            array[k]=righthalf[j]
            j++}
        k++}
    while (i<lefthalf.length) {
        array[k]=lefthalf[i]
        i++
        k++}
    while( j<righthalf.length) {
        array[k]=righthalf[j]
        j++
        k++}
    return array
}

console.log("Merge Sort",mergeSort([...mainArray]))

console.log("Original Array",mainArray)


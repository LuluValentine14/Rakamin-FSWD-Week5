// Fungsi untuk menghasilkan array dengan nilai acak antara 1 dan 50
function generateRandomArray(length) {
    const randomArray = [];
    for (let i = 0; i < length; i++) {
      randomArray.push(Math.floor(Math.random() * 50) + 1);
    }
    return randomArray;
  }
  
  // Fungsi untuk membagi array menjadi dua berdasarkan index (genap dan ganjil)
  function splitArray(arr) {
    const evenArray = [];
    const oddArray = [];
    for (let i = 0; i < arr.length; i++) {
      if (i % 2 === 0) {
        evenArray.push(arr[i]);
      } else {
        oddArray.push(arr[i]);
      }
    }
    return { evenArray, oddArray };
  }
  
  // Fungsi untuk menghitung nilai min pada array
  function getMin(array) {
    let min = array[0];
    for (let i = 1; i < array.length; i++) {
      if (array[i] < min) {
        min = array[i];
      }
    }
    return min;
  }
  
  // Fungsi untuk menghitung nilai max pada array
  function getMax(array) {
    let max = array[0];
    for (let i = 1; i < array.length; i++) {
      if (array[i] > max) {
        max = array[i];
      }
    }
    return max;
  }
  
  // Fungsi untuk menghitung total nilai pada array
  function getTotal(array) {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
      total += array[i];
    }
    return total;
  }
  
  // Fungsi untuk menghitung rata-rata pada array
  function getAverage(array) {
    const total = getTotal(array);
    return total / array.length;
  }
  
  // Fungsi untuk membandingkan nilai min, max, total, dan rata-rata antara dua array
  function compareArrays(array1, array2) {
    const minComparison = getMin(array1) > getMin(array2) ? 'Min lebih besar array genap' : 'Min lebih besar array ganjil';
    const maxComparison = getMax(array1) > getMax(array2) ? 'Max lebih besar array genap' : 'Max lebih besar array ganjil';
    const totalComparison = getTotal(array1) === getTotal(array2) ? 'Total memiliki nilai sama antara array genap dan ganjil' : 'Total tidak sama antara array genap dan ganjil';
    const averageComparison = getAverage(array1) > getAverage(array2) ? 'Rata-rata lebih besar array genap' : 'Rata-rata lebih besar array ganjil';
  
    return {
      minComparison,
      maxComparison,
      totalComparison,
      averageComparison,
    };
  }
  
  // Membuat array dengan 100 nilai acak antara 1 dan 50
  const randomArray = generateRandomArray(100);
  
  // Membagi array menjadi dua berdasarkan index (genap dan ganjil)
  const { evenArray, oddArray } = splitArray(randomArray);
  
  // Menampilkan hasil
  console.log('Array dengan jumlah index 100:', randomArray);
  console.log('Array genap dengan jumlah index 50:', evenArray);
  console.log('Array ganjil dengan jumlah index 50:', oddArray);
  console.log('Min, Max, Total, Rata-rata pada array genap:', getMin(evenArray), getMax(evenArray), getTotal(evenArray), getAverage(evenArray));
  console.log('Min, Max, Total, Rata-rata pada array ganjil:', getMin(oddArray), getMax(oddArray), getTotal(oddArray), getAverage(oddArray));
  
  const comparisons = compareArrays(evenArray, oddArray);
  console.log('Perbandingan nilai:', comparisons.minComparison, comparisons.maxComparison, comparisons.totalComparison, comparisons.averageComparison);
  
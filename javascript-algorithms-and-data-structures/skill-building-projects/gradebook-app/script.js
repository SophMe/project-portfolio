// CALCULATE AVERAGE
function getAverage(scores) {
  let sum = 0;
  for (let i= 0; i < scores.length; i++) {
    sum += scores[i];
  }
  let average = sum / scores.length;
  return average;
}

console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));

// CONVERT TO GRADE
function getGrade(score) {
  if (score === 100) {
    return "A++"
  } else if (score >= 90) {
    return "A"
  } else if (score >= 80) {
    return "B"
  } else if (score >= 70) {
    return "C"
  } else if (score >= 60) {
    return "D"
  } else {
    return "F"
  }
}

console.log(getGrade(96));
console.log(getGrade(82));
console.log(getGrade(56));

// PASSING ?
function hasPassingGrade(score) {
  if (getGrade(score) !== "F") {
    return true
  } else {
    return false
  }
}

console.log(hasPassingGrade(100));
console.log(hasPassingGrade(53));
console.log(hasPassingGrade(87));

// MESSAGE
function studentMsg(totalScores, studentScore) {
  const average = getAverage(totalScores);
  const grade = getGrade(studentScore);
  if (hasPassingGrade(studentScore)) {
    return "Class average: " + average + ". Your grade: " + grade + ". You passed the course."
  } else {
    return "Class average: " + average + ". Your grade: " + grade + ". You failed the course."
  }
}

console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));

// TEST
// test in terminal with: node script.js
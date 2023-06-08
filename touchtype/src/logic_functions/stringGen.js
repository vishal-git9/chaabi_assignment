export const randomString = (words = 5, length = 5) => { //function to generate the random string for user
    let Letters = "AabBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ"; //taking Letters for now
    let ansStr = [];
    while (length > 0) {
      let str = "";
      for (let i = 0; i < words; i++) {
        let random = Math.floor(Math.random() * 51); // picking the random number form 0-25
        console.log(random)
        str += Letters[random];
      }
      ansStr.push(str);
      length--;
    }
    let val = ansStr.join(" ")
    return {ansStr,val};
  };

  const wordBank = {
    subject: ['I', 'You', 'He', 'She', 'They', 'We', 'The cat', 'The dog', 'The bird'],
    verb: ['run', 'jump', 'eat', 'sleep', 'play', 'sing', 'dance', 'read', 'write'],
    object: ['ball', 'car', 'apple', 'book', 'guitar', 'tree', 'house', 'computer'],
    adjective: ['beautiful', 'happy', 'small', 'brave', 'clever', 'loud', 'tall', 'funny'],
    adverb: ['quickly', 'slowly', 'loudly', 'happily', 'gently', 'quietly', 'carefully']
  };
  const sentenceStructures = [
    '{subject} {verb} {object}.',
    '{subject} {verb} {object} {adjective}.',
    '{subject} {verb} {adverb} {object}.',
    '{subject} {verb} {adverb} {object} {adjective}.'
  ];
  
  // Function to generate a random sentence
  export default function generateSentence() {
    // Select a random sentence structure
    const sentenceStructure =
      sentenceStructures[Math.floor(Math.random() * sentenceStructures.length)];
  
    // Replace placeholders with randomly selected words
    const sentence = sentenceStructure.replace(/{(\w+)}/g, (match, key) => {
      const wordArray = wordBank[key];
      return wordArray[Math.floor(Math.random() * wordArray.length)];
      });
  
    return {sentence};
  }
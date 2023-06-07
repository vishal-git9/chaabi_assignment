export const randomString = (words = 5, length = 5) => { //function to generate the random string for user
    let lowercase = "abcdefghijklmnopqrstuvwxyz"; //taking lowercase for now can also make it uppercase and with letters also
    let ansStr = [];
    while (length > 0) {
      let str = "";
      for (let i = 0; i < words; i++) {
        let random = Math.floor(Math.random() * 10);
        str += lowercase[random];
      }
      ansStr.push(str);
      length--;
    }
    let val = ansStr.join(" ")
    return {ansStr,val};
  };
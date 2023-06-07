export const randomString = (words = 5, length = 5) => {
    let lowercase = "abcdefghijklmnopqrstuvwxyz";
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
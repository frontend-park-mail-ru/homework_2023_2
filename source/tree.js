const tree = function (N) {
    const num = Number(N);
    const max_width = 2 * num - 3;
    let temp = 1;
    if (max_width > 1) {
      let sum = "";
      while(temp <= max_width) {
          sum += " ".repeat((max_width - temp) / 2) + "*".repeat(temp)  + 
          " ".repeat((max_width - temp) / 2) + "\n";
          temp += 2;
      }
      
      sum += " ".repeat((max_width - 1) / 2) + "|" + 
      " ".repeat((max_width - 1) / 2) + "\n";
          
      return sum;
    } else {
      return null;
    }
};

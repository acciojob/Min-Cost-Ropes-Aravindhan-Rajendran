function mincost(arr)
{ 
  while (arr.length > 1) {
    // Connect the two shortest ropes
    let rope1 = arr.shift();
    let rope2 = arr.shift();
    let newRope = rope1 + rope2;
	   cost += newRope;
	   let i = arr.findIndex(r => r > newRope);
    if (i === -1) {
      // If the new rope is the longest, add it to the end
      arr.push(newRope);
    } else {
      // Otherwise, insert it in the correct position
      arr.splice(i, 0, newRope);
    }
  }
  
  return cost;
}

module.exports=mincost;

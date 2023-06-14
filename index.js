// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation) {
    const hqLocation = 42; // Scuber headquarters location
    return Math.abs(pickupLocation - hqLocation);
  }
  
  function distanceFromHqInFeet(pickupLocation) {
    const blocks = distanceFromHqInBlocks(pickupLocation);
    const feetPerBlock = 264; // Length of each block in feet
    return blocks * feetPerBlock;
  }
  
  function distanceTravelledInFeet(startBlock, endBlock) {
    const blocks = Math.abs(startBlock - endBlock);
    const feetPerBlock = 264; // Length of each block in feet
    return blocks * feetPerBlock;
  }
  function calculatesFarePrice(start, destination) {
    const distance = Math.abs(start - destination);
    const feetPerBlock = 264; // Length of each block in feet
  
    if (distance === 0) {
      return 0; // Free sample
    } else if (distance <= 400 / feetPerBlock) {
      return 0; // Distance within the first 400 feet (free)
    } else if (distance <= 2000 / feetPerBlock) {
      return (distance - 400 / feetPerBlock) * 0.02; // 2 cents per foot after the first 400 feet
    } else if (distance <= 2500 / feetPerBlock) {
      return 25; // $25 fare for distance over 2000 feet and under 2500 feet
    } else {
      return 'cannot travel that far'; // Distance exceeds 2500 feet
    }
  }
  
    
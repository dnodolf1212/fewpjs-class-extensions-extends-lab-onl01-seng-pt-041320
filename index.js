class Polygon {
  constructor(nums){
    this.nums = nums;
  }

  get countSides(){
   return this.nums.length;
  }

  get perimeter(){
    return this.nums.reduce(acc, 0)
  }

}
export default class Calculator {
  private value = 0;
  constructor(value = 0) {
    this.value = value
  }

  get total() {
    return this.value
  }

  plus = (num) => {
    this.value = this.value + num
    return this.total
  }

  minus = (num) => {
    this.value = this.value - num
    return this.total
  }


  multiply = (num) => {
    this.value = this.value * num
    return this.total
  }

  c = () => {
    this.value = 0
    return this.total
  }
  
}

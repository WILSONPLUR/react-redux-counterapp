export const increment = () =>{
    return {type: "INCREMENT"}
};

export const decrement = () => {
  return {type: "DECREMENT"}
};

export const userAddNumber = (num) => {
    return {type: "USER_NUMBER", num:num}
}

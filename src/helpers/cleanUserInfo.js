const cleanUserInfo = (userArray) => {
  return userArray.map(user => {
    let {FirstName, LastName, Email, Id, AccountStatusId, PaymentDueDate} = user;
    return {
      FirstName,
      LastName,
      Email,
      Id,
      AccountStatusId,
      PhoneNumber: cleanPhoneNumber(user.PhoneNumber),
      AmountDue: `$${user.AmountDue}`,
      DueDate: cleanDueDate(PaymentDueDate),
    }
  })
}

const cleanPhoneNumber = (phoneNum) => {
  let first = phoneNum.slice(0,3)
  let second = phoneNum.slice(3,6)
  let third = phoneNum.slice(6,10)  
  return `(${first})-${second}-${third}`
}

const cleanDueDate = (date) => {
  if(date) {
    let day = date.slice(8,10)
    let month = date.slice(5,7)
    let year = date.slice(0,4)
    return `(${month}/${day}/${year})`
  } else {
    return null
  }
}

export default cleanUserInfo;
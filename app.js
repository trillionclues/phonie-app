const phoneVer = document.querySelector('#number')
const logos = document.querySelector("img[src='phone.jpg']")

// function logoChange() {
//   if (mtn.includes() logos  && nums.length === 4 && logos && !digits) {
//     logos.src = 'logos/9mobile.png'
//   }
// }

// structure phone input
const formatPhoneNum = (inputField) => {
  const nums = inputField.value.split('-').join('')
  const countryCode = '234'
  const digits = nums[0] === countryCode ? 234 : 0
  const mtn = nums[3]
  // object containing phone courier logos

  // const logos = {
  //   airtel: airtelLogo,
  //   mtnLogo: "logos.src = 'logos/mtn.png'",
  //   _9mobileLogo: "logos.src = 'logos/9mobile.png'",
  //   gloLogo: "logos.src = 'logos/glo.jpg'",
  // }

  // object containing array of network prefixes
  let networks = {
    mtnNum: [0706, 0803, 0806, 0703, 0810, 0813, 0814, 0816, 0903, 0906],
    airtelNum: [0701, 0802, 0808, 0812, 0902, 0901],
    gloNum: [0705, 0805, 0807, 0811, 0815, 0905],
    _9mobileNum: [0809, 0817, 0818, 0908, 0909],
  }

  if (
    nums.includes(networks.airtelNum[0]) ||
    nums.includes(networks.airtelNum[1]) ||
    nums.includes(networks.airtelNum[2]) ||
    nums.includes(networks.airtelNum[3]) ||
    nums.includes(networks.airtelNum[4]) ||
    nums.includes(networks.airtelNum[5]) ||
    nums.includes(networks.airtelNum[6]) ||
    nums.includes(countryCode && networks.airtelNum[0]) ||
    nums.includes(countryCode && networks.airtelNum[1]) ||
    nums.includes(countryCode && networks.airtelNum[2]) ||
    nums.includes(countryCode && networks.airtelNum[3]) ||
    nums.includes(countryCode && networks.airtelNum[4]) ||
    nums.includes(countryCode && networks.airtelNum[5]) ||
    nums.includes(countryCode && networks.airtelNum[6])
  ) {
    // airtel logo switch
    logos.src = 'logos/airtel.png'
  } else if (
    nums.includes(networks.mtnNum[0]) ||
    nums.includes(networks.mtnNum[1]) ||
    nums.includes(networks.mtnNum[2]) ||
    nums.includes(networks.mtnNum[3]) ||
    nums.includes(networks.mtnNum[4]) ||
    nums.includes(networks.mtnNum[5]) ||
    nums.includes(networks.mtnNum[6]) ||
    nums.includes(networks.mtnNum[7]) ||
    nums.includes(networks.mtnNum[8]) ||
    nums.includes(networks.mtnNum[9]) ||
    nums.includes(countryCode && networks.mtnNum[0]) ||
    nums.includes(countryCode && networks.mtnNum[1]) ||
    nums.includes(countryCode && networks.mtnNum[2]) ||
    nums.includes(countryCode && networks.mtnNum[3]) ||
    nums.includes(countryCode && networks.mtnNum[4]) ||
    nums.includes(countryCode && networks.mtnNum[5]) ||
    nums.includes(countryCode && networks.mtnNum[6]) ||
    nums.includes(countryCode && networks.mtnNum[7]) ||
    nums.includes(countryCode && networks.mtnNum[8]) ||
    nums.includes(countryCode && networks.mtnNum[9])
  ) {
    // mtn logo switch
    logos.src = 'logos/mtn.png'
  } else if (
    nums.includes(networks.gloNum[0]) ||
    nums.includes(networks.gloNum[1]) ||
    nums.includes(networks.gloNum[2]) ||
    nums.includes(networks.gloNum[3]) ||
    nums.includes(networks.gloNum[4]) ||
    nums.includes(networks.gloNum[5]) ||
    nums.includes(countryCode && networks.gloNum[0]) ||
    nums.includes(countryCode && networks.gloNum[1]) ||
    nums.includes(countryCode && networks.gloNum[2]) ||
    nums.includes(countryCode && networks.gloNum[3]) ||
    nums.includes(countryCode && networks.gloNum[4]) ||
    nums.includes(countryCode && networks.gloNum[5])
  ) {
    // glo logo switch
    logos.src = 'logos/glo.jpg'
  } else if (
    nums.includes(networks._9mobileNum[0]) ||
    nums.includes(networks._9mobileNum[1]) ||
    nums.includes(networks._9mobileNum[2]) ||
    nums.includes(networks._9mobileNum[3]) ||
    nums.includes(networks._9mobileNum[4]) ||
    nums.includes(countryCode && networks._9mobileNum[0]) ||
    nums.includes(countryCode && networks._9mobileNum[1]) ||
    nums.includes(countryCode && networks._9mobileNum[2]) ||
    nums.includes(countryCode && networks._9mobileNum[3]) ||
    nums.includes(countryCode && networks._9mobileNum[4])
  ) {
    // 9mobile logo switch
    logos.src = 'logos/9mobile.png'
  } else {
    logos.src = 'phone.jpg'
  }

  // get character position of the cursor:
  let cursorPosition = inputField.selectionStart

  // add dashes (format 234-xxx-xxx-xxxx or xxx-xxx-xxxx):
  if (nums.length > digits + 11) {
    inputField.value =
      `${digits === 234 ? nums.slice(0, digits) + '-' : ''}` +
      nums.slice(digits, digits + 4) +
      '-' +
      nums.slice(digits + 4, digits + 8) +
      '-' +
      nums.slice(digits + 8, digits + 13)
  } else if (nums.length > digits + 7) {
    inputField.value =
      `${digits === 234 ? nums.slice(0, digits) + '-' : ''}` +
      nums.slice(digits, digits + 4) +
      '-' +
      nums.slice(digits + 4, digits + 7) +
      '-' +
      nums.slice(digits + 7, nums.length)
  } else if (nums.length > digits + 6) {
    inputField.value =
      `${digits === 234 ? nums.slice(0, digits) + '-' : ''}` +
      nums.slice(digits, digits + 4) +
      '-' +
      nums.slice(digits + 4, nums.length)
  } else if (nums.length > digits + 4) {
    inputField.value =
      `${digits === 234 ? nums.slice(0, digits) + '-' : ''}` +
      nums.slice(digits, digits + 4) +
      '-' +
      nums.slice(digits + 4, nums.length)
  } else if (nums.length > 3 && digits === 234) {
    inputField.value =
      nums.slice(0, digits) + '-' + nums.slice(digits, nums.length)
  }

  // reseting the input value automatically puts the cursor at the end, which is annoying,
  // so reset the cursor back to where it was before, taking into account any dashes that we added...
  // if the character 1 space behind the cursor is a dash, then move the cursor up one character:
  if (inputField.value.slice(cursorPosition - 1, cursorPosition) === '-') {
    cursorPosition++
  }

  inputField.selectionStart = cursorPosition
  inputField.selectionEnd = cursorPosition
}

// Restrict input to numerics alone
// console.log('status :' + checkValue(0903, mtn))
// console.log('status :' + checkValue(0960, mtn))

// function phoneNumberFormat(evt) {
//   // // phone number input
//   // const number = document.querySelector('#number')
//   // const formattedInput = formatPhoneNumber(number.value)
//   // number.value = formattedInput

//   // Only ASCII character in that range allowed
//   var ASCIICode = evt.which ? evt.which : evt.keyCode

//   if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57)) {
//     return false
//   } else {
//     return true
//   }
// }

const phoneVer = document.querySelector('#number')
const logos = document.querySelector("img[src='logos/airtel.png']")

const mtn = [
  '0806',
  '0703',
  '0706',
  '0810',
  '0813',
  '0814',
  '0816',
  '0903',
  '0906',
]
const glo = [0805, 0807, 0811, 0705, 0815, 0905]
const airtel = [0802, 0808, 0812, 0701, 0902, 0907, 0901]
const _9mobile = [0809, 0817, 0818, 0908, 0909]

// function checker() {
//   if (mtn.includes(0806)) {
//     console.log('yes')
//   } else {
//     console.log('no')
//   }
// }

// checker()

// function logoChange() {
//   if (mtn.includes() logos  && nums.length === 4 && logos && !digits) {
//     logos.src = 'logos/9mobile.png'
//   }
// }

// logoChange()

mtn.forEach((element) => {
  if (mtn.includes(element)) {
    console.log(element)
  }
})

const formatPhoneNum = (inputField) => {
  const nums = inputField.value.split('-').join('')
  const countryCode = '234'
  const digits = nums[0] === countryCode ? 234 : 0

  // get character position of the cursor:
  let cursorPosition = inputField.selectionStart

  // add dashes (format 234-xxx-xxx-xxxx or xxx-xxx-xxxx):
  if (nums.length > digits + 14) {
    inputField.value =
      `${digits === 234 ? nums.slice(0, digits) + '-' : ''}` +
      nums.slice(digits, digits + 4) +
      '-' +
      nums.slice(digits + 4, digits + 7) +
      '-' +
      nums.slice(digits + 7, digits + 11)
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

// phoneVer.addEventListener('keyup', (e) => {
//   let val = e.target.value

//   e.target.value = val
//     .replace(/\D/g, '')
//     .replace(/(\d{1,4})(\d{1,3})?(\d{1,4})?/g, function (t, f, s, t) {
//       if (t && logos) {
//         return `(${f}) ${s}-${t}`
//       } else if (s) {
//         return `(${f}) ${s}`
//       } else if (f) {
//         return `(${f})`
//       }
//     })
// })

// function formatPhoneNumber(value) {
//   if (!value) return value
//   const phoneNumber = value.replace(/[^\d]/g, '')
//   const phoneNumberLength = phoneNumber.length

//   if (phoneNumberLength < 4) return phoneNumber

//   if (phoneNumberLength < 7) {
//     return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`
//   }
//   return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
//     3,
//     6
//   )} - ${phoneNumber.slice(6, 9)}`
// }

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

// function phoneFormat(input) {
//   //returns (###) ###-####
//   input = input.replace(/\D/g, '')
//   var size = input.length

//   // if (size > 0 ) {
//   //   input = '+' + input
//   // }
//   // if (size >= 3) {
//   //   input = input.slice(0, 4) + input.slice(4, 11)
//   // }
//   // if (size > 6) {
//   //   input = input.slice(0, 9) + '-' + input.slice(9)
//   // }
//   return input
// }

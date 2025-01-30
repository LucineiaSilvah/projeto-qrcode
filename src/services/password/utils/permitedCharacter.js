async function characterspermited() {
  const permited = []

  if(process.env.UPPERCASE_LETTERS === 'true'){
    permited.push(..."ABCBEFGHIJKLMNOPQRSTUVWXYZ")
  }
  if(process.env.LOWERCASE_LETTERS === 'true'){
    permited.push(..."abcdefghijklmnopqrstuvwxyz")
  }
  if(process.env.NUMBERS === 'true'){
    permited.push(..."0123456789")
  }
  if(process.env.SPECIAL_CHARACTERS === 'true'){
    permited.push(..."!@#$%+-?&*")
  }
 return permited
}

export default characterspermited
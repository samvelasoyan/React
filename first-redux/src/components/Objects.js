
function Objects(){
    let arr = []

    const person = (fullName, position, country) => {
        let obj = {
            fullName : fullName,
            email : `${(fullName.toLowerCase().replace(" ", ""))}@gmail.com`,
            position: position,
            country : country,
            makeChanges: false
        }
        return obj
    }
    arr.push(person("Samvel Asoyan", "intern", "Armenia"))
    arr.push(person("Chuck Norris", "actor", "USA"))
    arr.push(person("Dan Abramov", "developer", "Russia"))
    arr.push(person("Kyle Simpson", "developer", "USA"))
    arr.push(person("Steven Gerrard", "coach", "United Kingdom"))
    arr.push(person("Steven Hawking", "scientist", "United Kingdom"))

    return arr
  }

export default Objects
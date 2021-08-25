console.log(process.argv)

console.clear()

console.log(console)
console.debug(1)
process.argv.forEach((item) => {
    console.log(item)
})

function foo () {
    bar()
}

function bar () {
    console.trace()
}

foo();
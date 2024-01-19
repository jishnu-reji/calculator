const displayContent = (content) =>{
    result.value += content
}

const clearScreen = () =>{
    result.value = ""
}

const output = () =>{
    result.value = eval(result.value)
}

const removel = () =>{
    result.value = (result.value).slice(0,-1)
}
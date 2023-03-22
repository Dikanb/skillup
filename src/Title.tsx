

interface YearProps{
    year: number
}

const Title = (props:YearProps)=> {
console.log(props)   
 return <h1>Hello  component Year:{props.year} </h1>
}


export default Title


type ContentType = {
text1: string
text2: string
}

const Content = (props:ContentType)=> {
console.log(props)   
 return <div>
 <p> {props.text1} </p>
 <p> {props.text2} </p>
</div>
}


export default Content
import React from 'react'
import ReactDOM from 'react-dom/client'
import Title from './Title'
import Content from './Content'


const App = () =>{
return (
    <>
          <Title year ={2022} />
            <Title year ={2012} />
            <Content text1='hellow text1' text2='hellow text2' />
    </>
)
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
       
      <App />
      </React.StrictMode>
)
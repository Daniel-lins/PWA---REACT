import { createGlobalStyle } from 'styled-components'
import CovidImg from '../../assets/images/covid.jpg'

const globalStyle = createGlobalStyle `

* {
    outline:none ;
    box-sizing: border-box;
    
}

body {
    line-height:normal;

}

html,body {
    width:100%;
    min-height:100%;
    display:flex;
    padding: 0;
    margin: 0;
}

 #root {
     backgroud: url(${CovidImg});
     height:100%;
     width:100%;
     backgroud-size: cover;
     backgroud-position: center center;
 }

`

export default globalStyle
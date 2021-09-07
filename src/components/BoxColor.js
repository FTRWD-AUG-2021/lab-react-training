function BoxColor({r, g, b}) {
    console.log(r, g, b)
    return ( 
    <div style={{backgroundColor: `rgb(${r}, ${g}, ${b})`}}> 
        Hello
    </div>
    )
}
export default BoxColor
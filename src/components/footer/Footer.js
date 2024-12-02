import React from 'react';

// function Footer()
// {
//     return(
//         <footer style={{backgroundColor: "#323232", color:"aliceblue", padding:"25px"}}>
//             <p>Copyright &copy;</p>
//         </footer>
//     );
// }
// export default Footer;

class Footer extends React.Component
{
    render()
    {
        let a=2;
        console.log(a);
        
        return<footer style={{backgroundColor: "#323232", color:"aliceblue", padding:"25px"}}>
                    <p>Copyright &copy; - {this.props.year}</p>
            </footer>
    
    }
}
export default Footer;
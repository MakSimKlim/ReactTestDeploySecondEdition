function Factorial(props) 
{
    let n = props.n;
    let factorial = 1;
    for(let i = 1; i <= n; i++) {
        factorial *= i;
    }

    return (
        <h3>{n}! = {factorial};</h3>
    );
}

export default Factorial;

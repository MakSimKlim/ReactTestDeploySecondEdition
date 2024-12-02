import './Nav.css';

function Nav(props)
{
    return(
        <nav>
            <ul>
                {
                    Object.keys(props.navigation).map(elem => 
                        <li key={elem}><a href={props.navigation[elem]}>{elem}</a></li>
                        //VirtualDOM у каждого дискриптора уникален для отличия элементов страницы
                    )
                }
            </ul>
        </nav>
    )
}
export default Nav;
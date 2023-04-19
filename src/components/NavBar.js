import { Link, NavLink } from "react-router-dom";

export function NavBar() {
    return (
        <ul style={{display: 'flex', listStyle: 'none'}}>
            <li style={{marginRight: '15px'}}>
                <NavLink to={'/'} className={'link'}>Home</NavLink>   
            </li>

            <li style={{marginRight: '15px'}}>
                <NavLink to={'/bank'} className={'link'}>Bank</NavLink>
            </li>
            
            <li style={{marginRight: '15px'}}>
                <NavLink to={'forfun'} className={'link'}>For Fun</NavLink>
            </li>

            <li style={{marginRight: '15px'}}>
                <NavLink to={'info'} className={'link'}>Info</NavLink>
            </li>

            <li style={{marginRight: '15px'}}>
                <NavLink to={'username'} className={'link'}>Username</NavLink>
            </li>

        </ul>
    )
}
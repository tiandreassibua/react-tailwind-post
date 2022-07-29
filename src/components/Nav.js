// import {useDispatch} from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar, Avatar } from "@material-tailwind/react";
// import { auth } from '../config/firebase.config';

const Nav = ({ isAuth }) => {
    let navigate = useNavigate();
    return (
        <Navbar className="drop-shadow-xl mx-auto max-screen-xl mb-10">
            <div className="container flex items-center justify-between text-white">
                <Avatar
                    onClick={() => navigate('/')}
                    src="https://www.freepnglogos.com/uploads/g-letter-png/g-letter-letter-origami-isotype-transparent-png-svg-vector-9.png"
                    className='cursor-pointer hover:opacity-80'
                    alt="avatar"
                    variant="circular"
                />
                <ul className="flex items-right gap-6">
                    <li>
                        <span onClick={() => navigate('/')} className="cursor-pointer hover:opacity-80 text-grey-900 font-semibold pl-5">Home</span>
                    </li>
                    <li>
                        <span onClick={() => navigate('/createpost')} className="cursor-pointer hover:opacity-80 text-grey-900 font-semibold pl-5">Create post</span>
                    </li>
                    {!isAuth && <li><span onClick={() => navigate('/login')} className="cursor-pointer hover:opacity-80 text-grey-900 font-semibold pl-5">Login</span></li>}
                    {/* {isAuth && <li><span
                        onClick={() => {
                            const logout = auth.signOut();
                            if (logout){
                                localStorage.setItem("isAuth", false);
                                setIsAuth(false);
                                navigate('/');
                            }
                        }}
                        className="cursor-pointer hover:opacity-80 text-red-600 font-semibold pl-5">Logout</span></li>} */}
                </ul>
            </div>
        </Navbar>
    );
}

export default Nav;
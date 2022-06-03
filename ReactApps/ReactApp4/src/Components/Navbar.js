import styles from "./Navbar.module.css";
import logo from "../icons/icon.png"
import $ from "jquery";

const Navbar = ( props ) => 
{
    const MouseEnterHandler = () =>
    {
        $(`.${styles["menu"]} > li`).each(function(){
           let wid = $(this).width();
           let height = $(this).height();
            $(this).css('width', wid+'px');
            $(this).css('height',height+"px");
        });
    }
    return(
    <nav className={`${styles["navbar"]}`}>
        <div>
        <img alt="qwenwq" src={logo} width="60" height="20">
        </img>
        <label>Teknik Servis</label>
        </div>
        <div className={`${styles["rightNavbar"]}`}>
            <ul className={`${styles["menu"]}`}>
                <li onMouseEnter={MouseEnterHandler}>Home</li>
                <li>Services</li> 
                <li>About</li> 
                <li>Contact</li> 
            </ul>
        </div>
    </nav>
    );
}

export default Navbar;
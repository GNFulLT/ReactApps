import styles from "./Navbar.module.css";
import logo from "../icons/icon.png"
import $ from "jquery";

const Navbar = ( props ) => 
{
    const MouseClickHandler = () => 
    {
 
        $(`.${styles["companyName"]}`).each(function(){
            console.log("girdi")
            $(this).addClass(`${styles["anim"]}`);
            setTimeout(() => {$(this).removeClass(`${styles["anim"]}`)},600)
        });
    }
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
        <label className={`${styles["companyName"]}`}>Teknik Servis</label>
        </div>
        <div className={`${styles["rightNavbar"]}`}>
            <ul className={`${styles["menu"]}`}>
                <li onClick={MouseClickHandler} onMouseEnter={MouseEnterHandler}>Home</li>
                <li onClick={MouseClickHandler}>Services</li> 
                <li onClick={MouseClickHandler}>About</li> 
                <li onClick={MouseClickHandler}>Contact</li> 
            </ul>
        </div>
    </nav>
    );
}

export default Navbar;
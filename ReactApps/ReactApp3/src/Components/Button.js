import styles from "./Button.module.css"



const Button = ( props ) => 
{
    const ButtonClickedAnimation = (e) => 
    {
                let rippleElements = document.getElementsByClassName(`${styles["button"]}`);
                let rippleElement = rippleElements[0];
                console.log(e.target);
                console.log(e.clientX);
                console.log(rippleElement.offsetLeft); 

                
                let X = e.pageX - rippleElement.offsetLeft;
                let Y = e.pageY - rippleElement.offsetTop;
                X += 10;
                Y += 10;
                let rippleDiv = document.createElement("div");
                rippleDiv.classList.add(`${styles["ripple"]}`);
                rippleDiv.setAttribute("style","top:"+Y+"px; left:"+X+"px;");
                rippleElement.appendChild(rippleDiv);
                setTimeout(function(){
                    rippleDiv.parentElement.removeChild(rippleDiv);
                  }, 900);
                
    }
    return(
    <div onClick={ButtonClickedAnimation} className={`${styles["button"]}`}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <button type={props.type} onClick={props.onClick}>
           <a>{props.children}</a>
        </button>
    </div>
    );
}

export default Button;
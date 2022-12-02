import "./Menu.css";
import DropDown from "../Images/arrow-dropdown.png";
import MenuToggle from "../Images/menu.png";
const Menu = (props) =>{

        return (
            <>
                
                <div className="menu">
                        <div className="menu-toggle">
                            <img src={MenuToggle} alt="" />
                        </div>
                        <div className="module" onClick={() => {
                            if (props.identify ==="0"){
                                    props.buttonValue()
                                }
                                else if (props.identify ==="1"){
                                props.buttonValue1()
                                }   
                                if(props.identify ==="2"){
                                    props.buttonValue2()
                                } 
                                else if(props.identify === "3"){
                                    props.buttonValue3()
                                } 
                                if(props.identify === "4"){
                                    props.buttonValue4()
                                }
                                else if(props.identify === "5"){
                                    props.buttonValue5()
                                }
                                if(props.identify === "6"){
                                    props.buttonValue6()
                                }
                                else if(props.identify === "7"){
                                    props.buttonValue7()
                                }
                                else{
                                    return null
                                }
                                }
                                }>
                            <button>{props.title}</button>
                            <img src={DropDown} alt="" />
                        </div>
                </div>
            
            </>
        );
    
}

export default Menu;
import "./Footer.css"
import foot from "../../assets/Frame (6).png"


function Footer(){
    return(
        <footer>
            <div className="container__lg">
                <div className="footer__wrapper">
                    <img src={foot} alt="" />
                </div>
            </div>
        </footer>
    )
}
export default Footer
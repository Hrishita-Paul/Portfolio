import "./Footer.css"
export default function Footer(){
    return(
        <div className="footer">
            <div className="leftColumn">
                <p>Mail me at hrishita.paul03@gmail.com</p>
                <p className="footer-link"> <a href="https://www.linkedin.com/in/hrishita-paul/" target="_blank" rel="noreferrer"> LinkedIn URL</a></p>
                <p className="footer-link">  <a href="https://leetcode.com/reinforcer/"  target="_blank" rel="noreferrer">LeetCode profile</a></p>
                </div>
                <div className="rightColumn">
                <p className="footer-link"><a href="https://github.com/Hrishita-Paul" target="_blank" rel="noreferrer"> Github </a></p>
                <p className="footer-link"><a href="https://www.geeksforgeeks.org/user/hrishit4kfx/"  target="_blank" rel="noreferrer"> GeeksForGeeks profile</a></p>
                <p className="footer-link">Resume link: <a href="https://drive.google.com/file/d/14SAX1H69T2reLVqeOR6nEB_SY56zFB9V/view?usp=sharing" target="_blank" rel="noreferrer">Click Here</a></p>
                </div>
        </div>
    )
}
import "./Footer.css"
export default function Footer(){
    return(
        <div className="footer">
            <div className="leftColumn">
                <p>Mail me at hrishita.paul03@gmail.com</p>
                <p className="footer-link"> <a href="https://www.linkedin.com/in/hrishita-paul/" target="_blank"> LinkedIn URL</a></p>
                <p className="footer-link">  <a href="https://leetcode.com/reinforcer/"  target="_blank">LeetCode profile</a></p>
                </div>
                <div className="rightColumn">
                <p className="footer-link"><a href="https://github.com/Hrishita-Paul"> Github </a></p>
                <p className="footer-link"><a href="https://www.geeksforgeeks.org/user/hrishit4kfx/"  target="_blank"> GeeksForGeeks profile</a></p>
                <p className="footer-link">Resume link: <a href="https://drive.google.com/file/d/11dNF6sDjEzsbY8HfzLbI8ws83Yaq38AM/view?usp=sharing" target="_blank">Click Here</a></p>
                </div>
        </div>
    )
}
import "./Footer.css"
export default function Footer(){
    return(
        <div className="footer">
            <div className="leftColumn">
                <p>Mail me at hrishita.paul03@gmail.com</p>
                <p>LinkedIn URL: <a href="https://www.linkedin.com/in/hrishita-paul/" target="_blank"> https://www.linkedin.com/in/hrishita-paul/</a></p>
                <p>LeetCode profile:  <a href="https://leetcode.com/reinforcer/"  target="_blank">https://leetcode.com/reinforcer/</a></p>
                </div>
                <div className="rightColumn">
                <p>Github: <a href="https://github.com/Hrishita-Paul"> https://github.com/Hrishita-Paul</a></p>
                <p>GeeksForGeeks profile: <a href="https://www.geeksforgeeks.org/user/hrishit4kfx/"  target="_blank">https://www.geeksforgeeks.org/user/hrishit4kfx/</a></p>
                <p>Resume link:<a href=""></a></p>
                </div>
        </div>
    )
}
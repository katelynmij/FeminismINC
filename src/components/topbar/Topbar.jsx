import "./topbar.css"
import { Search } from "@material-ui/icons"

export default function Topbar() {
    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <span className="logo">FEMINISM</span>
            </div>
            <div className="topbarCenter">
                <div className="searchbar"></div>
                <Search className="searchIcon" />
                <input 
                    placeholder="Search for friends or anything"
                     className="searchInput"
                 />
            </div>
        </div>
    )
}
import HistoryIcon from '@mui/icons-material/History';
import {HistoryButton} from "../styles/PageTranslateHeaderStyles";
import {Link} from "react-router-dom";

export const PageTranslateHistoryButton = () => {
    return (
        <div style={{display: "flex", justifyContent: "right", margin: "20px"}}>
            <Link key={0} style={{textDecoration: 'none'}} to={"/history"}>
                <HistoryButton>
                    <HistoryIcon/>
                </HistoryButton>
            </Link>
        </div>
    )
}
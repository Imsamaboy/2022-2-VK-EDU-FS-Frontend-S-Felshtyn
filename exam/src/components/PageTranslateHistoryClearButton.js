import {HistoryCleanButton} from "../styles/PageTranslateHistoryStyles";

export const PageTranslateHistoryClearButton = () => {
    const clearLocalStorage = () => {
        localStorage.clear()
    }

    return (
        <HistoryCleanButton onClick={clearLocalStorage}>
            Clear history
        </HistoryCleanButton>
    )
}
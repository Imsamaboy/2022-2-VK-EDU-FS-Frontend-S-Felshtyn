import React from "react"
import {PageTranslateHeaderWrapper} from "../components/PageTranslateHeader"
import {PageTranslateBody} from "../components/PageTranslateBody"
import {PageTranslateHistoryButton} from "../components/PageTranslateHistoryButton"
import {connect} from "react-redux";
import {getLanguages} from "../actions/actions";

const PageTranslateWrap = (props) => {
    return (
        <>
            <PageTranslateHeaderWrapper/>
            <PageTranslateBody props={props}/>
            <PageTranslateHistoryButton/>
        </>
    )
}

const mapStateToProps = (state) => ({
    languages: state.languages.languages
})

export const PageTranslate = connect(mapStateToProps, {getLanguages})(PageTranslateWrap)
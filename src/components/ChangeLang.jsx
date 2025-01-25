import React from "react";
import i18n from "i18next";

const LangSwitch = () => {
    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    };

    return (
        <div className="d-flex">
            <button
                type="button"
                className="traductionButton btn btn-sm-md btn-outline-secondary d-flex flex-column justify-content-end  me-2"
                onClick={() => changeLanguage('en')}
            >
                En
            </button>
            <button
                type="button"
                className="traductionButton btn btn-sm-md btn-outline-secondary d-flex flex-column justify-content-end"
                onClick={() => changeLanguage('es')}
            >
                Es
            </button>
        </div>
    );
};

export default LangSwitch;
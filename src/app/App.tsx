import React, {useState} from 'react';
import './styles/App.css';
import './styles/colors.css';
import './styles/fonts.css';
import LoginPage from "../modules/auth/pages/LoginPage/LoginPage";
import ThemeProvider from "../utils/providers/ThemeContextProvider";
import {Sidebar} from "../shared/components/layout/NavLayout/Sidebar/Sidebar";
import {Navbar} from "../shared/components/layout/NavLayout/Navbar/Navbar";
import {NavLayout} from "../shared/components/layout/NavLayout/NavLayout";
import {LabelCard} from "../shared/components/core-components/LabelCard/LabelCard";
import {Toggle} from "../shared/components/core-components/Toggle/Toggle";
import {Overview} from "../modules/overview/pages/Overview";


function App() {

    return (<>
            <ThemeProvider>
                <div className={"app-container"}>
                    <NavLayout/>
                </div>
            </ThemeProvider>

        </>
    );
}

export default App;

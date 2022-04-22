import {createContext, FC, ReactNode, useState} from "react";
import {ThemeEnum} from "../constants/providers/Theme";

export interface IThemeContext {
    theme: ThemeEnum,
    setTheme: (theme: ThemeEnum) => void
}
interface Props {
    children?: ReactNode,
}
export const ThemeContext = createContext  ({} as IThemeContext );

const ThemeProvider:FC<Props>=({children})=>{
    const [themeMode, setThemeMode] = useState<ThemeEnum>(ThemeEnum.light);
    return <ThemeContext.Provider value={{ theme: themeMode, setTheme: setThemeMode }}>{children}</ThemeContext.Provider>;
}
export default ThemeProvider;


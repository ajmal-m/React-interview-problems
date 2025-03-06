import './index.css'
import { useTheme } from './useTheme'
export const ThemeToggler = () => {
    const [theme, setTheme] = useTheme('theme', 'dark');
    const handleToggle = () => {
        setTheme(() => (theme == 'light' ? 'dark' : 'light'));
    }
    return(
        <div className='main-container' data-theme={theme}>
            <button onClick={() => handleToggle()}>ThemeToggler</button>
        </div>
    )
}
const changeThemeButtons = document.querySelectorAll('[name=theme]');

const rootSytles = document.documentElement.style

const lightTheme = {
    "--bg-color"    : "#eee",
    "--bg-color-2"  : "#fff",
    "--text-color"  : "#53555A",
    "--acent-color" : "#007bdf",
    "--font"        : "'Open Sans', sans-serif"
}
const darkTheme = {
    "--bg-color"    : "#53575A",
    "--bg-color-2"  : "#282d31",
    "--text-color"  : "#eee",
    "--acent-color" : "#ff3c32",
    "--font"        : "'Lato', sans-serif"
}

for (const button of changeThemeButtons) {
    button.addEventListener('change', e => {
        if (e.target.id === 'dark') {
            changeTheme(darkTheme)
        } else if (e.target.id === 'light'){
            changeTheme(lightTheme)

        }
        
    })
}

const changeTheme = theme => {
    let cssVars = Object.keys(theme)
    for (let cssVar of cssVars) {
        rootSytles.setProperty(cssVar,theme[cssVar])
    }
    
}

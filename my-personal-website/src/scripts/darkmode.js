let darkmode = localStorage.getItem("darkmode")
const colorToggle = document.getElementById("color-mode-toggle")
const app = document.getElementById

const enableDarkmode = () => {
    document.body.classList.add("darkmode")
    localStorage.setItem("darkmode", "active")
}

const disableDarkmode = () => {
    document.body.classList.remove("darkmode")
    localStorage.setItem("darkmode", null)
}

if (darkmode === "active") enableDarkmode()

const darkmodeToggle = () => {
    darkmode = localStorage.getItem("darkmode")
    darkmode !== "active" ? enableDarkmode() : disableDarkmode()
}
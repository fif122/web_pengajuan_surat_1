document.addEventListener('click', e=> {
    const isDropdownButton = e.target.matches("[data-dropdown-button]")
    if (!isDropdownButton && e.target.closest('[data-dropdown]') != null) return

    let currentDropdown
    if (isDropdownButton) {
        currentDropdown = e.target.closest("[data-dropdown]")
        currentDropdown.classList.toggle("active")
    }

    document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
        if (dropdown === currentDropdown) return
        dropdown.classList.remove("active")
    })
})

document.addEventListener('click', e=> {
    const isDropdownButton = e.target.matches("[data-dropdown-button-1]")
    if (!isDropdownButton && e.target.closest('[data-dropdown-1]') != null) return

    let currentDropdown
    if (isDropdownButton) {
        currentDropdown = e.target.closest("[data-dropdown-1]")
        currentDropdown.classList.toggle("active-1")
    }

    document.querySelectorAll("[data-dropdown-1].active-1").forEach(dropdown => {
        if (dropdown === currentDropdown) return
        dropdown.classList.remove("active-1")
    })
})
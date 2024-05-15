export const validateInput = (input, type) => {
    let regex
    switch (type) {
        case 'phone':
            regex = /^\d{6,10}$/
            break
        case 'email':
            regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            break
    }
    return regex.test(input)
}

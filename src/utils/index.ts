const utils = {
    validateEmail(email : string) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    },

    validateUsername(email : string) {
        const re = /^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$/;
        return re.test(String(email).toLowerCase());
    },
    validatePassword(email : string) {
        const re = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
        return re.test(String(email).toLowerCase());
    },

}

export default utils;
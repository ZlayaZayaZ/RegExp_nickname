export default class Validator {
    constructor (nickname) {
        this.nickname = nickname;
    }

    validateUsername(nickname) {
        return /^[a-zA-Z]+(-*_*[a-zA-Z]*\d{0,3}-*)*[a-zA-Z]+$/.test(nickname) && !/\d{4}/.test(nickname)
    }
}
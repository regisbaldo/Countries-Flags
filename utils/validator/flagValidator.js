export default function flagValidator(country) {
    const keys = ["cca2", "img", "name"];
    let isValid = true;
    keys.forEach((key) => {
        if (!country.hasOwnProperty(key)) {
            console.error(`The flag prop object key '${key}' is required.`);
            isValid = false;
        }
    });
    return isValid;
}
import Flag from "../components/Flag";
import flagValidator from "../utils/validator/flagValidator";

const correctFlag = {
    img: "img src",
    name: "flag name",
    cca2: "flag cca2",
};

const incorrectFlag = {
    img: "img src",
    cca2: "flag cca2",
};
describe("Flag", () => {
    test("validator need the corret object struct", async () => {
        expect(flagValidator(correctFlag)).toBeTruthy();
    })
})

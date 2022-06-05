import { regions } from "../utils/listOfRegions";
const europe = { value: 'Europe', text: 'Europa' };
describe("Regions", () => {
    test("is an array an the object contain 'Europe' object", async () => {
        expect(regions).toContainObject(europe);
    })
})

//custom matcher to check if an array object has some struct
expect.extend({
    toContainObject(received, argument) {

        const pass = this.equals(received,
            expect.arrayContaining([
                expect.objectContaining(argument)
            ])
        )

        if (pass) {
            return {
                message: () => (`expected ${this.utils.printReceived(received)} not to contain object ${this.utils.printExpected(argument)}`),
                pass: true
            }
        } else {
            return {
                message: () => (`expected ${this.utils.printReceived(received)} to contain object ${this.utils.printExpected(argument)}`),
                pass: false
            }
        }
    }
})
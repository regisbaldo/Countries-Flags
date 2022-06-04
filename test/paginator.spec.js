import { paginator } from "../utils/paginate";


const defautlResult = { page: 1, perPage: 12, total: 0, totalPages: 0, data: [] };

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const secondPage = [3, 4];

describe("Paginator", () => {

    test('is a function', () => {
        expect(paginator).toEqual(expect.any(Function))
    })

    test('without params need return its default result', () => {
        expect(paginator()).toEqual(defautlResult)
    })

    test('with  10 items and 2 "per page" return 5 pages in total', () => {
        expect(paginator(items, 1, 2)).toEqual(expect.objectContaining({ totalPages: 5 }))
    })

    test('with  10 items , 2 "per page" and page "2" need return the second page paginated with correctly items', () => {
        expect(paginator(items, 2, 2)).toEqual(expect.objectContaining({ data: secondPage }))
    })


});
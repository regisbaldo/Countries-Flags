export function paginator(items = [], page = 1, perPage = 12) {
    const offset = (page - 1) * perPage;
    const totalPages = Math.ceil(items.length / perPage);

    const paginatedItems = items.slice(offset).slice(0, perPage);

    return {
        page,
        perPage,
        total: items.length,
        totalPages,
        data: paginatedItems
    };
}
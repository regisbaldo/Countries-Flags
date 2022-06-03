export function paginator(items, current_page, per_page_items) {
    const page = current_page || 1;
    const per_page = per_page_items || 12;
    const offset = (page - 1) * per_page;

    const paginatedItems = items.slice(offset).slice(0, per_page_items);
    const total_pages = Math.ceil(items.length / per_page);

    return {
        page: page,
        per_page: per_page,
        total: items.length,
        total_pages: total_pages,
        data: paginatedItems
    };
}
export const selectCurrentCategories = (state) => {
    console.log('category selector fired')

    return state.categories.categoriesMap;
}

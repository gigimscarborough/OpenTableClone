

export const fetchRestaurants = () => (
    $.ajax({
        method: "GET",
        url: `/api/restaurants`
    })
)

export const fetchRestaurant = (restaurantId) => (
    $.ajax({
        method: "GET",
        url: `/api/restaurants/${restaurantId}`
    })
)

export const searchRestaurants = (search) => (
    $.ajax({
        method: "GET",
        url: `/api/search`,
        data: {search}
    })
)

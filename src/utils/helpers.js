export const formatPrice = (price) => {
    const amount = new Intl.NumberFormat('en-IN',{
        style:"currency",
        currency: "INR"
    }).format((price/100))
    return amount
}

export const getUniqueValues = (data, type) => {
    let unique = data.map((item) => item[type])
    if(type === "colors"){
        unique = unique.flat()
    }
    return ['all', ...new Set(unique)]
}
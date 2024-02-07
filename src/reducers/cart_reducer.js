import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
} from '../actions'

const cart_reducer = (state, action) => {
  if (action.type === ADD_TO_CART) {
    const { id, amount, color, product } = action.payload
    const tempItem = state.cart.find((item) => item.id === id + color)
    if (tempItem) {
      const tempCart = state.cart.map((cartItem) => {
        if (cartItem.id === id + color) {
          let newAmount = cartItem.amount + amount
          if (newAmount >= cartItem.max) {
            newAmount = cartItem.max
          }
          return { ...cartItem, amount: newAmount }
        } else {
          return cartItem
        }
      })
      return { ...state, cart: tempCart }
    } else {
      const newItem = {
        id: id + color,
        name: product.name,
        price: product.price,
        color,
        amount,
        image: product.images[0].url,
        max: product.stock,
      }
      return { ...state, cart: [...state.cart, newItem] }
    }
  }

  if (action.type === REMOVE_CART_ITEM) {
    const tempCart = state.cart.filter((item) => item.id !== action.payload)
    console.log(action.payload)
    return { ...state, cart: tempCart }
  }

  if (action.type === CLEAR_CART) {
    const tempCart = []
    return { ...state, cart: tempCart }
  }

  if (action.type === TOGGLE_CART_ITEM_AMOUNT) {
    const { id, value } = action.payload
    const tempCart = state.cart.map((item) => {
      if (item.id === id) {
        if (value === 'inc') {
          let newAmount = item.amount + 1
          if (newAmount > item.max) {
            newAmount = item.max
          }
          return { ...item, amount: newAmount }
        } else {
          let newAmount = item.amount - 1
          if (newAmount <= 1) {
            newAmount = 1
          }
          return { ...item, amount: newAmount }
        }
      }
      return item
    })
    return { ...state, cart: tempCart }
  }

  if (action.type === COUNT_CART_TOTALS) {
    // let totalCount = 0
    // let totalAmount = 0
    // state.cart.forEach((item) => {
    //   totalCount += item.amount
    //   totalAmount += item.amount * item.price
    // })
    

    // reduce method to find totals
    const { totalCount, totalAmount } = state.cart.reduce(
      (total, cartItem) => {
        const { amount, price } = cartItem
        total.totalCount += amount
        total.totalAmount += price * amount
        return total
      },
      { totalCount: 0, totalAmount: 0 }
    )

    return { ...state, total_items: totalCount, total_amount: totalAmount }
  }

  throw new Error(`No Matching "${action.type}" - action type`)
}

export default cart_reducer

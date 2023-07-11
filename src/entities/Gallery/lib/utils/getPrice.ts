function getPrice(initialPrice: number, discountPercentage: number): string {
  return ((initialPrice * discountPercentage) / 100).toFixed(2)
}

export { getPrice }

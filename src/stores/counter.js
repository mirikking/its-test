import { defineStore } from 'pinia'

export const brct = defineStore('products', {
  state: () => {
    return { products: [] }
  },
})

<template>
    <div class="basket-product" v-bind="product">
        <div class="product-img">
            <img :src="product.img" alt="">
        </div>
        <div class="product-info">
        <h5 class="product-name"> {{ product.name }} </h5>
        <h5 class="product-price"> {{ product.price }} ₽</h5>
        </div>
        <div class="product-amount">
            <button class="product-amount-btn" @click="$emit('plusItem', product)">+</button>
            <p class="product-current-amount">{{ productAmount }}</p>
            <button class="product-amount-btn" @click="$emit('minusItem', product)">-</button>
        </div>
        <div class="product-remove">
            <button class="product-remove-btn" @click="$emit('remove', product)">
                <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="#1f20203d"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path
                    d="M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z"
                    fill="#1f20203d"
                />
                </svg>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BasketItem',
    data() {
        return {
        }
    },
    props: {
        product: {
            type: Object,
            required: true,
        },
        productAmount: {
          type: Number,
          required: true,
        }
    },
    methods: {
    }
}
</script>

<style scoped>

.basket-product {
    display: flex;
    flex-direction: row;
    margin-top: 12px;
    gap: 2rem;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    padding-top: 12px;
    padding-top: 12px;
    height: 6rem;
  }

  .basket-product img {
    width: 96px;
    height: 96px;
  }

  .product-amount {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 21px;
  }

  .product-info {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    justify-content: center;
    flex-wrap: nowrap;
    width: 40%;
    gap: 1.5rem;
  }
  .product-amount-btn {
    cursor: pointer;
    border: none;
    width: 40px;
    height: 24px;
    background-color: #F2F2F2;
    border-radius: 4px;
  }

  .product-remove {
    display: flex;
    justify-content: center;
  }

  .product-remove-btn {
    cursor: pointer;
    border: none;
    background: none;
  }

  .product-name {
    margin: 0px;
    font-family: 'Inter';
    font-weight: 300;
    font-size: 16px;
    line-height: 112%;
    color: #1F2020;
  }

  .product-price {
    margin: 0px;
    font-weight: 600;
    font-size: 16px;
    line-height: 100%;
    color: #1F2020;
  }


</style>
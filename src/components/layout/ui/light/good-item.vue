<template>
    <div class="product-card">
        <div class="product-img"><img :src="product.img" alt=""></div>
        <div class="product-body">
            <p class="product-title">{{ product.name }}</p>
            <div class="product-view">
                <h5 class="product-price">{{ product.price }} ₽</h5>
                <button class="product-purchase" @click="addProduct">+</button>
            </div>
        </div>
    </div>
</template>

<script>
import { brct } from '@/stores/counter'

export default {
    name: 'GoodItem',
    props: {
        product: {
            type: Object,
            required: true,
        }
    },
    methods: {
        addProduct(event) {
            brct().products.push(this.product)
        }
    }
}
</script>

<style scoped>

.product-card {
        display: flex;
        width: 238px;
        height: 302px;
        flex-direction: column;
        box-sizing: border-box;
        cursor: pointer;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    }

    .product-img img {
        width: 100%;
    }

    .product-title {
        font-weight: 300;
        font-size: 16px;
        letter-spacing: 0.02em;
        color: #1F2020;
    }

    .product-body {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        height: 100%;
    }

    .product-view {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        align-items: center;
    }

    .product-purchase {
        display: block;
        border: none;
        width: 30%;
        height: 2rem;
        background: #7BB899;
        border-radius: 8px;
        opacity: 0;
        transition: all 0.5s;
        cursor: pointer;
        font-size: 24px;
        align-items: center;
    }

    .product-card:hover .product-purchase {
        opacity: 1;
    }

    .product-price {
        font-weight: 600;
        font-size: 16px;
    }

    @media (max-width: 540px) {
        .product-card {
            width: 155px;
        }
    }

    @media (max-width: 1502px) {
        .product-card .product-purchase {
            opacity: 1;
        }

        .product-purchase {
            width: 40px;
            height: 32px;
            background-color: #F2F2F2;
            border-radius: 6px;
        }
    } 

</style>
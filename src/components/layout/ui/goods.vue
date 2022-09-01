<template>
  <section class="goods">
    <div class="side-menu">
        <div class="sw-main">
            <div class="switch-rs">
                <div class="switch" data-type="latest" @click="switcher">
                    <span class="dot"></span>
                </div>
                    <p class="switch-disc">Новинки</p>
            </div>
            <div class="switch-rs">
                <div class="switch" data-type="inStock" @click="switcher">
                    <span class="dot"></span>
                </div>
                <p class="switch-disc">Есть в наличии</p>
            </div>
            <div class="switch-rs">
                <div class="switch" data-type="isForContract" @click="switcher">
                    <span class="dot"></span>
                </div>
                <p class="switch-disc">Контрактные</p>
            </div>
            <div class="switch-rs">
                <div class="switch" data-type="exclusive" @click="switcher">
                    <span class="dot"></span>
                </div>
                <p class="switch-disc">Эксклюзивные</p>
            </div>
            <div class="switch-rs">
                <div class="switch" data-type="isDiscounted" @click="switcher">
                    <span class="dot"></span>
                </div>
                <p class="switch-disc">Распродажа</p>
            </div>
        </div>
    </div>
    <div class="goods-content">
        <div class="goods-header">
            <h1 class="goods-count">{{ productArray.length }} Товаров</h1>
            <div class="sort">
                <div class="sort-ct" @click="openSort">
                    <h1 class="sort-by">Сначала дорогие</h1>
                    <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 4.5L7.4641 0L0.535898 0L4 4.5Z" fill="#202020"/>
                    </svg>
                </div>
            </div>
            <div class="sort-target" v-if="this.isSortOpenned" @click="closeSort">
                <ul class="sort-content">
                    <li data-sort-by="highest" @click="sortByHighest">Сначала дорогие</li>
                    <li data-sort-by="lowest">Сначала дешевые</li>
                    <li data-sort-by="popular">Сначала популярные</li>
                    <li data-sort-by="newest">Сначала новые</li>
                </ul>
            </div>
        </div>
        <div class="goods-items">
            <GoodItem v-for="product in productArray" :key="product.id" :product="product"></GoodItem>
        </div>
    </div>
  </section>
</template>

<script>
export default {
    name: 'Goods',
    data() {
        return {
            isSortOpenned: false,
            productArray: [],
        }
    },
    methods: {
        switcher(event) {
            if (event.target.tagName != 'P') {
                if (event.target.classList.contains('active') || event.target.parentElement.classList.contains('active')) {
                    if (event.target.classList.contains('dot')) {
                        event.target.parentElement.classList.remove('active');
                        event.target.parentElement.style.backgroundColor = '#F2F2F2'; 
                        event.target.style.transform = 'translateX(0px)';
                    } else {
                        event.target.classList.remove('active');
                        event.target.style.backgroundColor = '#F2F2F2'; 
                        event.target.children[0].style.transform = 'translateX(0px)';
                    }
                } else {
                     if (event.target.classList.contains('dot')) {
                        event.target.parentElement.classList.add('active');
                        event.target.parentElement.style.backgroundColor = '#7BB899';
                        event.target.style.transform = 'translateX(12px)';
                    } else { 
                        event.target.classList.add('active');
                        event.target.style.backgroundColor = '#7BB899';
                        event.target.children[0].style.transform = 'translateX(12px)';
                    }
                }
            }
        },
        openSort(event) {
            if (this.isSortOpenned == false) {
                this.isSortOpenned = true;
            } else {
                this.isSortOpenned = false;
            }
        },
        closeSort(event) {
           if (event.target.classList.contains('sort-target')) {
                this.isSortOpenned = false;
           }
        },
        sortByHighest(event) {
            const comparePrice = (a, b) => {
                if (a.price < b.price) return 1;
                if (a.price == b.price) return 0;
                if (a.price > b.price) return -1;
            }
            this.productArray = this.productArray.sort(comparePrice);
            this.isSortOpenned = false;
        }
    },
    mounted() {
        fetch('https://630aa526f280658a59d0e2de.mockapi.io/api/goods/goods').then(response => response.json()).then(items => {
            this.productArray = items;
        })
    }
} 
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;500&display=swap');

    * {
        margin: 0;
        padding: 0;
        font-family: 'Inter', sans-serif;
    }

    .goods {
        padding: 1%;
        width: 100%;
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
    }

    .side-menu {
        padding-left: 2%;
        padding-right: 2%;
        width: 20%;
        box-sizing: border-box;
    }

    .sw-main {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        gap: 0.8rem;
    }

    .switch {
        transition: all 0.5s;
        cursor: pointer;
        display: flex;
        width: 36px;
        height: 18px;
        background-color: #F2F2F2;
        border-radius: 10px;
        display: flex;
        align-items: center;
        padding: 6px;
        box-sizing: border-box;
    }

    .switch-rs {
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 1rem;
        background-color: none;
    }

    .dot {
        transition: all 0.5s;
        display: block;
        position: relative;
        width: 8px;
        height: 8px;
        background: #1F2020;
        border-radius: 50%;
    }

    .switch-disc {
        font-weight: 400;
        font-size: 12px;
        margin-left: 6%;
    }

    .goods-content {
        width: 80%;
        padding-right: 5%;
        display: flex;
        flex-direction: column;
    }
    
    .goods-header {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        height: 3rem;
        align-items: flex-start;
    }

    .goods-count,
    .sort-by {
        color: black;
        font-weight: 500;
        font-size: 12px;
        line-height: 15px;
        letter-spacing: 0.06em;
    }

    .sort {
        font-weight: 500;
        font-size: 12px;
        line-height: 15px;
        display: flex;
        flex-direction: row;
        gap: 0.2rem;
        cursor: pointer;
        align-items: center;
    }

    .sort-ct {
        display: flex;
        flex-direction: row;
        color: white;
        align-items: center;
    }

    .sort-target {
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: 999;
        background-color: #00000077; 
    }
    
    .sort-content {
        box-sizing: border-box;
        position: absolute;
        flex-direction: column;
        list-style:none;
        display: flex;
        color: white;
        width: 18rem;
        height: 198px;
        right: 3%;
        top: 2%;
        background-color: white;
        color: black;
        font-weight: 500;
        font-size: 14px;
    }

    .sort-content > li  {
        transition: all 0.5s;
        cursor: pointer;
        height: 20%;
        padding-left: 10%;
        padding-top: 5%;
        background-color: white;
    }
 
    .sort-content > li:first-child {
        background-color: #7BB899;
    }

    .sort-content > li:hover {
        background-color: #7BB899;
    }

    .goods-items {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        width: 100%;
        height: 100%;
        gap: 1rem;
    }

</style>
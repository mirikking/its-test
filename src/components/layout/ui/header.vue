<template setup>
  <header class="layout-header">
  <div class="mobile-menu-btn" @click="openSortMenu">
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 6C2 5.44772 2.44772 5 3 5H21C21.5523 5 22 5.44772 22 6C22 6.55228 21.5523 7 21 7H3C2.44772 7 2 6.55228 2 6Z"
        fill="currentColor"
      />
      <path
        d="M2 12.0322C2 11.4799 2.44772 11.0322 3 11.0322H21C21.5523 11.0322 22 11.4799 22 12.0322C22 12.5845 21.5523 13.0322 21 13.0322H3C2.44772 13.0322 2 12.5845 2 12.0322Z"
        fill="currentColor"
      />
      <path
        d="M3 17.0645C2.44772 17.0645 2 17.5122 2 18.0645C2 18.6167 2.44772 19.0645 3 19.0645H21C21.5523 19.0645 22 18.6167 22 18.0645C22 17.5122 21.5523 17.0645 21 17.0645H3Z"
        fill="currentColor"
      />
    </svg>
  </div>
  <div class="logo">
      <h1 class="logo-font">COLORS</h1>
      <span class="logo-dot"></span>
  </div>
  <div class="user-disc">
    <h2><a href="">ПРОДУКТЫ</a></h2>
    <h2><a href="">ЦВЕТА</a></h2>
    <h2><a href="">ВДОХНОВЕНИЕ</a></h2>
    <h2><a href="">СОВЕТЫ</a></h2>
    <h2><a href="">НАЙТИ МАГАЗИН</a></h2>
  </div>
  <div class="contact">
    <a href="tel:+7 (495) 221-77-69" class="contact-tel"><h1>+7 (495) 221-77-69</h1></a>
    <p class="contact-tel-text">Заказать звонок</p>
  </div>
  <div class="user-menu">
    <div class="user-loop">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.16667 14.8333C11.8486 14.8333 14.8333 11.8486 14.8333 8.16667C14.8333 4.48477 11.8486 1.5 8.16667 1.5C4.48477 1.5 1.5 4.48477 1.5 8.16667C1.5 11.8486 4.48477 14.8333 8.16667 14.8333Z" stroke="#1F2020" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <svg class="loop-line" width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.5 4.5L0.875 0.875" stroke="#1F2020" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
    <div class="user-logo">
      <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="4" cy="4" r="3.4" stroke="black" stroke-width="1.2"/>
      </svg>
      <svg width="18" height="8" viewBox="0 0 18 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="9" cy="9" r="8.4" stroke="black" stroke-width="1.2"/>
      </svg>
    </div>
    <div class="user-heart">
      <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.0009 17C9.74503 17.0001 9.49782 16.9074 9.30525 16.739C8.57966 16.1047 7.87674 15.5067 7.25817 14.9802C5.65691 13.7048 4.16127 12.3023 2.78581 10.7865C1.67695 9.59183 1.0423 8.03408 1.00085 6.4053C0.976207 4.99164 1.48598 3.62067 2.42845 2.56595C2.88583 2.0681 3.44256 1.67154 4.06275 1.40184C4.68294 1.13214 5.35283 0.995297 6.0292 1.00012C7.05552 0.995406 8.053 1.3392 8.8581 1.97514C9.29424 2.31625 9.6791 2.71815 10.0009 3.16854C10.3231 2.71841 10.7082 2.31682 11.1446 1.97605C11.9489 1.34036 12.9453 0.99628 13.9708 1.00012C14.6472 0.995297 15.3171 1.13214 15.9372 1.40184C16.5574 1.67154 17.1142 2.0681 17.5715 2.56595C18.514 3.62067 19.0238 4.99164 18.9991 6.4053C18.9585 8.03374 18.3249 9.59147 17.2169 10.7865C15.8425 12.3013 14.3481 13.7028 12.7482 14.9775C12.1287 15.5049 11.4267 16.1029 10.6975 16.7399C10.5045 16.9081 10.257 17.0005 10.0009 17V17Z" stroke="black" stroke-width="1.2"/>
      </svg>
    </div>
    <div class="user-basket" @click="openBasket">
      <div class="user-basket-circle"><p> B </p></div>
    </div>
  </div>
  <div v-if="this.isBasketOppened" class="oppened-Basket">
    <div class="basket">
      <div class="basket-head">
        <div class="basket-text"><h1>Корзина</h1></div>
        <div class="basket-close" @click="closeBasket">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>
      <div class="basket-found">
        <p> {{this.productsCount}} Товара</p>
        <p class="basket-clear" @click="clearBasket">ОЧИСТИТЬ СПИСОК</p>
      </div>
      <div class="basket-items">
        <BasketItem v-for="product in products" :key="product.id" :product="product" @remove="updateBasket" @minusItem="minusItem" @plusItem="plusItem" :productAmount="productAmount"></BasketItem>
        <div class="basket-purchase">
          <div class="price-info">
            <p>Итого</p>
            <h1> {{ this.currentBasketPrice }} ₽</h1>
          </div>
          <div class="purchase-button">
            <button class="purchase-button-cntnt"><h5>ОФОРМИТЬ ЗАКАЗ</h5></button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="mobile-menu" v-if="isMobileMenuOpenned">
    <div class="mobile-content">
      <div class="mobile-close-btn" @click="closeMobileMenu">
      <svg width="28" height="4" viewBox="0 0 28 4" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect opacity="0.6" width="28" height="4" rx="2" fill="#1F2020"/>
      </svg>
    </div>
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
  </div>
</header>
</template>

<script>
import { brct } from '@/stores/counter'

export default {
  name: "TestHeader",
  data() {
    return {
      isBasketOppened: false,
      productsCount: 0,
      products: null,
      currentBasketPrice: 0,
      productAmount: 1,
      isMobileMenuOpenned: false,
      productArray: [],
      bustArray: [],
    }
  },
  methods: {
    openBasket(event) {
      this.isBasketOppened = true;
      if (brct().products.length > 0) {
        this.productsCount = brct().products.length;
        this.products = brct().products
        this.products.forEach(element => {
          this.currentBasketPrice +=  Number(element.price);
        })
      }
    },
    closeBasket(event) {
      this.isBasketOppened = false;
    },
    clearBasket(event) {
      this.productsCount = 0;
      this.products = 0;
      brct().products = [];
      this.currentBasketPrice = 0;
    },
    updateBasket(product) {
      this.products = this.products.filter(e => e.id !== product.id);
      this.productsCount = this.products.length;
      this.currentBasketPrice = 0;
      this.products.forEach(element => {
          this.currentBasketPrice +=  Number(element.price);
      })
    },
    plusItem(product) {
      this.productAmount += 1;
      this.currentBasketPrice += Number(product.price);
    },
    minusItem(product) {
      if (this.productAmount > 1) {
        this.productAmount -= 1;
        this.currentBasketPrice -= Number(product.price);
      }
    },
    openSortMenu() {
      this.isMobileMenuOpenned = true;
    },
    closeMobileMenu() {
      this.isMobileMenuOpenned = false;
    },
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
      if (event.target.closest('.switch').classList.contains('active')) {
          let currentSorted = event.target.closest('.switch').dataset.type;
          if (currentSorted == 'latest') { 
              this.productArray = this.bustArray.filter(el => el.latest == true);
          };
          if (currentSorted == 'inStock') {
              this.productArray = this.bustArray.filter(el => el.inStock == true);
          };
          if (currentSorted == 'isForContract') {
              this.productArray = this.bustArray.filter(el => el.isForContract == true);
          };
          if (currentSorted == 'exclusive') {
              this.productArray = this.bustArray.filter(el => el.exclusive == true);
          };
          if (currentSorted == 'isDiscounted') {
              this.productArray = this.bustArray.filter(el => el.isDiscounted == true);
          };
      } else {
          this.productArray = this.bustArray;
      }
    },
  },
  mounted() {
        fetch('https://630aa526f280658a59d0e2de.mockapi.io/api/goods/goods').then(response => response.json()).then(items => {
            this.productArray = items;
            this.bustArray = items;
        })
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;400;500&display=swap');

* {
  padding: 0;
  margin: 0;
  color: #1F2020;
}

  .mobile-content {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 20%;
    box-sizing: border-box;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 100%;
  }

  .sw-main {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      gap: 0.8rem;
      justify-content: center;
      margin-left: 10%;
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

.mobile-menu-btn {
  display: none;
}

.mobile-menu {
  display: block;
  background-color: rgba(0, 0, 0, 0.404);
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  z-index: 999;
}

.mobile-content {
  width: 100%;
  height: 318px;
  background: #FFFFFF;
  border-radius: 24px 24px 0px 0px;
  position: fixed;
  top: 73%;
}

.basket-found {
  margin-top: 12%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.basket-clear {
  color: #1F2020;
  opacity: 0.4;
  font-weight: 300;
  font-size: 14px;
  cursor: pointer;
}

.basket-purchase {
  display: flex;
  position: fixed;
  margin-top: 75vh;
  align-items: center;
}

  .oppened-Basket {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.404);
    top: 0px;
    left: 0px;
    width: 100%;
    height: 180%;
  }

  .basket {
    position: relative;
    left: 70%;
    width: 30%;
    height: 104.5%;
    background-color: white;
    box-sizing: border-box;
    padding: 40px;
    font-family: 'Inter';
    font-style: normal;
  }

  .basket-head {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .basket-close {
    cursor: pointer;
    display: flex;
    width: 8%;
    height: 2.5rem;
    border: 1px solid #00000049;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
  }

  .basket-items {
    display: flex;
    flex-direction: column;
  }

  .purchase-button-cntnt {
    cursor: pointer;
    border: none;
    width: 240px;
    height: 56px;
    background-color: #7BB899;
    border-radius: 4px;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    margin-left: 60%;
  }

  .price-info {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .price-info p{
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;
  }

  .price-info h1{
    font-weight: 500;
    font-size: 30px;
    line-height: 100%;
  }


  .layout-header {
    padding-left: 2%;
    padding-right: 2%;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 4rem;
    justify-content: space-between;
  }

  .logo {
    font-family: 'Roboto', sans-serif;
    display: flex;
    align-items: center;
    user-select: none;
  }
  .logo-dot {
    display: block;
    height: 8px;
    width: 8px;
    border-radius: 50%;
    background-color: black;
    margin-bottom: 15%;
  }

  .logo-font {
    font-weight: 400;
    font-size: 30px;
    line-height: 88%;
  }

  .user-disc {
    width: 30%;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: 8px;
    justify-content: space-between;
  }

  .user-disc a {
    text-decoration: none;
  }

  .contact {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Inter', sans-serif;
    color: #1F2020;
  }

  .contact-tel {
    text-decoration: none;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 8px;
    line-height: 100%;
  }

  .contact-tel-text {
    opacity: 1;
  }

  .user-menu {
    font-family: 'Inter', sans-serif;
    height: 100%;
    width: 10%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  }
  .user-loop {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  .loop-line {
    position: relative;
    top: 7px;
    left: -2px;
  }
  
  .user-logo,
  .user-heart {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2px;
  }

  .user-basket {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .user-basket-circle {
    cursor: pointer;
    user-select: none;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: #7BB899;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
  }

  @media (max-width: 1445px) {
        .user-disc {
            width: 60%;
        }
        .contact {
          display:none;
        }
    } 

    @media (max-width: 1000px) {
      .user-disc {
            width: 60%;
        }

        .user-menu {
          width: 20%;
        }
    }

    @media (max-width: 1000px) {
      .user-disc {
        display: none;
      }

      .layout-header {
        justify-content: center;
        gap: 4rem;
      }

    }
    
    @media (max-width: 540px) {
      .mobile-menu-btn {
        display: flex;
        align-items: center;
      }

      .user-menu {
        width: 35%;
      }

    }


</style>
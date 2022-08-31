<template setup>
  <header class="layout-header">
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
    <div class="user-cntn">
      <div class="user-cntn-circle"><p>4</p></div>
    </div>
  </div>
</header>
</template>

<script>
export default {
  name: "TestHeader",

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

  .user-cntn {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .user-cntn-circle {
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


</style>
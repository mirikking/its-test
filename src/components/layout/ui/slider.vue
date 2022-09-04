<template>
    <section class="slider">
        <div class="catalog-path">
            <p>ГЛАВНАЯ</p>
            <span class="catalog-path-dot"></span>
            <p>ПРОДУКТЫ</p>
            <span class="catalog-path-dot"></span>
            <p>КРАСКИ</p>
        </div>
        <div class="switcher-left" @click="slideLeft">
            <svg width="22" height="42" viewBox="0 0 22 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 41L21 21L1 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
        <div class="slider-content">
            <h1>Краски</h1>
            <p>Идеально подходят для стен и других поверхностей. Найди свой идеальный цвет!</p>
            <div class="slider-state" :data-slide="this.currentSlide">
                <span class="slider-state-dots"></span>
                <span class="slider-state-dots"></span>
                <span class="slider-state-dots"></span>
                <span class="slider-state-dots"></span>
                <span class="slider-state-dots"></span>
                <span class="slider-state-dots"></span>
            </div>  
        </div>
        <div class="switcher-right" @click="slideRight">
            <svg width="22" height="42" viewBox="0 0 22 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 41L21 21L1 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
    </section>
</template>

<script>
export default {
    name: "TestSlider",
    data() {
        return {
            currentSlide: 0,
        }
    },
    methods: {
        slideLeft(event) {
            if (this.currentSlide > 0) {
                this.currentSlide--
                document.querySelector('.slider').style.backgroundImage = `url('/assets/${this.currentSlide+1}.png')`
            }
            document.querySelectorAll('.slider-state-dots')[this.currentSlide].style.opacity = 1;
            document.querySelectorAll('.slider-state-dots')[this.currentSlide+1].style.opacity = 0.3;
            if (this.currentSlide > 0) {
                document.querySelector('.switcher-left').style.visibility = 'visible';
            } else {
                document.querySelector('.switcher-left').style.visibility = 'hidden';
            }
            if (this.currentSlide != 5) {
                document.querySelector('.switcher-right').style.visibility = 'visible';
            } 
        },
        slideRight(event) {
            if (this.currentSlide < 5) {
                this.currentSlide++
                document.querySelector('.slider').style.backgroundImage = `url('/assets/${this.currentSlide+1}.png')`
            }
            document.querySelectorAll('.slider-state-dots')[this.currentSlide].style.opacity = 1;
            document.querySelectorAll('.slider-state-dots')[this.currentSlide-1].style.opacity = 0.3;
            if (this.currentSlide > 0) {
                document.querySelector('.switcher-left').style.visibility = 'visible';
            }
            if (this.currentSlide == 5) {
                document.querySelector('.switcher-right').style.visibility = 'hidden';
            }
        }
    },
    mounted() {
        document.querySelectorAll('.slider-state-dots')[this.currentSlide].style.opacity = 1
        if (this.currentSlide <= 0) {
            document.querySelector('.switcher-left').style.visibility = 'hidden';
        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;400;500&display=swap');

    * {
        margin: 0;
        padding: 0;
        font-family: 'Inter', sans-serif;
    }

    .slider {
        color: #FFFFFF;
        width: 100%;
        height: 35rem;
        background-image: url('/assets/1.png');
        background-size: contain;
        display: flex;
        box-sizing: border-box;
        padding: 2%;
        transition: all 0.5s;
    }

    .slider-content {
        user-select: none;
        width: 20%;
        display: flex;
        align-self: center;
        flex-direction: column;
        text-align: center;
        margin-left: 10%;
        margin-right: 10%;
        align-items: center;
    }

    .slider-content p {
        margin-top: 6%;
        font-weight: 400;
        font-size: 14px;
        line-height: 130%;
        letter-spacing: 0.02em;
    }

    .slider-content h1 {
        font-weight: 400;
        font-size: 72px;
        line-height: 88%;
        letter-spacing: -0.02em;
    }

    .catalog-path {
        user-select: none;
        align-items: center;
        width: 30%;
        display: flex;
        align-self: flex-start;
        color: #C4C4C4;
        opacity: 0.3;
        gap: 1rem;
        font-size: 12px;
        line-height: 88%;
        letter-spacing: -0.02em;
    }

    .catalog-path-dot {
        height: 4px;
        width: 4px;
        background: #C4C4C4;
        border-radius: 50%;
    }

    .switcher-right {
        cursor: pointer;
        display: flex;
        align-items: center;
        margin-top: 10%;
    }

    .switcher-left {
        cursor: pointer;
        display: flex;
        align-items: center;
        margin-top: 10%;
        transform: rotate(180deg);
    }

    .slider-state {
        display: flex;
        flex-direction: row;
        position: relative;
        width: 124px;
        height: 32px;
        background: rgba(0, 0, 0, 0.4);
        border-radius: 16px;
        top: 10rem;
        box-sizing: border-box;
        padding: 4%;
        justify-content: space-around;
    }

    .slider-state-dots {
        display: flex;
        background: white;
        opacity: 0.2;
        width: 6px;
        height: 6px;
        border-radius: 50%;
    }

    @media (max-width: 1000px) {
        .slider {
            background-image: none;
            height: 5rem
        }
        .switcher-left,
        .slider-content,
        .switcher-right {
            display: none;
        }

        .catalog-path {
            color: #1F2020;
        }
    } 

</style>
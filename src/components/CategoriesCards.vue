<template>
    <div>
        <div v-if="isDesktop" class="categories-cards">
            <b-row>
                <b-col cols="6">
                    <h4>Worlds</h4>
                    <hr />
                    <hr id="red-hr" />
                    <div class="card-content">
                        <div class="card">
                            <div class="card-img-container">
                                <img src="https://themes.themeregion.com/newspress/wp-content/uploads/2016/03/10-1-1-1024x586.jpg"
                                    class="card-img-top" alt="...">
                                <b-badge class="badge" variant="danger">New</b-badge>
                            </div>
                        </div>
                        <div class="card-body">
                            <p class="card-text">{{ item.details }}</p>
                            <h6 class="card-title">{{ item.title }}</h6>
                            <p class="card-title">{{ item.description }}</p>
                        </div>
                        <b-list-group class="list-group">
                            <b-list-group-item class="list-group-item">
                                Cras justo odio <i class="bi bi-arrow-right-short"></i></b-list-group-item>
                            <b-list-group-item class="list-group-item">
                                Dapibus ac facilisis in <i class="bi bi-arrow-right-short"></i></b-list-group-item>
                            <b-list-group-item class="list-group-item">
                                Morbi leo risus <i class="bi bi-arrow-right-short"></i></b-list-group-item>
                            <b-list-group-item class="list-group-item">
                                Porta ac consectetur ac <i class="bi bi-arrow-right-short"></i></b-list-group-item>
                            <b-list-group-item class="list-group-item">
                                Vestibulum at eros <i class="bi bi-arrow-right-short"></i></b-list-group-item>
                          </b-list-group>
                    </div>
                    <h4>Technology</h4>
                    <hr />
                    <hr id="red-hr" />
                    <div class="card-content">
                        <div class="card">
                            <div class="card-img-container">
                                <img src="https://themes.themeregion.com/newspress/wp-content/uploads/2016/03/10-1-1-1024x586.jpg"
                                    class="card-img-top" alt="...">
                                <b-badge class="badge" variant="danger">New</b-badge>
                            </div>
                        </div>
                        <div class="card-body">
                            <p class="card-text">{{ item.details }}</p>
                            <h6 class="card-title">{{ item.title }}</h6>
                            <p class="card-title">{{ item.description }}</p>
                        </div>
                    </div>
                    <p class="advertisement-span">Advertisement</p>
                    <div class="img-col-add-prime"
                        style="background-image: url(https://themes.themeregion.com/newspress/wp-content/uploads/2016/03/add4.jpg);">

                    </div>
                </b-col>
                <b-col cols="3">
                    <h4>Sports</h4>
                    <hr />
                    <hr id="red-hr" />
                    <div class="d-flex flex-column">
                        <div class="card-content">
                            <div class="card">
                                <div class="card-img-container">
                                    <img src="https://themes.themeregion.com/newspress/wp-content/uploads/2016/03/10-1-1-1024x586.jpg"
                                        class="card-img-top" alt="...">
                                    <b-badge class="badge" variant="danger">New</b-badge>
                                </div>
                            </div>
                            <div class="card-body">
                                <p class="card-text">{{ item.details }}</p>
                                <h6 class="card-title">{{ item.title }}</h6>
                            </div>
                        </div>
                        <div class="card-content">
                            <div class="card">
                                <div class="card-img-container">
                                    <img src="https://themes.themeregion.com/newspress/wp-content/uploads/2016/03/10-1-1-1024x586.jpg"
                                        class="card-img-top" alt="...">
                                    <b-badge class="badge" variant="danger">New</b-badge>
                                </div>
                            </div>
                            <div class="card-body">
                                <p class="card-text">{{ item.details }}</p>
                                <h6 class="card-title">{{ item.title }}</h6>
                            </div>
                        </div>
                        <div class="card-content">
                            <div class="card">
                                <div class="card-img-container">
                                    <img src="https://themes.themeregion.com/newspress/wp-content/uploads/2016/03/10-1-1-1024x586.jpg"
                                        class="card-img-top" alt="...">
                                    <b-badge class="badge" variant="danger">New</b-badge>
                                </div>
                            </div>
                            <div class="card-body">
                                <p class="card-text">{{ item.details }}</p>
                                <h6 class="card-title">{{ item.title }}</h6>
                            </div>
                        </div>
                        <p class="advertisement-span">Advertisement</p>
                        <div class="img-col-add-exclusive"
                            style="background-image: url(https://themes.themeregion.com/newspress/wp-content/uploads/2016/03/add5.jpg);">

                        </div>
                        <div class="card-content">
                            <div class="card">
                                <div class="card-img-container">
                                    <img src="https://themes.themeregion.com/newspress/wp-content/uploads/2016/03/10-1-1-1024x586.jpg"
                                        class="card-img-top" alt="...">
                                    <b-badge class="badge" variant="danger">New</b-badge>
                                </div>
                            </div>
                            <div class="card-body">
                                <p class="card-text">{{ item.details }}</p>
                                <h6 class="card-title">{{ item.title }}</h6>
                            </div>
                        </div>
                    </div>
                </b-col>
                <b-col cols="3">
                    <h4>Follow Us</h4>
                    <hr />
                    <hr id="red-hr" />
                    <i class="bi bi-facebook"></i>
                    <i class="bi bi-instagram"></i>
                    <i class="bi bi-twitter"></i>
                    <i class="bi bi-google"></i>
                    <i class="bi bi-linkedin"></i>
                    <i class="bi bi-youtube"></i>
                    <p class="advertisement-span">Advertisement</p>
                    <div class="img-col-add-elite"
                        style="background-image: url(https://themes.themeregion.com/newspress/wp-content/uploads/2016/03/add3.jpg);">

                    </div>
                    <div class="col-weather">
                        <h5>Sarajevo</h5>
                        <img src="http://openweathermap.org/img/w/04d.png" />
                        <p>26°</p>
                        <div class="d-flex justify-content-center">
                        <i class="bi bi-droplet-fill"></i>
                        <p>50%</p>
                        <i class="bi bi-wind"></i>
                        <p>5 MPH</p>
                        </div>
                    </div>
                    
                    <h4>Popular News</h4>
                    <hr />
                    <hr id="red-hr" />
                    <div class="card-content">
                        <div class="card">
                            <div class="card-img-container">
                                <img src="https://themes.themeregion.com/newspress/wp-content/uploads/2016/03/10-1-1-1024x586.jpg"
                                    class="card-img-top" alt="...">
                                <b-badge class="badge" variant="danger">New</b-badge>
                            </div>
                        </div>
                        <div class="card-body">
                            <p class="card-text">{{ item.details }}</p>
                            <h6 class="card-title">{{ item.title }}</h6>
                        </div>
                    </div>
                    <div class="card-content">
                        <div class="card">
                            <div class="card-img-container">
                                <img src="https://themes.themeregion.com/newspress/wp-content/uploads/2016/03/10-1-1-1024x586.jpg"
                                    class="card-img-top" alt="...">
                                <b-badge class="badge" variant="danger">New</b-badge>
                            </div>
                        </div>
                        <div class="card-body">
                            <p class="card-text">{{ item.details }}</p>
                            <h6 class="card-title">{{ item.title }}</h6>
                        </div>
                    </div>
                    <div class="card-content">
                        <div class="card">
                            <div class="card-img-container">
                                <img src="https://themes.themeregion.com/newspress/wp-content/uploads/2016/03/10-1-1-1024x586.jpg"
                                    class="card-img-top" alt="...">
                                <b-badge class="badge" variant="danger">New</b-badge>
                            </div>
                        </div>
                        <div class="card-body">
                            <p class="card-text">{{ item.details }}</p>
                            <h6 class="card-title">{{ item.title }}</h6>
                        </div>
                    </div>
                    <p class="advertisement-span">Advertisement</p>
                    <div class="img-col-add-elite"
                        style="background-image: url(https://themes.themeregion.com/newspress/wp-content/uploads/2016/03/add6.jpg);">

                    </div>
                </b-col>
            </b-row>
        </div>
        <div v-else>
            <p>Mobile</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isDesktop: true,
            item: { // Primer podatka, prilagodi prema potrebi
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo',
                title: 'Ut Enim Ad Minim Veniam Quis Nostrud',
                details: 'Mar 12, 2017 2.4k'
            }
        };
    },
    mounted() {
        this.setDeviceType();
        window.addEventListener("resize", this.setDeviceType);
    },
    beforeDestroy() { // ili beforeUnmount za Vue 3
        window.removeEventListener("resize", this.setDeviceType);
    },
    methods: {
        setDeviceType() {
            this.isDesktop = window.matchMedia("(min-width: 992px)").matches;
        },
    },
};
</script>

<style scoped>
.categories-cards {
    border: 2px solid red;
    margin-top: 3vh;

    hr {
        position: relative;
        margin-top: -0.5vh;
        font-weight: 900;
        border: 2px solid gray;
    }

    #red-hr {
        margin-top: -2.2vh;
        font-weight: 900;
        width: 16vh;
        border: 2px solid red;
    }

    .card-content {
        margin-top: 1vh;
        border: 1px solid red;
    }

    .card {
        border: 1px solid red;
        border-radius: 5px;
        overflow: hidden;
        position: relative;
        /* Added to position the badge absolutely within the card */
    }

    .card-img-container {
        position: relative;
        /* Added to position the badge absolutely within the image */
    }

    .card-img-top {
        width: 100%;
        height: auto;
    }

    .badge {
        position: absolute;
        top: 10px;
        right: 10px;
        z-index: 10;
        font-size: 1.7vh;
    }

    .card-body {
        padding: 15px;
    }

    .card-title,
    .card-text {
        margin: 0px;
    }

    .bi {
        font-size: 3.5vh;
        /* Adjust the size as needed */
        margin: 0.6vh;
        /* Optional: Add space between icons */
        background-color: black;
        color: white;
        border-radius: 5px;
        padding: 0.4vh;
        display: inline-block;
        text-align: center;
        line-height: 1;
        cursor: pointer;
    }

    .bi-facebook {
        background: rgb(68, 68, 141);
    }

    .bi-instagram {
        background: linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888);
    }

    .bi-google {
        background: rgb(133, 3, 3);
    }

    .bi-twitter {
        background: skyblue;
    }

    .bi-youtube {
        background-color: red;
    }

    .bi-linkedin {
        background: rgb(74, 74, 222);
    }

    .img-col-add-prime {
        height: 9vh;
        width: 100%;
        background-size: 100% 100%;
        background-repeat: no-repeat;
    }
    
    .img-col-add-exclusive {
        height: 27vh;
        width: 100%;
        background-size: 100% 100%;
        background-repeat: no-repeat;
    }

    .img-col-add-elite {
        height: 27vh;
        width: 100%;
        background-size: 100% 100%;
        background-repeat: no-repeat;
    }

    .advertisement-span {
        color: gray;
        margin-bottom: 0vh;
        font-size: 1.2vh;
        text-align: end;
    }

    .col-weather {
        border: 2px solid red;
        text-align: center;  
        margin-top: 2vh;

        .bi {
            font-size: 1.3vh;
            /* Adjust the size as needed */
            margin: 0.6vh;
            /* Optional: Add space between icons */
            background-color: white;
            color: gray;
            border-radius: 5px;
            padding: 0.4vh;
            display: inline-block;
            text-align: center;
            line-height: 1;
            cursor: pointer;
        }
    }

    .list-group-item {
        display: flex;

        .bi {
            font-size: 2.5vh;
            /* Adjust the size as needed */
            margin: 0.6vh;
            margin-left: auto;
            /* Optional: Add space between icons */
            background-color: white;
            color: gray;
            border-radius: 5px;
            padding: 0vh;
            display: inline-block;
            line-height: 1;
            cursor: pointer;
        }

    }

    .list-group-item:hover {
        color: gray;

        .bi {
            font-size: 2.5vh;
            margin: 0.6vh;
            margin-left: auto;
            background-color: transparent;
            color: red;
            border-radius: 5px;
            padding: 0vh;
            display: inline-block;
            line-height: 1;
            cursor: pointer;
        }
    }
}
</style>

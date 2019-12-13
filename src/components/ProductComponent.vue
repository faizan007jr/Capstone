<template>
    <div class="col-md-4">
        <div class="card mb-4 box-shadow">
            <img class="card-img-top" :src="getImage()" style="height: 225px; width: 100%; display: block;">
            <div class="card-body">
                <h5 class="card-title">{{product.name}}</h5>
                <p class="card-text">{{ product.description }}</p>
                <div class="d-flex justify-content-between align-items-center">
                    <!--<div class="btn-group">
                        <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                        <button type="button" @click="onEdit()" v-if="editable" class="btn btn-sm btn-outline-secondary">Edit</button>
                    </div>-->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import router from "../router";
    import {mapActions, mapGetters} from "vuex";
    import store from "../vuex/store";

    export default {
        name: "ProductComponent",
        props: ['product', 'editable'],
        methods: {
            ...mapActions(['fetchProductImageURL']),
            onEdit() {
                router.push('/your-ads/' + this.product._id);
            },
            getImage() {
                let img = require('../assets/' + this.product.imageURL);
                return img;
            }
        },
        computed: mapGetters({
            productImageURL: 'productImageURL'
        }),
        store,
    }
</script>

<style scoped>
    .box-shadow { box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05); }
</style>
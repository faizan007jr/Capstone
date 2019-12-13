<template>
    <main class="album py-5 bg-light text-left">
        <div class="container">
            <div class="row">
                <product-component v-for="product in productList" :product="product" :editable="false" :key="product._id"></product-component>
            </div>
        </div>
    </main>
</template>

<script>
    import {mapActions, mapGetters} from "vuex";
    import ProductComponent from "./ProductComponent";
    import store from "../vuex/store";

    export default {
        components: {
            ProductComponent
        },
        methods: mapActions(['populateProductList']),
        computed: mapGetters({
            productList: 'getProductList'
        }),
        store,
        mounted() {
            this.populateProductList();
        }
    }
</script>

<style scoped>

</style>
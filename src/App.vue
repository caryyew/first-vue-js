<template>
  <div>
      <Product :product="product" v-for="product in productList" :key="product.id" />
  </div>
  
</template>

<script>
import MainContainer from './components/MainContainer.vue';
import Product from '@/components/Product.vue'
export default {
  components: {
    MainContainer, 
    Product
  },
  
  data() {
    return {
      productList: [
        {
          id: 1,
          title: "Mackbook Pro",
          price: 1000,
          count: 336,
          description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit inventore soluta consectetur dolore voluptatibus asperiores!",
       
        },
        {
          id: 2,
          title: "Zenbook",
          price: 91,
          count: 48,
          description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit inventore soluta consectetur dolore voluptatibus asperiores!",
        
        },
        {
          id: 3,
          title: "lenovo",
          price: 647,
          count: 102,
          description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit inventore soluta consectetur dolore voluptatibus asperiores!",
          
        },
        {
          id: 4,
          title: "Acer",
          price: 5946,
          count: 318,
          description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit inventore soluta consectetur dolore voluptatibus asperiores!",
        
        },
      ]
    }
  }
}
</script>
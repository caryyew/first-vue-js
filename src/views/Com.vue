<template>
    <div class="container-fluid">
      <div class="row">
        <div class="col-10"><Product @addToCart="cartItems.push($event)" :product="product" v-for="product in productList" :key="product.id" /></div>
        <div class="col-2">
          <h3>Sebet</h3>
          <ul>
            <li v-for="item in cartItems" :key="item.id">{{ item.title }}</li>
          </ul>
          <p v-if="cartItems.length == 0">Sepetiniz bos</p>
        </div>
      </div>
  
    </div>
    
  </template>
  
  <script>
  import Product from '@/views/Product.vue'
  export default {
    components: { 
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
            title: "Lenovo",
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
        ],
        cartItems : []
      }
    }
  }
  </script>
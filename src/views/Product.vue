<template>
    <div class="container">
<div class="row">
  <div class="card my-3 mx-1" style="width: 14rem;">
    <img src="@/assets/com.jpg" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">{{product.title}}</h5>
      <ul class="list-group list-group-flush">
    <li class="list-group-item">Bahasy : {{ product.price }}</li>
    <li class="list-group-item">Sany: {{ product.count }}</li>
    <li class="list-group-item"> <small>{{product.description}}</small></li>
  </ul>
  <button type="button" class="btn btn-success">Sebede gos</button>
    </div>
  </div>
  <div class="card my-3 mx-1" style="width: 14rem;">
    <img src="@/assets/com.jpg" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">{{product.title}}</h5>
      <ul class="list-group list-group-flush">
    <li class="list-group-item">Bahasy : {{ product.price }}</li>
    <li class="list-group-item">Sany: {{ product.count }}</li>
    <li class="list-group-item"><small>{{product.description}}</small></li>
  </ul>
  <button type="button" class="btn btn-success">Sebede gos</button>
    </div>
  </div>
  <div class="card my-3 mx-1" style="width: 14rem;">
    <img src="@/assets/com.jpg" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">{{product.title}}</h5>
      <ul class="list-group list-group-flush">
    <li class="list-group-item">Bahasy : {{ product.price }}</li>
    <li class="list-group-item">Sany: {{ product.count }}</li>
    <li class="list-group-item"><small>{{product.description}}</small></li>
  </ul>
  <button @click="addToCart(product)" type="button" class="btn btn-success">Sebede gos</button>
    </div>
  </div>




</div>
</div>
</template>

<script>
export default {
    props: ["product"],
    methods: {
      addToCart(product){
      this.$emit("addToCart", product)
      }
    }
}
</script>
<template>
  <div class="container mt-3">
    <ul class="list-group">
      <li class=" list-group-item shirt-item" v-for="shirt in shirts">
        <div>
          <h4>{{ shirt.company }}</h4>
          <p>{{ shirt.description }}</p>
          <hr>
          <ul>
            <li class="step-list" v-for="(step, index) in shirt.steps">
              {{ index + 1 }} - {{ step }}
            </li>
          </ul>
          <a :href="shirt.website.linkToShirt" class="btn btn-primary mt-2" target="_blank">Get This Shirt</a>
        </div>
      </li>
    </ul>
    <pre><code>{{ shirts }}</code></pre>
  </div>
</template>

<script>
import * as data from '../shirts.json'

export default {
  data () {
    return {
      shirts: data.shirts
    }
  }
}
</script>

<style lang="css">
  .shirt-item div {
    padding: .5rem 0;
  }
  
  .shirt-item h4, .shirt-item p {
    margin: 0;
  }
  
  .step-list {
    list-style: none;
    margin-left: -15px;
  }
</style>

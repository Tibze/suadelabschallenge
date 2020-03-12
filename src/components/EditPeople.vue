<template>
  <div class="edit-people">
    <table class="table table-sm">
      <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Name</th>
        <th scope="col">Age</th>
        <th scope="col">EyeColor</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item, index) in peoples" :key="index">
        <th scope="row">{{index + 1}}</th>
        <td class="name">{{item.name}}</td>
        <td>
          <select class="form-input" @change="changeHandler($event, item)">
            <option v-for="index in 100" :key="index" :selected="item.age == index" :value="index">{{index}}</option>
          </select>
        </td>
        <td>{{item.eyeColor}}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'EditPeople',
  props: {
    peoples: Array
  },
  methods: {
    changeHandler (e, item) {
      const value = e.target.value
      this.$emit('update-age', {
        item,
        value
      })
    }
  }
}
</script>

<script setup>
import { RouterLink } from 'vue-router';
import { reactive } from 'vue';

const state = reactive({
  records: JSON.parse(localStorage.getItem("records"))
})

</script>

<template>

  <div class="hall view-style">
    <RouterLink to="/">
      <div class="arrow" />
      <h2>To the Main Page</h2>
    </RouterLink>
    <div class="records">
      <h2>Top Ten Best Results</h2>
      <table>
        <thead>
          <tr>
            <th>Place</th>
            <th>Time</th>
            <th>Level</th>
            <th>Invaders Killed</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(record, index) in state.records">
            <td>{{ index + 1}}</td>
            <td>{{ record.time }}</td>
            <td>{{ record.level }}</td>
            <td>{{ record.invadersKilled }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

</template>
<style>
.hall {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.records {
  margin: 3%;
}
.records h2 {
  width:100%;
  text-decoration: none;
  text-align: center;
  font-weight: 900;
}
.records td,th {
  text-align: center;
  border: solid black 1px;
  padding: 5px;
  font-size: 1.1rem;
  font-weight: 500;
}
.records th {
  font-weight: 700;
}

.arrow {
  width: 20px;
  height: 20px;
  display: inline-block;
  border-left: solid 1px black;
  border-bottom: solid 1px black;
  transform: rotate(45deg);
}
</style>
<template>
  <div>
    <div v-for="patient of $store.state.patients" :key="patient.id">
      <table class="table table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Apellido</th>
            <th scope="col">Edad</th>
            <th scope="col">Provisión</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>{{ patient.name }}</td>
            <td>{{ patient.apellido }}</td>
            <td>{{ patient.age }}</td>
            <td>{{ patient.prevision }}</td>
            <td>
              <button
                class="btn btn-warning"
                @click="$emit('editarPaciente', patient)"
              >
                Editar
              </button>
            </td>
            <td>
              <button class="btn btn-danger" @click="deleteUser(patient)">
                Borrar
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "PatientList",

  props: {
    patients: { type: Array, require: true },
  },

  methods: {
    deleteUser(patient) {
      this.$store.dispatch("adiosPacientet", patient);
    },
  },
};
</script>

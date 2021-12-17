<template>
  <div class="container">
    <h1 class="mt-5">
      <b>Bienvenidos al <em class="text-success">desafío</em></b>
    </h1>
    <div>
      <div>
        <patients-list :patients="patients" @editarPaciente="editarPaciente" />
      </div>
    </div>
    <div>
      <h3 class="mb-5">Agregar y editar pacientes</h3>
      <div class="mb-5">
        <button class="btn btn-success mr-2" @click="showcrearForm">
          Agregar
        </button>
      </div>
    </div>

    <div class="row">
      <div class="p-3 mb-2 bg-dark text-white col-6" v-if="crearForm">
        <h3>Agregar</h3>
        <patient-form :crearForm="true" />
      </div>

      <div class="p-3 mb-2 bg-info text-white col-6" v-if="editarForm">
        <h3>Editar</h3>
        <patient-form :paraEditar="paraEditar" :crearForm="false" />
      </div>
    </div>
  </div>
</template>

<script>
import PatientsList from "../components/PatientsList.vue";
import PatientForm from "../components/PatientForm.vue";

export default {
  name: "Home",
  components: {
    PatientsList,
    PatientForm,
  },
  data: () => ({
    patients: [],
    crearForm: false,
    editarForm: false,
    paraEditar: {},
  }),
  methods: {
    showcrearForm() {
      this.crearForm = !this.crearForm;
      this.crearForm
        ? (this.titleCreation = "Ocultar")
        : (this.titleCreation = "Mostrar");
    },
    showeditarForm() {
      this.editarForm = !this.editarForm;
      this.editarForm
        ? (this.titleEdition = "Ocultar")
        : (this.titleEdition = "Mostrar");
    },
    editarPaciente(patient) {
      this.editarForm = !this.editarForm;
      this.paraEditar = patient;
      this.$store.dispatch("editarPaciente", patient);
      this.editarForm
        ? (this.titleEdition = "Ocultar")
        : (this.titleEdition = "Mostrar");
    },
  },
  mounted() {
    this.$store.dispatch("verTodos");
  },
};
</script>

<template>
  <div id="patient-list-view">
    <v-container fluid>
      <v-card elevation="5" class="pa-5">
        <!-- Patient List Table -->
        <v-data-table
          :headers="table.headers"
          :items="table.patients"
          :search="table.search"
        >
          <template v-slot:top>
            <v-toolbar flat>
              <v-toolbar-title>Listado de Pacientes</v-toolbar-title>
              <v-spacer />
              <v-text-field
                v-model="table.search"
                append-icon="mdi-magnify"
                label="Search"
                color="grey"
                single-line
                hide-details
              />
              <v-divider class="mx-4" inset vertical />
            </v-toolbar>
          </template>
          <template slot="item.delete" slot-scope="props">
            <div class="text-center">
              <v-icon
                dark
                color="red"
                class="mx-auto"
                @click="deleteItem(props.item)"
              >
                mdi-delete
              </v-icon>
            </div>
          </template>
        </v-data-table>
        <!-- / Patient List Table -->
      </v-card>
    </v-container>

    <!-- Delete Dialog -->
    <v-dialog v-model="dialogDelete" width="320">
      <v-card>
        <v-card-title class="text-subtitle-1"
          >Estás seguro que deseas eliminarlo?</v-card-title
        >
        <v-card-actions>
          <v-spacer />

          <v-btn color="secondary" text @click="closeDelete">Cancelar</v-btn>
          <v-btn color="secondary" text @click="deleteItemConfirm">Si</v-btn>
          <v-spacer />
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- / Delete Dialog -->
  </div>
</template>

<script>
export default {
  name: "PatientListView",
  data: () => ({
    editedIndex: -1,
    editedItem: null,
    dialogDelete: false,
    table: {
      search: "",
      headers: [
        {
          text: "Nombre",
          align: "start",
          value: "name",
        },
        { text: "Apellidos", value: "surnames" },
        { text: "CI", value: "ci" },
        { text: "Dirección", value: "address" },
        { text: "País", value: "country" },
        { text: "Fecha de nacimiento", value: "birthday" },
        { text: "Sexo", value: "gender" },
        { text: "Eliminar", value: "delete", sortable: false },
      ],
      patients: [
        {
          name: "Susan",
          surnames: "Camper",
          ci: "98124312781",
          address: "Calle 32 E/ Calle Ancha y Calle Martí",
          country: "Cuba",
          birthday: "1998-12-04",
          gender: "Femenino",
        },
        {
          name: "Rocky",
          surnames: "Camper",
          ci: "00124312782",
          address: "Calle 32 E/ Calle Ancha y Calle Martí",
          country: "Francia",
          birthday: "1998-12-04",
          gender: "Masculino",
        },
        {
          name: "Sam",
          surnames: "Camper",
          ci: "01124312785",
          address: "Calle 32 E/ Calle Ancha y Calle Martí",
          country: "Cuba",
          birthday: "1998-12-22",
          gender: "Masculino",
        },
        {
          name: "Elizabeth",
          surnames: "Anth",
          ci: "06124312785",
          address: "Calle 32 E/ Calle Ancha y Calle Martí",
          country: "Alemania",
          birthday: "1998-12-14",
          gender: "Femenino",
        },
        {
          name: "Rox",
          surnames: "Perry",
          ci: "93124312785",
          address: "Calle 32 Rotonda",
          country: "EEUU",
          birthday: "1998-12-04",
          gender: "Femenino",
        },
      ],
    },
  }),
  methods: {
    deleteItem(patient) {
      this.editedIndex = this.table.patients.indexOf(patient);
      this.editedItem = Object.assign({}, patient);
      this.dialogDelete = true;
    },
    deleteItemConfirm() {
      this.table.patients.splice(this.editedIndex, 1);
      this.closeDelete();
    },
    closeDelete() {
      this.dialogDelete = false;
    },
  },
};
</script>

<style lang="scss" scoped>
#patient-list-view {
  padding-top: 4.5rem;
}
</style>
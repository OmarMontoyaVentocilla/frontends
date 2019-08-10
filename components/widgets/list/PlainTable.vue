<template>
  <v-card>
    <v-toolbar card dense color="transparent">
      <v-toolbar-title><h4>Proovedor</h4></v-toolbar-title>
      <v-spacer></v-spacer>
     
      <v-btn flat icon color="green" dark @click.prevent="showModal()">
        <v-icon>control_point</v-icon>
      </v-btn>
       



<v-app>
    <v-layout justify-center>
      <v-dialog v-model="dialog" persistent max-width="600px">
       <v-card ref="form">
          <v-card-title>
            <span class="headline">Agregar Demo</span>
          </v-card-title>
          <v-card-text>
            
            <v-form>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12 sm12 md12 lg12>
                  <v-text-field v-model="texto" label="Texto" outlined></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="red" text @click="dialog = false">Cerrar</v-btn>
            <v-btn color="blue" text @click.prevent="addDemo">Guardar</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
</v-layout>
  </v-app>








      <v-btn icon @click.prevent="refresh()">
        <v-icon>refresh</v-icon>
      </v-btn>
    </v-toolbar>
    <v-divider></v-divider>
    <v-card-text class="pa-0">
      <template>
        <v-data-table
          :headers="headers"
          :items="demo"
          hide-actions
          class="elevation-0"
        >
          <template slot="items" slot-scope="props">
            <!-- <td>
              <v-avatar size="36px">
                <img :src="props.item.avatar" :alt="props.item.username" />
              </v-avatar>
            </td> -->
            <td>{{ props.item.text }}</td>
            <!-- <td class="text-xs-left">{{ props.item.deadline }}</td>
            <td class="text-xs-left"><v-progress-linear :value="props.item.progress" height="5" :color="props.item.color"></v-progress-linear> </td> -->
            <td class="text-xs-right">
              <v-btn flat icon color="blue">
                <v-icon>edit</v-icon>
              </v-btn>
              <v-btn flat icon color="red" @click.prevent="deleteDemo(props.item.id)">
                <v-icon>delete</v-icon>
              </v-btn>
            </td>
          </template>
        </v-data-table>
      </template>
      <v-divider></v-divider>
    </v-card-text>


     <v-snackbar
      :timeout=timeout
      bottom
      right
      color="success"
      v-model="mensajeAlerta"
    >
      correcto!
      <v-btn flat icon dark @click.native="mensajeAlerta = false">
        <v-icon>close</v-icon>
      </v-btn>
</v-snackbar>


  </v-card>


  
</template>

<script>
import { Projects } from "@/api/project";
export default {
  data() {
    return {
      demo: [],
      texto: "",
      timeout: 3000,
      mensajeAlerta: false,
      dialog: false,
      headers: [
        // {
        //   text: "",
        //   align: "center",
        //   sortable: false,
        //   value: "avatar"
        // },
        {
          text: "Nombre",
          align: "left",
          value: "name"
        },
        // { text: "Deadline", value: "deadline" },
        // { text: "Progress", value: "progress" },
        { text: "Acciones", value: "action", align: "right" }
      ]
    };
  },
  created() {
    this.fetchDemo();
  },
  methods: {
    async fetchDemo() {
      try {
        const response = await this.$axios.$get(
          "https://50vfdc57j0.execute-api.us-east-1.amazonaws.com/dev/todos"
        );
        this.demo = response;
        console.log(this.demo);
      } catch (error) {
        console.log(error);
      }
    },

    async addDemo() {
      try {
        const response = await this.$axios.$post(
          "https://50vfdc57j0.execute-api.us-east-1.amazonaws.com/dev/todos",
          {
            text: this.texto
          }
        );
        this.dialog = false;
        this.fetchDemo();
        this.mensajeAlerta = true;
      } catch (error) {
        console.log(error);
      }
    },
    refresh() {
      this.fetchDemo();
    },
    showModal() {
      this.dialog = true;
    },
    async deleteDemo(id) {
      try {
        let demoId = id;
        const response = await this.$axios.$delete(
          `https://50vfdc57j0.execute-api.us-east-1.amazonaws.com/dev/todos/${demoId}`
        );
        this.fetchDemo();
        this.mensajeAlerta = true;
      } catch (error) {
        console.log(error);
      }
    }
  },
  computed: {
    projects() {
      return Projects;
    }
  }
};
</script>

<template>
  <v-card>
    <v-toolbar card dense color="transparent">
      <v-toolbar-title><h4>Proovedor</h4></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat icon color="green" @click.prevent="addDemo()">
        <v-icon>control_point</v-icon>
      </v-btn>
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
  </v-card>
</template>

<script>
import { Projects } from "@/api/project";
export default {
  data() {
    return {
      demo: [],
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
      alert("agregar");
    },
    refresh() {
      this.fetchDemo();
    },
    async deleteDemo(id) {
      try {
        let demoId = id;
        const response = await this.$axios.$delete(
          `https://50vfdc57j0.execute-api.us-east-1.amazonaws.com/dev/todos/${demoId}`
        );
        this.fetchDemo();
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

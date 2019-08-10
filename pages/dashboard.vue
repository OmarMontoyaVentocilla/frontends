<template>
  <div id="pageDashboard">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <v-flex lg12 sm12 xs12>
          <plain-table></plain-table>
        </v-flex>
      </v-layout>
    
    </v-container>
  </div>
</template>

<script>
import PlainTable from "@/components/widgets/list/PlainTable";

export default {
  layout: "dashboard",
  components: {
    PlainTable
  },
  data: () => ({
    saludo: "Hola este es mi ejemplo con vue js"
  }),
  computed: {}
};
</script>

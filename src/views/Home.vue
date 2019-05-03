<template>
  <div>
    <subheader  :text="text"></subheader>
    <v-container>
      <v-tabs
        centered
        color="#138a36"
        dark>
          <v-tabs-slider color="yellow"></v-tabs-slider>

          <v-tab
            v-for="(tab, i) in tabsNav"
            :key="i"
            @change="changeTab(tab)">
            {{tab}}
          </v-tab>
      
          <v-tab-item
            v-for="i in tabsNav.length"
            :key="i"
          >
            <v-card flat>
              <v-tabs
                centered>
                <v-tabs-slider color="#04e824"></v-tabs-slider>
                <v-tab>Контактні дані</v-tab>
                <v-tab>Реєстраційні дані</v-tab>
                <v-tab-item>
                  <v-data-table
                    :headers="tableHeader"
                    :items="tableItems">
                    <template v-slot:items="props">
                      <td>{{ props.item.name }}</td>
                      <td class="text-xs-center">
                        <p v-for="(contacts, i) in props.item.contact" :key="i">{{contacts}}</p>
                      </td>
                      <td class="text-xs-center">{{ props.item.position }}</td>
                      <td class="text-xs-center">
                        <v-btn icon>
                          <v-icon>mdi-account-remove</v-icon>
                        </v-btn>
                      </td>
                    </template>
                  </v-data-table>
                </v-tab-item>
                <v-tab-item>
                  <v-data-table
                    :headers="tableHeader"
                    :items="tableItems">
                    <template v-slot:items="props">
                      <td>{{ props.item.name }}</td>
                      <td class="text-xs-center">
                        <p v-for="(contacts, i) in props.item.contact" :key="i">{{contacts}}</p>
                      </td>
                      <td class="text-xs-center">{{ props.item.position }}</td>
                      <td class="text-xs-center">
                        <v-btn icon>
                          <v-icon>mdi-account-remove</v-icon>
                        </v-btn>
                      </td>
                    </template>
                  </v-data-table>
                </v-tab-item>
              </v-tabs>
            </v-card>
          </v-tab-item>
        </v-tabs>
    </v-container>
  </div>
</template>

<script>
import subheader from '../components/subheader'

export default {
  name: 'home',

  components: {
    subheader
  },

  data: () => ({
    text: '',
    tabsNav: ['Працівники', 'Працівники, що вибули'],
    tableHeader: [
      { text: 'Прізвище, ім\'я', value: 'name'},
      { text: 'Контактні дані',  align: 'center', value: 'contact' },
      { text: 'Посада',  align: 'center', value: 'position' },
      { text: '',  align: 'center', sortable: false, value: 'removeItem' },
    ],
    tableItems: [
      {
        name: 'Siryk Vladyslav',
        contact: '',
        position: 'Керівництво школи'
      },
      {
        name: 'Антипов Олег',
        contact: '',
        position: 'Керівництво школи'
      },
      {
        name: 'Бабич Ольга',
        contact: '',
        position: 'Спеціаліст з питань догляду за здоров\'ям громадськості'
      },
      {
        name: 'Зорич Максим',
        contact: '',
        position: 'Соціальний педагог'
      },
      {
        name: 'Калиненко Анна',
        contact: '',
        position: 'Спеціаліст з питань догляду за здоров\'ям громадськості'
      },
      {
        name: 'Луценко Михайло',
        contact: ['+380456789112', '+380658321478', 'adasadas@adas.ua'],
        position: 'Працівник бібліотеки школи'
      },
      {
        name: 'Науменко Марина',
        contact: '',
        position: 'Керівництво школи'
      }
    ]
  }),

  created() {
    this.text = this.tabsNav[0]
  },

  methods: {
    changeTab (tabName) {
      this.text = tabName
    }
  },
};
</script>

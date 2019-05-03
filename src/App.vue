<template>
  <v-app>
    <v-toolbar app dark clipped-left color="#34403A">
      <v-toolbar-side-icon @click="showSideBar"></v-toolbar-side-icon>
      <span class="title">Школа номер один</span>
      <v-spacer></v-spacer>

      <v-btn>
        <v-badge color="#138a36">
          <template v-slot:badge>
            0
          </template>
          <span>Повідомлення</span>
        </v-badge>
      </v-btn>
      <v-btn>
        Посібник адміністратора
        <v-icon right>mdi-file-pdf</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-exit-to-app</v-icon>
      </v-btn>
    </v-toolbar>

    <v-navigation-drawer v-model="sideBar" :mini-variant="mini" absolute temporary>
      <v-list class="pa-1">
        <v-list-tile v-if="mini" @click.stop="mini = !mini">
          <v-list-tile-action>
            <v-icon>mdi-chevron-right</v-icon>
          </v-list-tile-action>
        </v-list-tile>

        <v-list-tile avatar tag="div">
          <v-list-tile-avatar>
            <img src="https://randomuser.me/api/portraits/men/33.jpg">
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>Mikola Kalinenko</v-list-tile-title>
          </v-list-tile-content>

          <v-list-tile-action>
            <v-btn icon @click.stop="mini = !mini">
              <v-icon>mdi-chevron-left</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>

      <v-list>
          <v-list-group
            v-for="item in items"
            :key="item.title"
            v-model="item.active"
            :prepend-icon="item.icon"
          >
            <template v-slot:activator>
              <v-list-tile>
                <v-list-tile-content>
                  <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </template>

            <v-list-tile
              v-for="subItem in item.items"
              :key="subItem.title"
              @click="redirectTo(subItem.title)"
            >
              <v-list-tile-action>
                <v-icon>{{ subItem.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-group>
        </v-list>
    </v-navigation-drawer>

    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'app',
  data: () => ({
    sideBar: false,
    items: [
      {
        icon: 'mdi-view-headline',
        title: 'Списки Школи',
        items: [
          { title: 'Керівництво й фахівці', icon: 'mdi-incognito' },
          { title: 'Вчителі', icon: 'mdi-flask-outline' },
          { title: 'Класи', icon: 'mdi-square-root' },
          { title: 'Групи', icon: 'mdi-source-fork' },
          { title: 'Учні', icon: 'mdi-human-child' },
          { title: 'Батьки учнів', icon: 'mdi-human-male-female' }
        ]
      },
      {
        icon: 'mdi-book-open-page-variant',
        title: 'Дані Щоденника',
        items: [
          { title: 'Щоденник', icon: 'mdi-book-open-variant' },
          { title: 'Проведені уроки', icon: 'mdi-flask-empty-outline' },
          { title: 'Заміна вчителів', icon: 'mdi-rotate-3d' },
          { title: 'Тематичні плани вчителів', icon: 'mdi-sort-ascending' },
          { title: 'Пояснення пропусків', icon: 'mdi-clock-in' },
          { title: 'Документи про звільнення', icon: 'mdi-file-excel' },
          { title: 'Документи учнів', icon: 'mdi-file-account' },
          { title: 'Звітні роботи', icon: 'mdi-file-document-box' },
          { title: 'Інтегровані уроки', icon: 'mdi-call-merge' }
        ]
      },
      {
        icon: 'mdi-settings',
        title: 'Налаштування',
        items: [
          { title: 'Системи оцінювання', icon: 'mdi-signal' },
          { title: 'Стани оцінювання', icon: 'mdi-chart-line' },
          { title: 'Предмети', icon: 'mdi-format-pilcrow' },
          { title: 'Дати канікул', icon: 'mdi-beach' },
          { title: 'Періоди', icon: 'mdi-clock-end' },
          { title: 'Години уроків', icon: 'mdi-clock' }
        ]
      },
      {
        icon: 'mdi-information-variant',
        title: 'Додаткові дані',
        items: [
          { title: 'Похвали/зауваження', icon: 'mdi-contrast' },
          { title: 'Сховище документів', icon: 'mdi-database' },
          { title: 'Дані про стан здоров’я', icon: 'mdi-pill' },
          { title: 'Категорії фізичних показників', icon: 'mdi-format-list-numbers' },
          { title: 'Фізичні показники груп', icon: 'mdi-heart-pulse' },
          { title: 'Батьківські збори', icon: 'mdi-emoticon-sad' }
        ]
      },
      {
        icon: 'mdi-reorder-horizontal',
        title: 'Розклади',
        items: [
          { title: 'Графіки вчителів', icon: 'mdi-calendar-multiple' },
          { title: 'Розклади класів', icon: 'mdi-file-document' },
          { title: 'Зміни розкладу', icon: 'mdi-history' }
        ]
      },
      {
        icon: 'mdi-file-chart',
        title: 'Звітна діяльність',
        items: [
          { title: 'Звіти', icon: 'mdi-file' },
          { title: 'Перегляд місяців', icon: 'mdi-calendar' },
          { title: 'Триместри/півріччя', icon: 'mdi-calendar-clock' }
        ]
      },
      {
        icon: 'mdi-clipboard-alert',
        title: 'Інше',
        items: [
          { title: 'Повідомлення', icon: 'mdi-message-reply' },
          { title: 'Особисті дані', icon: 'mdi-account-card-details' },
          { title: 'Додати дитину', icon: 'mdi-account-multiple-plus' },
          { title: 'Документи', icon: 'mdi-file-document' },
          { title: 'Реквізити', icon: 'mdi-coin' },
        ]
      }
    ],
    mini: false,
  }),

  methods: {
    showSideBar() {
      this.sideBar = true;
    },

    redirectTo(direction) {
      console.log(direction);
    },
  },
};
</script>

<style lang="scss">
  .message-badge {
    margin-right: 10px;
  }
</style>
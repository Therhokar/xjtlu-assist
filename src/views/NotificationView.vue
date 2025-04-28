<template>
  <div>
    <v-app-bar>
      <template #prepend>
        <v-app-bar-nav-icon icon="$prev" @click="$router.go(-1)" />
      </template>
      <v-app-bar-title>Notification Settings</v-app-bar-title>
    </v-app-bar>

    <v-main>
      <v-list>
        <v-list-item title="Show notifications">
          <template #append>
            <v-list-item-action>
              <v-switch color="secondary" :model-value="true" hide-details />
            </v-list-item-action>
          </template>
        </v-list-item>
      </v-list>
    </v-main>
  </div>
</template>

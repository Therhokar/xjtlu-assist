<template>
  <div>
    <v-app-bar>
      <template #prepend>
        <v-app-bar-nav-icon icon="$prev" @click="$router.go(-1)" />
      </template>
      <v-app-bar-title>My Location</v-app-bar-title>
    </v-app-bar>

    <v-main>
      <v-container>
        <h2 class="text-h6 mb-2">Current Location: GYM</h2>
        <v-img src="/campusmap.png" />
      </v-container>
    </v-main>
  </div>
</template>

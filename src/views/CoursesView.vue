<script setup lang="ts">
import { mdiMessageOutline } from '@mdi/js';
</script>

<template>
  <div>
    <v-app-bar>
      <template #prepend>
        <v-app-bar-nav-icon icon="$prev" @click="$router.go(-1)" />
      </template>
      <v-app-bar-title>Courses this week</v-app-bar-title>
    </v-app-bar>

    <v-main>
      <v-container>
        <v-row>
          <v-col>
            <v-card variant="outlined">
              <v-card-text>
                <div class="text-subtitle-2 d-flex justify-space-between">
                  <span>CPT208 Human-Centric Computing</span>
                  <v-icon icon="$plus" />
                </div>
                <v-sheet class="bg-grey-lighten-2 pa-1 rounded-sm">
                  <div class="text-caption text-secondary">
                    03. Conceptual Prototyping and Practical Guide
                  </div>
                  <p class="three-line">
                    Describe prototyping and the different types of prototyping
                    activities.
                    <br />
                    Enable you to produce simpole prototypes from the models
                    developed during the requirements activity
                  </p>
                </v-sheet>

                <div class="text-subtitle-2 d-flex justify-space-between">
                  <span>CPT204 Advanced OO Programming</span>
                  <v-icon icon="$plus" />
                </div>
                <v-sheet class="pa-2 rounded-sm bg-grey-lighten-2">
                  <div class="text-caption text-secondary">
                    Abstract Classes and Interfaces
                  </div>
                  <p class="three-line">
                    Abstract Classes and Abstract Methods
                    <br />
                    The abstract Calendar class and its GregorianCalendar
                    subclass
                    <br />
                    Interfaces
                  </p>
                </v-sheet>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-card variant="outlined">
              <v-card-title>Task Progress</v-card-title>
              <v-card-text>
                <v-img src="/schedule.png" />
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <v-fab
      :icon="mdiMessageOutline"
      color="secondary"
      app
      style="bottom: 24px"
    />
  </div>
</template>

<style scoped>
.three-line {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  overflow: hidden;
  -webkit-box-orient: vertical;
}
</style>

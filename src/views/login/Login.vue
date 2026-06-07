<template>
  <v-sheet  class="bg-graphite  pa-12" rounded>
    <v-card class="mx-auto px-6 py-8" max-width="344">
      <v-form
      class="container"
        v-model="form"
        @submit.prevent="onSubmit"
      >
        <v-text-field
          v-model="email"
          :readonly="loading"
          :rules="[required]"
          class="mb-2"
          label="Email"
          clearable
        ></v-text-field>

        <v-text-field
          v-model="password"
          :readonly="loading"
          :rules="[required]"
          label="Password"
          placeholder="Enter your password"
          clearable
        ></v-text-field>

        <br>

        <v-btn
          :disabled="!form"
          :loading="loading"
          color="success"
          size="large"
          type="submit"
          variant="elevated"
          block
        >
          Sign In
        </v-btn>
      </v-form>
    </v-card>
  </v-sheet>
</template>

<script setup lang="ts">
  import { ref } from 'vue'

  const form = ref(false)
  const email = ref<string>("")
  const password = ref<string>("")
  const loading = ref<boolean>(false)

  function onSubmit () {
    if (!form.value) return
    loading.value = true
    setTimeout(() => (loading.value = false), 2000)
  }
  function required (v: string) {
    return !!v || 'Field is required'
  }
</script>

<style>
  .container {
    width: 265px;
  }
  .box {
    opacity: 0.6 !important;
  }
</style>
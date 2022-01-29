<template>
    <div>
        <div class="mb-6">
            Active picker: <code>{{ activePicker || 'null' }}</code>
        </div>
        <v-menu
            ref="menu1"
            v-model="menu"
            :close-on-content-click="false"
            transition="scale-transition"
            offset-y
            min-width="auto"
        >
            <template v-slot:activator="{ on, attrs }">
                <v-text-field
                    v-model="date"
                    label="Birthday date"
                    prepend-icon="mdi-calendar"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                />
            </template>
            <v-date-picker
                v-model="date"
                :active-picker.sync="activePicker"
                :max="new Date().toISOString().substr(0, 10)"
                min="1950-01-01"
            />
        </v-menu>
    </div>
</template>

<script>
export default {
    data: () => ({
        activePicker: null,
        date: null,
        menu: false,
    }),
    watch: {
        menu (val) {
            val && setTimeout(() => (this.activePicker = 'YEAR'))
        }
    },
}
</script>

<style scoped>

</style>

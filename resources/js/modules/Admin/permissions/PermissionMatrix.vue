<template>
    <div class="kt-card-header gap-2">
            <h3 class="kt-card-title">
              <a class="text-primary" href="#">Project Manager</a>
              Role Permissions
            </h3>

            <div class="flex gap-5">
            <button type="button" @click="toggleAll" class="kt-btn kt-btn-outline shrink-0" >
                {{ allSelected ? 'Unselect All' : 'Select All' }}
            </button>
            </div>
        </div>
    <div class="kt-card-table kt-scrollable-x-auto">

            <table class="kt-table table-auto kt-table-border" data-kt-datatable-table="true" id="devices_table">

                <thead>
                    <tr class="border-b bg-gray-50">
                        <th class="min-w-[250px]">
                            <span class="kt-table-col">
                                <span class="kt-table-col-label">
                                    Module
                                </span>
                                <span class="kt-table-col-sort"></span>
                            </span>
                        </th>

                        <th v-for="action in actions" :key="action" class="min-w-[130px]">
                            <span class="kt-table-col">
                                <span class="kt-table-col-label">
                                    {{ action }}
                                </span>
                                <span class="kt-table-col-sort"></span>
                            </span>
                        </th>

                    </tr>
                </thead>

                <tbody>

                    <tr
                        v-for="(modulePermissions, module) in groupedPermissions"
                        :key="module"
                        class="border-b"
                    >

                        <td class="p-3 font-medium capitalize">
                            {{ module }}
                        </td>

                        <td
                            v-for="action in actions"
                            :key="action"
                            class="text-center p-3"
                        >

                            <input
                                class="kt-switch kt-switch-sm"
                                v-if="modulePermissions[action]"
                                type="checkbox"
                                :value="modulePermissions[action]"
                                v-model="selectedPermissions">

                        </td>

                    </tr>

                </tbody>

            </table>

        </div>




        
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
    permissions: {
        type: Array,
        default: () => []
    },
    modelValue: {
        type: Array,
        default: () => []
    }
})

const emit = defineEmits([
    'update:modelValue'
])

const actions = [
    'view',
    'create',
    'update',
    'delete'
]

const selectedPermissions = computed({
    get() {
        return props.modelValue
    },
    set(value) {
        emit('update:modelValue', value)
    }
})

const groupedPermissions = computed(() => {

    const grouped = {}

    props.permissions.forEach(permission => {

        const parts = permission.split('.')

        const module = parts[0]
        const action = parts[1]

        if (!grouped[module]) {
            grouped[module] = {}
        }

        grouped[module][action] = permission
    })

    return grouped
})

const allSelected = computed(() => {
    return selectedPermissions.value.length === props.permissions.length
})

const toggleAll = () => {

    if (allSelected.value) {
        selectedPermissions.value = []
    } else {
        selectedPermissions.value = [...props.permissions]
    }

}
</script>
<template>
    <AppToolbar title="Users List" :breadcrumbs="[
        { name: 'Home', link: 'Dashboard' },
        { name: 'Users', link: 'Users' },
    ]" />
    <!-- Container -->
    <div class="kt-container-fixed">
        <div class="grid gap-5 lg:gap-7.5">
            <div class="kt-card kt-card-grid min-w-full">
                <div class="kt-card-header py-5 flex-wrap">
                    <h3 class="kt-card-title">
                        User's List
                    </h3>



                    <div class="flex gap-5">
                        <label class="kt-input">
                            <i class="ki-filled ki-magnifier">
                            </i>
                            <input placeholder="Search users" type="text" value="" />
                        </label>
                        <RouterLink class="kt-btn kt-btn-primary" :to="{ name: 'UserCreate' }">
                            Add User
                        </RouterLink>
                    </div>
                </div>
                <div class="kt-card-content">
                    <div class="grid" data-kt-datatable="true" data-kt-datatable-page-size="10">
                        <div class="kt-scrollable-x-auto">
                            <table class="kt-table table-auto kt-table-border" data-kt-datatable-table="true"
                                id="devices_table">
                                <thead>
                                    <tr>
                                        <th class="w-[55px]">
                                            <input class="kt-checkbox kt-checkbox-sm" data-kt-datatable-check="true"
                                                type="checkbox" />
                                        </th>
                                        <th class="min-w-[250px]">
                                            <span class="kt-table-col">
                                                <span class="kt-table-col-label">
                                                    Name
                                                </span>
                                                <span class="kt-table-col-sort">
                                                </span>
                                            </span>
                                        </th>
                                        <th class="min-w-[165px]">
                                            <span class="kt-table-col">
                                                <span class="kt-table-col-label">
                                                    User Name
                                                </span>
                                                <span class="kt-table-col-sort">
                                                </span>
                                            </span>
                                        </th>
                                        <th class="min-w-[165px]">
                                            <span class="kt-table-col">
                                                <span class="kt-table-col-label">
                                                    Role
                                                </span>
                                                <span class="kt-table-col-sort">
                                                </span>
                                            </span>
                                        </th>
                                        <th class="min-w-[165px]">
                                            <span class="kt-table-col">
                                                <span class="kt-table-col-label">
                                                    <span data-kt-tooltip="true" data-kt-tooltip-offset="0,5"
                                                        data-kt-tooltip-placement="left">
                                                        <i class="ki-filled ki-information-2 text-sm leading-none">
                                                        </i>
                                                        <span class="kt-tooltip max-w-48"
                                                            data-kt-tooltip-content="true">
                                                            Time is based on your local timezone.
                                                        </span>
                                                    </span>
                                                    Branch
                                                </span>
                                                <span class="kt-table-col-sort">
                                                </span>
                                            </span>
                                        </th>
                                        <th class="min-w-[165px]">
                                            <span class="kt-table-col">
                                                <span class="kt-table-col-label">
                                                    Status
                                                </span>
                                                <span class="kt-table-col-sort">
                                                </span>
                                            </span>
                                        </th>
                                        <th class="w-[60px]">
                                        </th>
                                        <th class="w-[60px]">
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="user in users" :key="user.id">
                                        <td>
                                            <input class="kt-checkbox kt-checkbox-sm" data-kt-datatable-row-check="true"
                                                type="checkbox" value="1" />
                                        </td>
                                        <td>
                                            <div class="flex items-center gap-4">
                                                <div class="leading-none w-5 shrink-0">
                                                    <i
                                                        class="ki-filled ki-screen text-xl text-muted-foreground text-2xl">
                                                    </i>
                                                </div>
                                                <div class="flex flex-col gap-0.5">
                                                    <span class="leading-none font-medium text-sm text-mono">
                                                        {{ user.name }}
                                                    </span>
                                                    <span class="text-sm text-secondary-foreground font-normal">
                                                        {{ user.email }}
                                                    </span>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="text-sm text-foreground font-normal">
                                            {{ user.username }}
                                        </td>
                                        <td class="text-sm text-foreground font-normal">
                                            United States
                                        </td>
                                        <td class="text-sm text-foreground font-normal">
                                            17 hours ago
                                        </td>
                                        <td class="text-sm text-foreground font-normal">
                                            16 Aug, 2024
                                        </td>
                                        <td>
                                            <a class="kt-btn kt-btn-sm kt-btn-icon kt-btn-ghost" href="#">
                                                <i class="ki-filled ki-notepad-edit">
                                                </i>
                                            </a>
                                        </td>
                                        <td>
                                            <a class="kt-btn kt-btn-sm kt-btn-icon kt-btn-ghost" href="#">
                                                <i class="ki-filled ki-trash">
                                                </i>
                                            </a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div
                            class="kt-card-footer justify-center md:justify-between flex-col md:flex-row gap-5 text-secondary-foreground text-sm font-medium">
                            <div class="flex items-center gap-2 order-2 md:order-1">
                                Show
                                <select class="kt-select w-16" data-kt-datatable-size="true" name="perpage">
                                </select>
                                per page
                            </div>
                            <div class="flex items-center gap-4 order-1 md:order-2">
                                <span data-kt-datatable-info="true">
                                </span>
                                <div class="kt-datatable-pagination" data-kt-datatable-pagination="true">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
    <!-- End of Container -->
</template>

<script setup>
import { ref, reactive, onMounted, nextTick } from 'vue'
import api from '../../../services/api'
import { useAuthStore } from '../../../stores/auth'
import { initMetronic } from '@/helpers/metronic'
import AppToolbar from '../../../components/layout/AppToolbar.vue'

onMounted(async () => {
    await nextTick()
    initMetronic()
})

const users = ref([])

onMounted(() => {
    api.get('/users')
        .then(response => {
            users.value = response.data
        })
        .catch(error => {
            console.error('Error fetching users:', error)
        })

})


</script>
<script setup>
import { onMounted, nextTick } from 'vue'
import { initMetronic } from '@/helpers/metronic'
import AppSidebar from './layout/AppSidebar.vue'
import AppToolbar from './layout/AppToolbar.vue'
import AppFooter from './layout/AppFooter.vue'
import AppHeader from './layout/AppHeader.vue'

onMounted(async () => {
    await nextTick()
    initMetronic()
})
</script>
<template>
    <!-- Base -->
    <div class="flex grow">
        <!-- Header -->
        <AppHeader />
        <!-- End of Header -->
        <!-- Wrapper -->
        <div class="flex flex-col lg:flex-row grow pt-(--header-height) lg:pt-0">
            <!-- Sidebar -->
            <AppSidebar />
            <!-- End of Sidebar -->
            <!-- Main -->
            <div
                class="flex flex-col grow rounded-xl bg-background border border-input lg:ms-(--sidebar-width) mt-0 lg:mt-5 m-5">
                <div class="flex flex-col grow kt-scrollable-y-auto lg:[--scrollbar-width:auto] pt-5" id="scrollable_content">
                    <main class="grow" role="content">
                        <!-- Toolbar -->
                        <AppToolbar />
                        <!-- End of Toolbar -->
                        <!-- Container -->
                        <slot />
                        <!-- End of Container -->
                    </main>
                </div>
                <!-- Footer -->
                <AppFooter />
                <!-- End of Footer -->
            </div>
            <!-- End of Main -->
        </div>
        <!-- End of Wrapper -->
    </div>
    <!-- End of Base -->
</template>
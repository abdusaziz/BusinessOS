<template>
    <AppToolbar title="Users List" :breadcrumbs="[
        { name: 'Home', link: 'Dashboard' },
        { name: 'Roles', link: 'Roles' },
        { name: 'Create Role', link: 'RoleCreate' },
    ]" />   
    <!-- Container -->
    <div class="kt-container-fixed">
        <!-- begin: grid -->
        <div class="grid grid-cols-1 xl:grid-cols-3 gap-5 lg:gap-7.5">
            <div class="col-span-2">
                <div class="kt-card">
        
             <PermissionMatrix v-model="form.permissions" :permissions="permissions" />
          <div class="kt-card-footer justify-end py-7.5 gap-2.5">
             <a class="kt-btn kt-btn-outline" href="#">
              Restore Defaults
             </a>
             <button class="kt-btn kt-btn-primary" @click="saveRole" >
              Save Changes
             </button>
            </div>

    </div>
         </div>
         <div class="col-span-1">
          <div class="flex flex-col gap-5 lg:gap-7.5">
           <div class="kt-card">
            <div class="kt-card-content py-10 flex flex-col gap-5 lg:gap-7.5">
             <div class="flex flex-col items-start gap-2.5">
              <div class="mb-2.5">
               <div class="relative size-[50px] shrink-0">
                <svg class="w-full h-full stroke-primary/10 fill-primary-soft" fill="none" height="48" viewbox="0 0 44 48" width="44" xmlns="http://www.w3.org/2000/svg">
                 <path d="M16 2.4641C19.7128 0.320509 24.2872 0.320508 28 2.4641L37.6506 8.0359C41.3634 10.1795 43.6506 14.141 43.6506 
			18.4282V29.5718C43.6506 33.859 41.3634 37.8205 37.6506 39.9641L28 45.5359C24.2872 47.6795 19.7128 47.6795 16 45.5359L6.34937 
			39.9641C2.63655 37.8205 0.349365 33.859 0.349365 29.5718V18.4282C0.349365 14.141 2.63655 10.1795 6.34937 8.0359L16 2.4641Z" fill="">
                 </path>
                 <path d="M16.25 2.89711C19.8081 0.842838 24.1919 0.842837 27.75 2.89711L37.4006 8.46891C40.9587 10.5232 43.1506 14.3196 43.1506 
			18.4282V29.5718C43.1506 33.6804 40.9587 37.4768 37.4006 39.5311L27.75 45.1029C24.1919 47.1572 19.8081 47.1572 16.25 45.1029L6.59937 
			39.5311C3.04125 37.4768 0.849365 33.6803 0.849365 29.5718V18.4282C0.849365 14.3196 3.04125 10.5232 6.59937 8.46891L16.25 2.89711Z" stroke="">
                 </path>
                </svg>
                <div class="absolute leading-none start-2/4 top-2/4 -translate-y-2/4 -translate-x-2/4 rtl:translate-x-2/4">
                 <i class="ki-filled ki-security-user text-xl ps-px text-primary">
                 </i>
                </div>
               </div>
              </div>
              <a class="text-base font-semibold text-mono hover:text-primary" href="#">
               Optimizing Team Coordination: Role Assignment Tools
              </a>
              <p class="text-sm text-secondary-foreground">
               Empower your team with dynamic role assignment capabilities. Utilize our intuitive tools to assign and manage user permissions effectively. Explore resources and best practices to maximize team efficiency.
              </p>
              <a class="kt-link kt-link-underlined kt-link-dashed" href="#">
               Learn more
              </a>
             </div>
             <span class="hidden not-last:block not-last:border-b border-b-border">
             </span>
             <div class="flex flex-col items-start gap-2.5">
              <div class="mb-2.5">
               <div class="relative size-[50px] shrink-0">
                <svg class="w-full h-full stroke-primary/10 fill-primary-soft" fill="none" height="48" viewbox="0 0 44 48" width="44" xmlns="http://www.w3.org/2000/svg">
                 <path d="M16 2.4641C19.7128 0.320509 24.2872 0.320508 28 2.4641L37.6506 8.0359C41.3634 10.1795 43.6506 14.141 43.6506 
			18.4282V29.5718C43.6506 33.859 41.3634 37.8205 37.6506 39.9641L28 45.5359C24.2872 47.6795 19.7128 47.6795 16 45.5359L6.34937 
			39.9641C2.63655 37.8205 0.349365 33.859 0.349365 29.5718V18.4282C0.349365 14.141 2.63655 10.1795 6.34937 8.0359L16 2.4641Z" fill="">
                 </path>
                 <path d="M16.25 2.89711C19.8081 0.842838 24.1919 0.842837 27.75 2.89711L37.4006 8.46891C40.9587 10.5232 43.1506 14.3196 43.1506 
			18.4282V29.5718C43.1506 33.6804 40.9587 37.4768 37.4006 39.5311L27.75 45.1029C24.1919 47.1572 19.8081 47.1572 16.25 45.1029L6.59937 
			39.5311C3.04125 37.4768 0.849365 33.6803 0.849365 29.5718V18.4282C0.849365 14.3196 3.04125 10.5232 6.59937 8.46891L16.25 2.89711Z" stroke="">
                 </path>
                </svg>
                <div class="absolute leading-none start-2/4 top-2/4 -translate-y-2/4 -translate-x-2/4 rtl:translate-x-2/4">
                 <i class="ki-filled ki-toggle-on-circle text-xl ps-px text-primary">
                 </i>
                </div>
               </div>
              </div>
              <a class="text-base font-semibold text-mono hover:text-primary" href="#">
               Refining Access Control: Permissions Customization
              </a>
              <p class="text-sm text-secondary-foreground">
               Tailor user experiences with customizable permission settings. Our detailed guides and resources provide streamlined processes for managing access levels. Ensure secure and precise control over your workspace's functionalities.
              </p>
              <a class="kt-link kt-link-underlined kt-link-dashed" href="#">
               Learn more
              </a>
             </div>
             <span class="hidden not-last:block not-last:border-b border-b-border">
             </span>
             <div class="flex flex-col items-start gap-2.5">
              <div class="mb-2.5">
               <div class="relative size-[50px] shrink-0">
                <svg class="w-full h-full stroke-primary/10 fill-primary-soft" fill="none" height="48" viewbox="0 0 44 48" width="44" xmlns="http://www.w3.org/2000/svg">
                 <path d="M16 2.4641C19.7128 0.320509 24.2872 0.320508 28 2.4641L37.6506 8.0359C41.3634 10.1795 43.6506 14.141 43.6506 
			18.4282V29.5718C43.6506 33.859 41.3634 37.8205 37.6506 39.9641L28 45.5359C24.2872 47.6795 19.7128 47.6795 16 45.5359L6.34937 
			39.9641C2.63655 37.8205 0.349365 33.859 0.349365 29.5718V18.4282C0.349365 14.141 2.63655 10.1795 6.34937 8.0359L16 2.4641Z" fill="">
                 </path>
                 <path d="M16.25 2.89711C19.8081 0.842838 24.1919 0.842837 27.75 2.89711L37.4006 8.46891C40.9587 10.5232 43.1506 14.3196 43.1506 
			18.4282V29.5718C43.1506 33.6804 40.9587 37.4768 37.4006 39.5311L27.75 45.1029C24.1919 47.1572 19.8081 47.1572 16.25 45.1029L6.59937 
			39.5311C3.04125 37.4768 0.849365 33.6803 0.849365 29.5718V18.4282C0.849365 14.3196 3.04125 10.5232 6.59937 8.46891L16.25 2.89711Z" stroke="">
                 </path>
                </svg>
                <div class="absolute leading-none start-2/4 top-2/4 -translate-y-2/4 -translate-x-2/4 rtl:translate-x-2/4">
                 <i class="ki-filled ki-shield-tick text-xl ps-px text-primary">
                 </i>
                </div>
               </div>
              </div>
              <a class="text-base font-semibold text-mono hover:text-primary" href="#">
               Enhanced Security Management: Granular Permission Settings
              </a>
              <p class="text-sm text-secondary-foreground">
               Fortify your workspace with enhanced permission controls. Our advanced settings allow for granular access management, ensuring each team member has the appropriate level of access. Benefit from our comprehensive security protocols and guidance.
              </p>
              <a class="kt-link kt-link-underlined kt-link-dashed" href="#">
               Learn more
              </a>
             </div>
             <span class="hidden not-last:block not-last:border-b border-b-border">
             </span>
            </div>
           </div>
          </div>
         </div>
        </div>
        <!-- end: grid -->
       </div>
       <!-- End of Container -->

</template>

<script setup>
 import AppToolbar from '../../../components/layout/AppToolbar.vue'
import { reactive, ref, onMounted } from 'vue'
import PermissionMatrix from '../permissions/PermissionMatrix.vue'
import api from '../../../services/api'

const permissions = ref([])

const form = reactive({
    name: '',
    permissions: []
})

const saveRole = () => {

    console.log(form)

    /*
    POST /api/roles

    {
        name: 'Manager',
        permissions: [...]
    }
    */

}
onMounted(() => {
    // Fetch permissions from the API
    api.get('/permissions')
        .then(response => {
            permissions.value = response.data.map(permission => permission.name);
        })
        .catch(error => {
            console.error('Error fetching permissions:', error);
        });
})
</script>
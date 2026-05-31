<template>
    <AppToolbar title="Users List" :breadcrumbs="breadcrumbs" />   
    <!-- Container -->
       <div class="kt-container-fixed">
        <div class="grid gap-5 lg:gap-7.5 xl:w-[38.75rem] mx-auto">

    <div class="kt-card">
           <div class="kt-card-header" id="external_services_integrations">
            <h3 class="kt-card-title">
             Role List
            </h3>
           </div>
           <div class="kt-card-content grid gap-5 lg:gap-7.5 lg:py-7.5 py-5">
            <div class="grid gap-5">
             <div class="flex items-center justify-between flex-wrap border border-border rounded-xl gap-2 p-3.5">
              <div class="flex items-center flex-wrap gap-3.5">
               <img alt="" class="size-8 shrink-0" src="/storage/assets/media/brand-logos/google-webdev.svg"/>
               <div class="flex flex-col">
                <div class="flex items-center gap-1.5">
                 <a class="text-sm font-medium text-mono hover:text-primary" href="#">
                  Super Admin
                 </a>
                 <a class="text-sm text-secondary-foreground hover:text-primary" href="#">
                  webdev@webdevmail.com
                 </a>
                </div>
                <span class="text-sm text-secondary-foreground">
                 Integrate for enhanced collaboration in web development.
                </span>
               </div>
              </div>
              <div class="flex items-center gap-2 lg:gap-5">
               <input checked="" class="kt-switch" name="check" type="checkbox" value="1"/>
               <div class="kt-btn kt-btn-icon kt-btn-ghost">
                <i class="ki-filled ki-setting-2">
                </i>
               </div>
              </div>
             </div>
             <div class="flex items-center justify-between flex-wrap border border-border rounded-xl gap-2 p-3.5">
              <div class="flex items-center flex-wrap gap-3.5">
               <img alt="" class="size-8 shrink-0" src="/storage/assets/media/brand-logos/equacoin.svg"/>
               <div class="flex flex-col">
                <div class="flex items-center gap-1.5">
                 <a class="text-sm font-medium text-mono hover:text-primary" href="#">
                  Admin
                 </a>
                 <a class="text-sm text-secondary-foreground hover:text-primary" href="#">
                  equacoin@cryptoemail.com
                 </a>
                </div>
                <span class="text-sm text-secondary-foreground">
                 Streamline cryptocurrency transactions securely and efficiently.
                </span>
               </div>
              </div>
              <div class="flex items-center gap-2 lg:gap-5">
               <input class="kt-switch" name="check" type="checkbox" value="1"/>
               <div class="kt-btn kt-btn-icon kt-btn-ghost">
                <i class="ki-filled ki-setting-2">
                </i>
               </div>
              </div>
             </div>
             <div class="flex items-center justify-between flex-wrap border border-border rounded-xl gap-2 p-3.5">
              <div class="flex items-center flex-wrap gap-3.5">
               <img alt="" class="size-8 shrink-0" src="/storage/assets/media/brand-logos/evernote.svg"/>
               <div class="flex flex-col">
                <div class="flex items-center gap-1.5">
                 <a class="text-sm font-medium text-mono hover:text-primary" href="#">
                  Manager
                 </a>
                 <a class="text-sm text-secondary-foreground hover:text-primary" href="#">
                  evernote@noteexample.com
                 </a>
                </div>
                <span class="text-sm text-secondary-foreground">
                 Streamline cryptocurrency transactions securely and efficiently.
                </span>
               </div>
              </div>
              <div class="flex items-center gap-2 lg:gap-5">
               <input checked="" class="kt-switch" name="check" type="checkbox" value="1"/>
               <div class="kt-btn kt-btn-icon kt-btn-ghost">
                <i class="ki-filled ki-setting-2">
                </i>
               </div>
              </div>
             </div>
             <div class="flex items-center justify-between flex-wrap border border-border rounded-xl gap-2 p-3.5">
              <div class="flex items-center flex-wrap gap-3.5">
               <img alt="" class="size-8 shrink-0" src="/storage/assets/media/brand-logos/inferno.svg"/>
               <div class="flex flex-col">
                <div class="flex items-center gap-1.5">
                 <a class="text-sm font-medium text-mono hover:text-primary" href="#">
                  Cashier
                 </a>
                 <a class="text-sm text-secondary-foreground hover:text-primary" href="#">
                  inferno@dataexample.com
                 </a>
                </div>
                <span class="text-sm text-secondary-foreground">
                 Robust email integration for data management.
                </span>
               </div>
              </div>
              <div class="flex items-center gap-2 lg:gap-5">
               <input checked="" class="kt-switch" name="check" type="checkbox" value="1"/>
               <div class="kt-btn kt-btn-icon kt-btn-ghost">
                <i class="ki-filled ki-setting-2">
                </i>
               </div>
              </div>
             </div>
             <div class="flex items-center justify-between flex-wrap border border-border rounded-xl gap-2 p-3.5">
              <div class="flex items-center flex-wrap gap-3.5">
               <img alt="" class="size-8 shrink-0" src="/storage/assets/media/brand-logos/jira.svg"/>
               <div class="flex flex-col">
                <div class="flex items-center gap-1.5">
                 <a class="text-sm font-medium text-mono hover:text-primary" href="#">
                  Other
                 </a>
                 <a class="text-sm text-secondary-foreground hover:text-primary" href="#">
                  jira@projectmail.com
                 </a>
                </div>
                <span class="text-sm text-secondary-foreground">
                 Streamline project management, enhance collaboration.
                </span>
               </div>
              </div>
              <div class="flex items-center gap-2 lg:gap-5">
               <input class="kt-switch" name="check" type="checkbox" value="1"/>
               <div class="kt-btn kt-btn-icon kt-btn-ghost">
                <i class="ki-filled ki-setting-2">
                </i>
               </div>
              </div>
             </div>
            </div>
            <div class="flex justify-end">
             <button class="kt-btn kt-btn-primary">
              Save Changes
             </button>
            </div>
           </div>
          </div>
          </div>
          </div>
</template>
<script setup>
    import AppToolbar from '../../../components/layout/AppToolbar.vue'  

    const breadcrumbs = [
        { name: 'Home', link: 'Dashboard' },
        { name: 'Roles', link: 'Roles' },
    ];
</script>
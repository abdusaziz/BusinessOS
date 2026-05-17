<template>
    <div class="h-full flex items-center justify-center grow bg-center bg-no-repeat page-bg">
        <div class="kt-card max-w-[370px] w-full">
            <form @submit.prevent="login" class="kt-card-content flex flex-col gap-5 p-10" id="sign_in_form">
                <div class="text-center mb-2.5">
                    <h3 class="text-lg font-medium text-mono leading-none mb-2.5">
                        Sign in
                    </h3>
                    <div class="flex items-center justify-center font-medium">
                        <span class="text-sm text-secondary-foreground me-1.5">
                            Need an account?
                        </span>
                        <a class="text-sm link" href="html/demo8/authentication/classic/sign-up.html">
                            Sign up
                        </a>
                    </div>
                </div>
                <div class="grid grid-cols-2 gap-2.5">
                    <a class="kt-btn kt-btn-outline justify-center" href="#">
                        <img alt="" class="size-3.5 shrink-0"
                            src="../../metronic/assets/media/brand-logos/google.svg" />
                        Use Google
                    </a>
                    <a class="kt-btn kt-btn-outline justify-center" href="#">
                        <img alt="" class="size-3.5 shrink-0 dark:hidden"
                            src="../../metronic/assets/media/brand-logos/apple-black.svg" />
                        <img alt="" class="size-3.5 shrink-0 light:hidden"
                            src="../../metronic/assets/media/brand-logos/apple-white.svg" />
                        Use Apple
                    </a>
                </div>
                <div class="flex items-center gap-2">
                    <span class="border-t border-border w-full">
                    </span>
                    <span class="text-xs text-muted-foreground font-medium uppercase">
                        Or
                    </span>
                    <span class="border-t border-border w-full">
                    </span>
                </div>
                <span class="text-sm text-red-500">{{ errors.general }}</span>
                <div class="flex flex-col gap-1">
                    <label class="kt-form-label font-normal text-mono">
                        Email
                    </label>
                    <input class="kt-input" placeholder="email@email.com" type="text" v-model="form.email" />
                    <span v-if="errors.email" class="text-sm text-red-500">{{ errors.email }}</span>
                </div>
                <div class="flex flex-col gap-1">
                    <div class="flex items-center justify-between gap-1">
                        <label class="kt-form-label font-normal text-mono">
                            Password
                        </label>
                        <a class="text-sm kt-link shrink-0"
                            href="html/demo8/authentication/classic/reset-password/enter-email.html">
                            Forgot Password?
                        </a>
                    </div>
                    <div class="kt-input" data-kt-toggle-password="true">
                        <input name="user_password" placeholder="Enter Password" type="password"  v-model="form.password"  />
                        <button class="kt-btn kt-btn-sm kt-btn-ghost kt-btn-icon bg-transparent! -me-1.5"
                            data-kt-toggle-password-trigger="true" type="button">
                            <span class="kt-toggle-password-active:hidden">
                                <i class="ki-filled ki-eye text-muted-foreground">
                                </i>
                            </span>
                            <span class="hidden kt-toggle-password-active:block">
                                <i class="ki-filled ki-eye-slash text-muted-foreground">
                                </i>
                            </span>
                        </button>
                    </div>
                    <span v-if="errors.password" class="text-sm text-red-500">{{ errors.password }}</span>
                </div>
                <label class="kt-label">
                    <input class="kt-checkbox kt-checkbox-sm" name="check" type="checkbox" value="1" />
                    <span class="kt-checkbox-label">
                        Remember me
                    </span>
                </label>
                <button class="kt-btn kt-btn-primary flex justify-center grow">
                    Sign In
                </button>
            </form>
        </div>
    </div>
</template>

<script setup>
import { reactive,onMounted, nextTick } from 'vue'
import { useRouter } from 'vue-router'

import api from '../../services/api'
import { useAuthStore } from '../../stores/auth'


import { initMetronic } from '@/helpers/metronic'

onMounted(async () => {
  await nextTick()
  initMetronic()
})

const router = useRouter()
const authStore = useAuthStore()

const form = reactive({
    email: '',
    password: '',
})

const errors = reactive({})

const login = async () => {

    try {

        const response = await api.post('/login', form)

        authStore.setAuth(
            response.data.user,
            response.data.token
        )

        router.push('/')

    } catch (error) {
        errors.email = null
        errors.password = null
        errors.general = null
        if (error.response && error.response.status === 422) {
            // Validation errors
            Object.assign(errors, error.response.data.errors)
        } else {
            // General error
            errors.general = 'An error occurred. Please try again.'
        }
        

    }

}
</script>
<style scoped>
.page-bg {
    background-image: url('../../metronic/assets/media/images/2600x1200/bg-10.png');
}

.dark .page-bg {
    background-image: url('../../metronic/assets/media/images/2600x1200/bg-10-dark.png');
}
</style>
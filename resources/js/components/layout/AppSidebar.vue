<script setup>
import {RouterLink} from 'vue-router'
import api from '../../services/api'
import { useAuthStore } from '../../stores/auth'

const logout = async () => {
    try {
        await api.post('/logout')
        useAuthStore().logout()
    } catch (error) {
        console.error('Logout failed:', error)
    }
}
</script>
<template>
    <div class="fixed top-0 bottom-0 z-20 hidden lg:flex flex-col items-stretch shrink-0 bg-muted [--kt-drawer-enable:true] lg:[--kt-drawer-enable:false]"
                data-kt-drawer="true" data-kt-drawer-class="kt-drawer kt-drawer-start flex" id="sidebars">
                <div class="hidden lg:flex items-center justify-center shrink-0 pt-8 pb-3.5" id="sidebar_header">
                    <RouterLink :to="{name: 'Dashboard'}">
                        <img class="dark:hidden min-h-[42px]" src="/storage/assets/media/app/mini-logo-square-gray.svg" />
                        <img class="hidden dark:block min-h-[42px]"
                            src="/storage/assets/media/app/mini-logo-square-gray-dark.svg" />
                    </RouterLink>
                </div>
                <div class="kt-scrollable-y-hover grow gap-2.5 shrink-0 flex items-center pt-5 lg:pt-0 ps-3 pe-3 lg:pe-0 flex-col"
                    data-kt-scrollable="true" data-kt-scrollable-dependencies="#sidebar_header,#sidebar_footer"
                    data-kt-scrollable-height="auto" data-kt-scrollable-offset="80px"
                    data-kt-scrollable-wrappers="#sidebar_menu_wrapper" id="sidebar_menu_wrapper">
                    <!-- Sidebar Menu -->
                    <div class="kt-menu flex flex-col gap-2.5 grow" data-kt-menu="true" id="sidebar_menu">
                        <div class="kt-menu-item">
                            <RouterLink class="kt-menu-link rounded-[9px] border border-transparent kt-menu-item-active:border-border kt-menu-item-active:bg-background kt-menu-link-hover:bg-background kt-menu-link-hover:border-border w-[62px] h-[60px] flex flex-col justify-center items-center gap-1 p-2"
                                :to="{name: 'Dashboard'}">
                                <span
                                    class="kt-menu-icon kt-menu-item-here:text-primary kt-menu-item-active:text-primary kt-menu-link-hover:text-primary text-secondary-foreground">
                                    <i class="ki-filled ki-chart-line-star text-xl">
                                    </i>
                                </span>
                                <span
                                    class="kt-menu-title text-xs kt-menu-item-here:text-primary kt-menu-item-active:text-primary kt-menu-link-hover:text-primary text-secondary-foreground font-medium">
                                    Boards
                                </span>
                            </RouterLink>
                        </div>
                        <div class="kt-menu-item" data-kt-menu-item-offset="-10px, 14px"
                            data-kt-menu-item-overflow="true" data-kt-menu-item-placement="right-start"
                            data-kt-menu-item-toggle="dropdown" data-kt-menu-item-trigger="click|lg:hover">
                            <div
                                class="kt-menu-link rounded-[9px] border border-transparent kt-menu-item-here:border-border kt-menu-item-here:bg-background kt-menu-link-hover:bg-background kt-menu-link-hover:border-border w-[62px] h-[60px] flex flex-col justify-center items-center gap-1 p-2 grow">
                                <span
                                    class="kt-menu-icon kt-menu-item-here:text-primary kt-menu-item-active:text-primary kt-menu-link-hover:text-primary text-secondary-foreground">
                                    <i class="ki-filled ki-profile-circle text-xl">
                                    </i>
                                </span>
                                <span
                                    class="kt-menu-title kt-menu-item-here:text-primary kt-menu-item-active:text-primary kt-menu-link-hover:text-primary font-medium text-xs text-secondary-foreground">
                                    Admin
                                </span>
                            </div>
                            <div
                                class="kt-menu-default kt-menu-dropdown gap-0.5 w-[220px] kt-scrollable-y-auto lg:overflow-visible max-h-[50vh]">
                                <div class="kt-menu-item" data-kt-menu-item-placement="right-start"
                                    data-kt-menu-item-toggle="accordion|lg:dropdown"
                                    data-kt-menu-item-trigger="click|lg:hover">
                                    <div class="kt-menu-link grow cursor-pointer">
                                        <span class="kt-menu-title">
                                            Users
                                        </span>
                                        <span class="kt-menu-arrow">
                                            <i class="ki-filled ki-right text-xs rtl:translate rtl:rotate-180">
                                            </i>
                                        </span>
                                    </div>
                                    <div class="kt-menu-default kt-menu-dropdown gap-0.5 w-[220px]">
                                        <div class="kt-menu-item">
                                            <RouterLink class="kt-menu-link"
                                                :to="{name: 'Users'}">
                                                <span class="kt-menu-title">
                                                    User list
                                                </span>
                                            </RouterLink>
                                        </div>
                                        <div class="kt-menu-item">
                                            <RouterLink class="kt-menu-link"
                                                :to="{name: 'UserCreate'}">
                                                <span class="kt-menu-title">
                                                    Create User
                                                </span>
                                            </RouterLink>
                                        </div>
                                        <div class="kt-menu-item">
                                            <RouterLink class="kt-menu-link"
                                                 :to="{name: 'UserEdit', params: {id: 1}}">
                                                <span class="kt-menu-title">
                                                    Update User
                                                </span>
                                            </RouterLink>
                                        </div>
                                        <div class="kt-menu-item">
                                            <a class="kt-menu-link" href="html/demo8/public-profile/profiles/nft.html">
                                                <span class="kt-menu-title">
                                                    Status toggle
                                                </span>
                                            </a>
                                        </div>                                      
                                    </div>
                                </div>
                                <div class="kt-menu-item" data-kt-menu-item-placement="right-start"
                                    data-kt-menu-item-toggle="accordion|lg:dropdown"
                                    data-kt-menu-item-trigger="click|lg:hover">
                                    <div class="kt-menu-link grow cursor-pointer">
                                        <span class="kt-menu-title">
                                            Roles
                                        </span>
                                        <span class="kt-menu-arrow">
                                            <i class="ki-filled ki-right text-xs rtl:translate rtl:rotate-180">
                                            </i>
                                        </span>
                                    </div>
                                    <div class="kt-menu-default kt-menu-dropdown gap-0.5 w-[220px]">
                                        <div class="kt-menu-item">
                                            <RouterLink class="kt-menu-link"
                                                :to="{name: 'Roles'}">
                                                <span class="kt-menu-title">
                                                    Role list
                                                </span>
                                            </RouterLink>
                                        </div>
                                        <div class="kt-menu-item">
                                            <RouterLink class="kt-menu-link"
                                                :to="{name: 'RoleCreate'}">
                                                <span class="kt-menu-title">
                                                    Role Create
                                                </span>
                                            </RouterLink>
                                        </div>
                                        <div class="kt-menu-item">
                                            <RouterLink class="kt-menu-link"
                                                :to="{name: 'RoleEdit', params: {id: 1}}">
                                                <span class="kt-menu-title">
                                                    Role Edit
                                                </span>
                                            </RouterLink>
                                        </div>
                                        <div class="kt-menu-item">
                                            <a class="kt-menu-link"
                                                href="html/demo8/public-profile/projects/2-columns.html">
                                                <span class="kt-menu-title">
                                                    Permission matrix
                                                </span>
                                            </a>
                                        </div>
                                        <div class="kt-menu-item">
                                            <a class="kt-menu-link"
                                                href="html/demo8/public-profile/projects/2-columns.html">
                                                <span class="kt-menu-title">
                                                    Assign permissions dynamically
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="kt-menu-item">
                                    <RouterLink class="kt-menu-link" :to="{name: 'PermissionMatrix'}">
                                        <span class="kt-menu-title">
                                            Permission Matrix
                                        </span>
                                    </RouterLink>
                                </div>
                                <div class="kt-menu-item">
                                    <a class="kt-menu-link" href="html/demo8/public-profile/teams.html">
                                        <span class="kt-menu-title">
                                            Teams
                                        </span>
                                    </a>
                                </div>
                                <div class="kt-menu-item">
                                    <a class="kt-menu-link" href="html/demo8/public-profile/network.html">
                                        <span class="kt-menu-title">
                                            Network
                                        </span>
                                    </a>
                                </div>
                                <div class="kt-menu-item">
                                    <a class="kt-menu-link" href="html/demo8/public-profile/activity.html">
                                        <span class="kt-menu-title">
                                            Activity
                                        </span>
                                    </a>
                                </div>
                                <div class="kt-menu-item" data-kt-menu-item-placement="right-start"
                                    data-kt-menu-item-toggle="accordion|lg:dropdown"
                                    data-kt-menu-item-trigger="click|lg:hover">
                                    <div class="kt-menu-link grow cursor-pointer">
                                        <span class="kt-menu-title">
                                            Permissions
                                        </span>
                                        <span class="kt-menu-arrow">
                                            <i class="ki-filled ki-right text-xs rtl:translate rtl:rotate-180">
                                            </i>
                                        </span>
                                    </div>
                                    <div class="kt-menu-default kt-menu-dropdown gap-0.5 w-[220px]">
                                        <div class="kt-menu-item">
                                            <a class="kt-menu-link"
                                                href="html/demo8/public-profile/campaigns/card.html">
                                                <span class="kt-menu-title">
                                                    Dynamic permission checkbox system
                                                </span>
                                            </a>
                                        </div>
                                        <div class="kt-menu-item">
                                            <a class="kt-menu-link"
                                                href="html/demo8/public-profile/campaigns/list.html">
                                                <span class="kt-menu-title">
                                                    Grouped by module
                                                </span>
                                            </a>
                                        </div>
                                        <div class="kt-menu-item">
                                            <a class="kt-menu-link" href="html/demo8/public-profile/empty.html">
                                                <span class="kt-menu-title">
                                                    Empty
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="kt-menu-item" data-kt-menu-item-offset="-10px, 14px"
                            data-kt-menu-item-overflow="true" data-kt-menu-item-placement="right-start"
                            data-kt-menu-item-toggle="dropdown" data-kt-menu-item-trigger="click|lg:hover">
                            <div
                                class="kt-menu-link rounded-[9px] border border-transparent kt-menu-item-here:border-border kt-menu-item-here:bg-background kt-menu-link-hover:bg-background kt-menu-link-hover:border-border w-[62px] h-[60px] flex flex-col justify-center items-center gap-1 p-2 grow">
                                <span
                                    class="kt-menu-icon kt-menu-item-here:text-primary kt-menu-item-active:text-primary kt-menu-link-hover:text-primary text-secondary-foreground">
                                    <i class="ki-filled ki-setting-2 text-xl">
                                    </i>
                                </span>
                                <span
                                    class="kt-menu-title kt-menu-item-here:text-primary kt-menu-item-active:text-primary kt-menu-link-hover:text-primary font-medium text-xs text-secondary-foreground">
                                    Account
                                </span>
                            </div>
                            <div
                                class="kt-menu-default kt-menu-dropdown gap-0.5 w-[220px] kt-scrollable-y-auto lg:overflow-visible max-h-[50vh]">
                                <div class="kt-menu-item" data-kt-menu-item-placement="right-start"
                                    data-kt-menu-item-toggle="accordion|lg:dropdown"
                                    data-kt-menu-item-trigger="click|lg:hover">
                                    <div class="kt-menu-link grow cursor-pointer">
                                        <span class="kt-menu-title">
                                            Account Home
                                        </span>
                                        <span class="kt-menu-arrow">
                                            <i class="ki-filled ki-right text-xs rtl:translate rtl:rotate-180">
                                            </i>
                                        </span>
                                    </div>
                                    <div class="kt-menu-default kt-menu-dropdown gap-0.5 w-[220px]">
                                        <div class="kt-menu-item">
                                            <a class="kt-menu-link" href="html/demo8/account/home/get-started.html">
                                                <span class="kt-menu-title">
                                                    Get Started
                                                </span>
                                            </a>
                                        </div>
                                        <div class="kt-menu-item">
                                            <a class="kt-menu-link" href="html/demo8/account/home/user-profile.html">
                                                <span class="kt-menu-title">
                                                    User Profile
                                                </span>
                                            </a>
                                        </div>
                                        <div class="kt-menu-item">
                                            <a class="kt-menu-link" href="html/demo8/account/home/company-profile.html">
                                                <span class="kt-menu-title">
                                                    Company Profile
                                                </span>
                                            </a>
                                        </div>
                                        <div class="kt-menu-item">
                                            <a class="kt-menu-link"
                                                href="html/demo8/account/home/settings-sidebar.html">
                                                <span class="kt-menu-title">
                                                    Settings - With Sidebar
                                                </span>
                                            </a>
                                        </div>
                                        <div class="kt-menu-item">
                                            <a class="kt-menu-link"
                                                href="html/demo8/account/home/settings-enterprise.html">
                                                <span class="kt-menu-title">
                                                    Settings - Enterprise
                                                </span>
                                            </a>
                                        </div>
                                        <div class="kt-menu-item">
                                            <a class="kt-menu-link" href="html/demo8/account/home/settings-plain.html">
                                                <span class="kt-menu-title">
                                                    Settings - Plain
                                                </span>
                                            </a>
                                        </div>
                                        <div class="kt-menu-item">
                                            <a class="kt-menu-link" href="html/demo8/account/home/settings-modal.html">
                                                <span class="kt-menu-title">
                                                    Settings - Modal
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="kt-menu-item" data-kt-menu-item-placement="right-start"
                                    data-kt-menu-item-toggle="accordion|lg:dropdown"
                                    data-kt-menu-item-trigger="click|lg:hover">
                                    <div class="kt-menu-link grow cursor-pointer">
                                        <span class="kt-menu-title">
                                            Billing
                                        </span>
                                        <span class="kt-menu-arrow">
                                            <i class="ki-filled ki-right text-xs rtl:translate rtl:rotate-180">
                                            </i>
                                        </span>
                                    </div>
                                    <div class="kt-menu-default kt-menu-dropdown gap-0.5 w-[220px]">
                                        <div class="kt-menu-item">
                                            <a class="kt-menu-link" href="html/demo8/account/billing/basic.html">
                                                <span class="kt-menu-title">
                                                    Billing - Basic
                                                </span>
                                            </a>
                                        </div>
                                        <div class="kt-menu-item">
                                            <a class="kt-menu-link" href="html/demo8/account/billing/enterprise.html">
                                                <span class="kt-menu-title">
                                                    Billing - Enterprise
                                                </span>
                                            </a>
                                        </div>
                                        <div class="kt-menu-item">
                                            <a class="kt-menu-link" href="html/demo8/account/billing/plans.html">
                                                <span class="kt-menu-title">
                                                    Plans
                                                </span>
                                            </a>
                                        </div>
                                        <div class="kt-menu-item">
                                            <a class="kt-menu-link" href="html/demo8/account/billing/history.html">
                                                <span class="kt-menu-title">
                                                    Billing History
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="kt-menu-item" data-kt-menu-item-placement="right-start"
                                    data-kt-menu-item-toggle="accordion|lg:dropdown"
                                    data-kt-menu-item-trigger="click|lg:hover">
                                    <div class="kt-menu-link grow cursor-pointer">
                                        <span class="kt-menu-title">
                                            Security
                                        </span>
                                        <span class="kt-menu-arrow">
                                            <i class="ki-filled ki-right text-xs rtl:translate rtl:rotate-180">
                                            </i>
                                        </span>
                                    </div>
                                    <div class="kt-menu-default kt-menu-dropdown gap-0.5 w-[220px]">
                                        <div class="kt-menu-item">
                                            <a class="kt-menu-link" href="html/demo8/account/security/get-started.html">
                                                <span class="kt-menu-title">
                                                    Get Started
                                                </span>
                                            </a>
                                        </div>
                                        <div class="kt-menu-item">
                                            <a class="kt-menu-link" href="html/demo8/account/security/overview.html">
                                                <span class="kt-menu-title">
                                                    Security Overview
                                                </span>
                                            </a>
                                        </div>
                                        <div class="kt-menu-item">
                                            <a class="kt-menu-link"
                                                href="html/demo8/account/security/allowed-ip-addresses.html">
                                                <span class="kt-menu-title">
                                                    Allowed IP Addresses
                                                </span>
                                            </a>
                                        </div>
                                        <div class="kt-menu-item">
                                            <a class="kt-menu-link"
                                                href="html/demo8/account/security/privacy-settings.html">
                                                <span class="kt-menu-title">
                                                    Privacy Settings
                                                </span>
                                            </a>
                                        </div>
                                        <div class="kt-menu-item">
                                            <a class="kt-menu-link"
                                                href="html/demo8/account/security/device-management.html">
                                                <span class="kt-menu-title">
                                                    Device Management
                                                </span>
                                            </a>
                                        </div>
                                        <div class="kt-menu-item">
                                            <a class="kt-menu-link"
                                                href="html/demo8/account/security/backup-and-recovery.html">
                                                <span class="kt-menu-title">
                                                    Backup & Recovery
                                                </span>
                                            </a>
                                        </div>
                                        <div class="kt-menu-item">
                                            <a class="kt-menu-link"
                                                href="html/demo8/account/security/current-sessions.html">
                                                <span class="kt-menu-title">
                                                    Current Sessions
                                                </span>
                                            </a>
                                        </div>
                                        <div class="kt-menu-item">
                                            <a class="kt-menu-link"
                                                href="html/demo8/account/security/security-log.html">
                                                <span class="kt-menu-title">
                                                    Security Log
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="kt-menu-item" data-kt-menu-item-placement="right-start"
                                    data-kt-menu-item-toggle="accordion|lg:dropdown"
                                    data-kt-menu-item-trigger="click|lg:hover">
                                    <div class="kt-menu-link grow cursor-pointer">
                                        <span class="kt-menu-title">
                                            Members & Roles
                                        </span>
                                        <span class="kt-menu-arrow">
                                            <i class="ki-filled ki-right text-xs rtl:translate rtl:rotate-180">
                                            </i>
                                        </span>
                                    </div>
                                    <div class="kt-menu-default kt-menu-dropdown gap-0.5 w-[220px]">
                                        <div class="kt-menu-item">
                                            <a class="kt-menu-link" href="html/demo8/account/members/team-starter.html">
                                                <span class="kt-menu-title">
                                                    Teams Starter
                                                </span>
                                            </a>
                                        </div>
                                        <div class="kt-menu-item">
                                            <a class="kt-menu-link" href="html/demo8/account/members/teams.html">
                                                <span class="kt-menu-title">
                                                    Teams
                                                </span>
                                            </a>
                                        </div>
                                        <div class="kt-menu-item">
                                            <a class="kt-menu-link" href="html/demo8/account/members/team-info.html">
                                                <span class="kt-menu-title">
                                                    Team Info
                                                </span>
                                            </a>
                                        </div>
                                        <div class="kt-menu-item">
                                            <a class="kt-menu-link"
                                                href="html/demo8/account/members/members-starter.html">
                                                <span class="kt-menu-title">
                                                    Members Starter
                                                </span>
                                            </a>
                                        </div>
                                        <div class="kt-menu-item">
                                            <a class="kt-menu-link" href="html/demo8/account/members/team-members.html">
                                                <span class="kt-menu-title">
                                                    Team Members
                                                </span>
                                            </a>
                                        </div>
                                        <div class="kt-menu-item">
                                            <a class="kt-menu-link"
                                                href="html/demo8/account/members/import-members.html">
                                                <span class="kt-menu-title">
                                                    Import Members
                                                </span>
                                            </a>
                                        </div>
                                        <div class="kt-menu-item">
                                            <a class="kt-menu-link" href="html/demo8/account/members/roles.html">
                                                <span class="kt-menu-title">
                                                    Roles
                                                </span>
                                            </a>
                                        </div>
                                        <div class="kt-menu-item">
                                            <a class="kt-menu-link"
                                                href="html/demo8/account/members/permissions-toggle.html">
                                                <span class="kt-menu-title">
                                                    Permissions - Toggler
                                                </span>
                                            </a>
                                        </div>
                                        <div class="kt-menu-item">
                                            <a class="kt-menu-link"
                                                href="html/demo8/account/members/permissions-check.html">
                                                <span class="kt-menu-title">
                                                    Permissions - Check
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="kt-menu-item">
                                    <a class="kt-menu-link" href="html/demo8/account/integrations.html">
                                        <span class="kt-menu-title">
                                            Integrations
                                        </span>
                                    </a>
                                </div>
                                <div class="kt-menu-item">
                                    <a class="kt-menu-link" href="html/demo8/account/notifications.html">
                                        <span class="kt-menu-title">
                                            Notifications
                                        </span>
                                    </a>
                                </div>
                                <div class="kt-menu-item">
                                    <a class="kt-menu-link" href="html/demo8/account/api-keys.html">
                                        <span class="kt-menu-title">
                                            API Keys
                                        </span>
                                    </a>
                                </div>
                                <div class="kt-menu-item" data-kt-menu-item-placement="right-start"
                                    data-kt-menu-item-toggle="accordion|lg:dropdown"
                                    data-kt-menu-item-trigger="click|lg:hover">
                                    <div class="kt-menu-link grow cursor-pointer">
                                        <span class="kt-menu-title">
                                            More
                                        </span>
                                        <span class="kt-menu-arrow">
                                            <i class="ki-filled ki-right text-xs rtl:translate rtl:rotate-180">
                                            </i>
                                        </span>
                                    </div>
                                    <div class="kt-menu-default kt-menu-dropdown gap-0.5 w-[220px]">
                                        <div class="kt-menu-item">
                                            <a class="kt-menu-link" href="html/demo8/account/appearance.html">
                                                <span class="kt-menu-title">
                                                    Appearance
                                                </span>
                                            </a>
                                        </div>
                                        <div class="kt-menu-item">
                                            <a class="kt-menu-link" href="html/demo8/account/invite-a-friend.html">
                                                <span class="kt-menu-title">
                                                    Invite a Friend
                                                </span>
                                            </a>
                                        </div>
                                        <div class="kt-menu-item">
                                            <a class="kt-menu-link" href="html/demo8/account/activity.html">
                                                <span class="kt-menu-title">
                                                    Activity
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="kt-menu-item" data-kt-menu-item-offset="-10px, 14px"
                            data-kt-menu-item-overflow="true" data-kt-menu-item-placement="right-start"
                            data-kt-menu-item-toggle="dropdown" data-kt-menu-item-trigger="click|lg:hover">
                            <div
                                class="kt-menu-link rounded-[9px] border border-transparent kt-menu-item-here:border-border kt-menu-item-here:bg-background kt-menu-link-hover:bg-background kt-menu-link-hover:border-border w-[62px] h-[60px] flex flex-col justify-center items-center gap-1 p-2 grow">
                                <span
                                    class="kt-menu-icon kt-menu-item-here:text-primary kt-menu-item-active:text-primary kt-menu-link-hover:text-primary text-secondary-foreground">
                                    <i class="ki-filled ki-users text-xl">
                                    </i>
                                </span>
                                <span
                                    class="kt-menu-title kt-menu-item-here:text-primary kt-menu-item-active:text-primary kt-menu-link-hover:text-primary font-medium text-xs text-secondary-foreground">
                                    Network
                                </span>
                            </div>
                            <div
                                class="kt-menu-default kt-menu-dropdown gap-0.5 w-[220px] kt-scrollable-y-auto lg:overflow-visible max-h-[50vh]">
                                <div class="kt-menu-item">
                                    <a class="kt-menu-link" href="html/demo8/network/get-started.html">
                                        <span class="kt-menu-title">
                                            Get Started
                                        </span>
                                    </a>
                                </div>
                                <div class="kt-menu-item" data-kt-menu-item-placement="right-start"
                                    data-kt-menu-item-toggle="accordion|lg:dropdown"
                                    data-kt-menu-item-trigger="click|lg:hover">
                                    <div class="kt-menu-link grow cursor-pointer">
                                        <span class="kt-menu-title">
                                            User Cards
                                        </span>
                                        <span class="kt-menu-arrow">
                                            <i class="ki-filled ki-right text-xs rtl:translate rtl:rotate-180">
                                            </i>
                                        </span>
                                    </div>
                                    <div class="kt-menu-default kt-menu-dropdown gap-0.5 w-[220px]">
                                        <div class="kt-menu-item">
                                            <a class="kt-menu-link"
                                                href="html/demo8/network/user-cards/mini-cards.html">
                                                <span class="kt-menu-title">
                                                    Mini Cards
                                                </span>
                                            </a>
                                        </div>
                                        <div class="kt-menu-item">
                                            <a class="kt-menu-link" href="html/demo8/network/user-cards/team-crew.html">
                                                <span class="kt-menu-title">
                                                    Team Crew
                                                </span>
                                            </a>
                                        </div>
                                        <div class="kt-menu-item">
                                            <a class="kt-menu-link" href="html/demo8/network/user-cards/author.html">
                                                <span class="kt-menu-title">
                                                    Author
                                                </span>
                                            </a>
                                        </div>
                                        <div class="kt-menu-item">
                                            <a class="kt-menu-link" href="html/demo8/network/user-cards/nft.html">
                                                <span class="kt-menu-title">
                                                    NFT
                                                </span>
                                            </a>
                                        </div>
                                        <div class="kt-menu-item">
                                            <a class="kt-menu-link" href="html/demo8/network/user-cards/social.html">
                                                <span class="kt-menu-title">
                                                    Social
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="kt-menu-item" data-kt-menu-item-placement="right-start"
                                    data-kt-menu-item-toggle="accordion|lg:dropdown"
                                    data-kt-menu-item-trigger="click|lg:hover">
                                    <div class="kt-menu-link grow cursor-pointer">
                                        <span class="kt-menu-title">
                                            User Table
                                        </span>
                                        <span class="kt-menu-arrow">
                                            <i class="ki-filled ki-right text-xs rtl:translate rtl:rotate-180">
                                            </i>
                                        </span>
                                    </div>
                                    <div class="kt-menu-default kt-menu-dropdown gap-0.5 w-[220px]">
                                        <div class="kt-menu-item">
                                            <a class="kt-menu-link" href="html/demo8/network/user-table/team-crew.html">
                                                <span class="kt-menu-title">
                                                    Team Crew
                                                </span>
                                            </a>
                                        </div>
                                        <div class="kt-menu-item">
                                            <a class="kt-menu-link"
                                                href="html/demo8/network/user-table/app-roster.html">
                                                <span class="kt-menu-title">
                                                    App Roster
                                                </span>
                                            </a>
                                        </div>
                                        <div class="kt-menu-item">
                                            <a class="kt-menu-link"
                                                href="html/demo8/network/user-table/market-authors.html">
                                                <span class="kt-menu-title">
                                                    Market Authors
                                                </span>
                                            </a>
                                        </div>
                                        <div class="kt-menu-item">
                                            <a class="kt-menu-link"
                                                href="html/demo8/network/user-table/saas-users.html">
                                                <span class="kt-menu-title">
                                                    SaaS Users
                                                </span>
                                            </a>
                                        </div>
                                        <div class="kt-menu-item">
                                            <a class="kt-menu-link"
                                                href="html/demo8/network/user-table/store-clients.html">
                                                <span class="kt-menu-title">
                                                    Store Clients
                                                </span>
                                            </a>
                                        </div>
                                        <div class="kt-menu-item">
                                            <a class="kt-menu-link" href="html/demo8/network/user-table/visitors.html">
                                                <span class="kt-menu-title">
                                                    Visitors
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="kt-menu-item" data-kt-menu-item-offset="-10px, 14px"
                            data-kt-menu-item-overflow="true" data-kt-menu-item-placement="right-start"
                            data-kt-menu-item-toggle="dropdown" data-kt-menu-item-trigger="click|lg:hover">
                            <div
                                class="kt-menu-link rounded-[9px] border border-transparent kt-menu-item-here:border-border kt-menu-item-here:bg-background kt-menu-link-hover:bg-background kt-menu-link-hover:border-border w-[62px] h-[60px] flex flex-col justify-center items-center gap-1 p-2 grow">
                                <span
                                    class="kt-menu-icon kt-menu-item-here:text-primary kt-menu-item-active:text-primary kt-menu-link-hover:text-primary text-secondary-foreground">
                                    <i class="ki-filled ki-handcart text-xl">
                                    </i>
                                </span>
                                <span
                                    class="kt-menu-title kt-menu-item-here:text-primary kt-menu-item-active:text-primary kt-menu-link-hover:text-primary font-medium text-xs text-secondary-foreground">
                                    Store
                                </span>
                            </div>
                            <div
                                class="kt-menu-default kt-menu-dropdown gap-0.5 w-[220px] kt-scrollable-y-auto lg:overflow-visible max-h-[50vh]">
                                <div class="kt-menu-item">
                                    <a class="kt-menu-link" href="html/demo8/store-client/home.html">
                                        <span class="kt-menu-title">
                                            Home
                                        </span>
                                    </a>
                                </div>
                                <div class="kt-menu-item">
                                    <a class="kt-menu-link" href="html/demo8/store-client/search-results-grid.html">
                                        <span class="kt-menu-title">
                                            Search Results - Grid
                                        </span>
                                    </a>
                                </div>
                                <div class="kt-menu-item">
                                    <a class="kt-menu-link" href="html/demo8/store-client/search-results-list.html">
                                        <span class="kt-menu-title">
                                            Search Results - List
                                        </span>
                                    </a>
                                </div>
                                <div class="kt-menu-item">
                                    <a class="kt-menu-link" href="html/demo8/store-client/product-details.html">
                                        <span class="kt-menu-title">
                                            Product Details
                                        </span>
                                    </a>
                                </div>
                                <div class="kt-menu-item">
                                    <a class="kt-menu-link" href="html/demo8/store-client/shopping-cart.html">
                                        <span class="kt-menu-title">
                                            Shopping Cart
                                        </span>
                                    </a>
                                </div>
                                <div class="kt-menu-item">
                                    <a class="kt-menu-link" href="html/demo8/store-client/wishlist.html">
                                        <span class="kt-menu-title">
                                            Wishlist
                                        </span>
                                    </a>
                                </div>
                                <div class="kt-menu-item" data-kt-menu-item-placement="right-start"
                                    data-kt-menu-item-toggle="accordion|lg:dropdown"
                                    data-kt-menu-item-trigger="click|lg:hover">
                                    <div class="kt-menu-link grow cursor-pointer">
                                        <span class="kt-menu-title">
                                            Checkout
                                        </span>
                                        <span class="kt-menu-arrow">
                                            <i class="ki-filled ki-right text-xs rtl:translate rtl:rotate-180">
                                            </i>
                                        </span>
                                    </div>
                                    <div class="kt-menu-default kt-menu-dropdown gap-0.5 w-[220px]">
                                        <div class="kt-menu-item">
                                            <a class="kt-menu-link"
                                                href="html/demo8/store-client/checkout/order-summary.html">
                                                <span class="kt-menu-title">
                                                    Order Summary
                                                </span>
                                            </a>
                                        </div>
                                        <div class="kt-menu-item">
                                            <a class="kt-menu-link"
                                                href="html/demo8/store-client/checkout/shipping-info.html">
                                                <span class="kt-menu-title">
                                                    Shipping Info
                                                </span>
                                            </a>
                                        </div>
                                        <div class="kt-menu-item">
                                            <a class="kt-menu-link"
                                                href="html/demo8/store-client/checkout/payment-method.html">
                                                <span class="kt-menu-title">
                                                    Payment Method
                                                </span>
                                            </a>
                                        </div>
                                        <div class="kt-menu-item">
                                            <a class="kt-menu-link"
                                                href="html/demo8/store-client/checkout/order-placed.html">
                                                <span class="kt-menu-title">
                                                    Order Placed
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="kt-menu-item">
                                    <a class="kt-menu-link" href="html/demo8/store-client/my-orders.html">
                                        <span class="kt-menu-title">
                                            My Orders
                                        </span>
                                    </a>
                                </div>
                                <div class="kt-menu-item">
                                    <a class="kt-menu-link" href="html/demo8/store-client/order-receipt.html">
                                        <span class="kt-menu-title">
                                            Order Receipt
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="kt-menu-item" data-kt-menu-item-offset="-10px, 14px"
                            data-kt-menu-item-overflow="true" data-kt-menu-item-placement="right-start"
                            data-kt-menu-item-toggle="dropdown" data-kt-menu-item-trigger="click|lg:hover">
                            <div
                                class="kt-menu-link rounded-[9px] border border-transparent kt-menu-item-here:border-border kt-menu-item-here:bg-background kt-menu-link-hover:bg-background kt-menu-link-hover:border-border w-[62px] h-[60px] flex flex-col justify-center items-center gap-1 p-2 grow">
                                <span
                                    class="kt-menu-icon kt-menu-item-here:text-primary kt-menu-item-active:text-primary kt-menu-link-hover:text-primary text-secondary-foreground">
                                    <i class="ki-filled ki-share text-xl">
                                    </i>
                                </span>
                                <span
                                    class="kt-menu-title kt-menu-item-here:text-primary kt-menu-item-active:text-primary kt-menu-link-hover:text-primary font-medium text-xs text-secondary-foreground">
                                    Help
                                </span>
                            </div>
                            <div
                                class="kt-menu-default kt-menu-dropdown gap-0.5 w-[220px] kt-scrollable-y-auto lg:overflow-visible max-h-[50vh]">
                                <div class="kt-menu-item">
                                    <a class="kt-menu-link"
                                        href="https://keenthemes.com/metronic/tailwind/docs/getting-started/installation">
                                        <span class="kt-menu-title">
                                            Getting Started
                                        </span>
                                    </a>
                                </div>
                                <div class="kt-menu-item" data-kt-menu-item-placement="right-start"
                                    data-kt-menu-item-toggle="accordion|lg:dropdown"
                                    data-kt-menu-item-trigger="click|lg:hover">
                                    <div class="kt-menu-link grow cursor-pointer">
                                        <span class="kt-menu-title">
                                            Support Forum
                                        </span>
                                        <span class="kt-menu-arrow">
                                            <i class="ki-filled ki-right text-xs rtl:translate rtl:rotate-180">
                                            </i>
                                        </span>
                                    </div>
                                    <div class="kt-menu-default kt-menu-dropdown gap-0.5 w-[220px]">
                                        <div class="kt-menu-item">
                                            <a class="kt-menu-link" href="https://devs.keenthemes.com">
                                                <span class="kt-menu-title">
                                                    All Questions
                                                </span>
                                            </a>
                                        </div>
                                        <div class="kt-menu-item">
                                            <a class="kt-menu-link" href="https://devs.keenthemes.com/popular">
                                                <span class="kt-menu-title">
                                                    Popular Questions
                                                </span>
                                            </a>
                                        </div>
                                        <div class="kt-menu-item">
                                            <a class="kt-menu-link" href="https://devs.keenthemes.com/question/create">
                                                <span class="kt-menu-title">
                                                    Ask Question
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="kt-menu-item">
                                    <a class="kt-menu-link"
                                        href="https://keenthemes.com/metronic/tailwind/docs/getting-started/license">
                                        <span class="kt-menu-title">
                                            Licenses & FAQ
                                        </span>
                                    </a>
                                </div>
                                <div class="kt-menu-item">
                                    <a class="kt-menu-link" href="https://keenthemes.com/metronic/tailwind/docs">
                                        <span class="kt-menu-title">
                                            Documentation
                                        </span>
                                    </a>
                                </div>
                                <div class="kt-menu-separator">
                                </div>
                                <div class="kt-menu-item">
                                    <a class="kt-menu-link" href="https://keenthemes.com/contact">
                                        <span class="kt-menu-title">
                                            Contact Us
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- End of Sidebar Menu -->
                </div>
                <div class="flex flex-col gap-5 items-center shrink-0 pb-4" id="sidebar_footer">
                    <div class="flex flex-col gap-1.5">
                        <!-- Chat -->
                        <button
                            class="kt-btn kt-btn-ghost kt-btn-icon size-9 hover:bg-background hover:[&_i]:text-primary"
                            data-kt-drawer-toggle="#chat_drawer">
                            <i class="ki-filled ki-messages text-lg">
                            </i>
                        </button>
                        <!--Chat Drawer-->
                        <div class="hidden kt-drawer kt-drawer-end card flex-col max-w-[90%] w-[450px] top-5 bottom-5 end-5 rounded-xl border border-border"
                            data-kt-drawer="true" data-kt-drawer-container="body" id="chat_drawer">
                            <div>
                                <div
                                    class="flex items-center justify-between gap-2.5 text-sm text-mono font-semibold px-5 py-3.5">
                                    Chat
                                    <button class="kt-btn kt-btn-sm kt-btn-icon kt-btn-dim shrink-0"
                                        data-kt-drawer-dismiss="true">
                                        <i class="ki-filled ki-cross">
                                        </i>
                                    </button>
                                </div>
                                <div class="border-b border-b-border">
                                </div>
                                <div class="border-b border-border py-2.5">
                                    <div class="flex items-center justify-between flex-wrap gap-2 px-5">
                                        <div class="flex items-center flex-wrap gap-2">
                                            <div
                                                class="flex items-center justify-center shrink-0 rounded-full bg-accent/60 border border-border size-11">
                                                <img alt="" class="size-7" src="/storage/assets/media/brand-logos/gitlab.svg">
                                                </img>
                                            </div>
                                            <div class="flex flex-col">
                                                <a class="text-sm font-semibold text-mono hover:text-primary" href="#">
                                                    HR Team
                                                </a>
                                                <span class="text-xs font-medium italic text-muted-foreground">
                                                    Jessy is typing..
                                                </span>
                                            </div>
                                        </div>
                                        <div class="flex items-center gap-2.5">
                                            <div class="flex -space-x-2">
                                                <div class="flex">
                                                    <img class="hover:z-5 relative shrink-0 rounded-full ring-1 ring-background size-[30px]"
                                                        src="/storage/assets/media/avatars/300-4.png" />
                                                </div>
                                                <div class="flex">
                                                    <img class="hover:z-5 relative shrink-0 rounded-full ring-1 ring-background size-[30px]"
                                                        src="/storage/assets/media/avatars/300-1.png" />
                                                </div>
                                                <div class="flex">
                                                    <img class="hover:z-5 relative shrink-0 rounded-full ring-1 ring-background size-[30px]"
                                                        src="/storage/assets/media/avatars/300-2.png" />
                                                </div>
                                                <div class="flex">
                                                    <span
                                                        class="hover:z-5 relative inline-flex items-center justify-center shrink-0 rounded-full ring-1 font-semibold leading-none text-2xs size-[30px] text-white size-6 ring-background bg-green-500">
                                                        +10
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="kt-menu" data-kt-menu="true">
                                                <div class="kt-menu-item" data-kt-menu-item-offset="0, 10px"
                                                    data-kt-menu-item-placement="bottom-end"
                                                    data-kt-menu-item-placement-rtl="bottom-start"
                                                    data-kt-menu-item-toggle="dropdown"
                                                    data-kt-menu-item-trigger="click|lg:hover">
                                                    <button
                                                        class="kt-menu-toggle kt-btn kt-btn-sm kt-btn-icon kt-btn-ghost">
                                                        <i class="ki-filled ki-dots-vertical text-lg">
                                                        </i>
                                                    </button>
                                                    <div class="kt-menu-dropdown kt-menu-default w-full max-w-[175px]"
                                                        data-kt-menu-dismiss="true">
                                                        <div class="kt-menu-item">
                                                            <a class="kt-menu-link"
                                                                href="html/demo8/account/members/teams.html">
                                                                <span class="kt-menu-icon">
                                                                    <i class="ki-filled ki-users">
                                                                    </i>
                                                                </span>
                                                                <span class="kt-menu-title">
                                                                    Invite Users
                                                                </span>
                                                            </a>
                                                        </div>
                                                        <div class="kt-menu-item" data-kt-menu-item-offset="-15px, 0"
                                                            data-kt-menu-item-placement="right-start"
                                                            data-kt-menu-item-toggle="dropdown"
                                                            data-kt-menu-item-trigger="click|lg:hover">
                                                            <div class="kt-menu-link">
                                                                <span class="kt-menu-icon">
                                                                    <i class="ki-filled ki-people">
                                                                    </i>
                                                                </span>
                                                                <span class="kt-menu-title">
                                                                    Team
                                                                </span>
                                                                <span class="kt-menu-arrow">
                                                                    <i
                                                                        class="ki-filled ki-right text-xs rtl:transform rtl:rotate-180">
                                                                    </i>
                                                                </span>
                                                            </div>
                                                            <div
                                                                class="kt-menu-dropdown kt-menu-default w-full max-w-[175px]">
                                                                <div class="kt-menu-item">
                                                                    <a class="kt-menu-link"
                                                                        href="html/demo8/account/members/import-members.html">
                                                                        <span class="kt-menu-icon">
                                                                            <i class="ki-filled ki-shield-search">
                                                                            </i>
                                                                        </span>
                                                                        <span class="kt-menu-title">
                                                                            Find Members
                                                                        </span>
                                                                    </a>
                                                                </div>
                                                                <div class="kt-menu-item">
                                                                    <a class="kt-menu-link"
                                                                        href="html/demo8/account/members/import-members.html">
                                                                        <span class="kt-menu-icon">
                                                                            <i class="ki-filled ki-calendar">
                                                                            </i>
                                                                        </span>
                                                                        <span class="kt-menu-title">
                                                                            Meetings
                                                                        </span>
                                                                    </a>
                                                                </div>
                                                                <div class="kt-menu-item">
                                                                    <a class="kt-menu-link"
                                                                        href="html/demo8/account/members/import-members.html">
                                                                        <span class="kt-menu-icon">
                                                                            <i class="ki-filled ki-filter-edit">
                                                                            </i>
                                                                        </span>
                                                                        <span class="kt-menu-title">
                                                                            Group Settings
                                                                        </span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="kt-menu-item">
                                                            <a class="kt-menu-link"
                                                                href="html/demo8/account/security/privacy-settings.html">
                                                                <span class="kt-menu-icon">
                                                                    <i class="ki-filled ki-setting-3">
                                                                    </i>
                                                                </span>
                                                                <span class="kt-menu-title">
                                                                    Settings
                                                                </span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="kt-scrollable-y-auto grow" data-kt-scrollable="true"
                                data-kt-scrollable-dependencies="#header" data-kt-scrollable-max-height="auto"
                                data-kt-scrollable-offset="230px">
                                <div class="flex flex-col gap-5 py-5">
                                    <div class="flex items-end gap-3.5 px-5">
                                        <img alt="" class="rounded-full size-9" src="/storage/assets/media/avatars/300-5.png" />
                                        <div class="flex flex-col gap-1.5">
                                            <div
                                                class="kt-card shadow-none flex flex-col bg-accent/60 gap-2.5 p-3 rounded-bs-none text-2sm">
                                                Next week we are closing the project. Do You have questions?
                                            </div>
                                            <span class="text-xs font-medium text-muted-foreground">
                                                14:04
                                            </span>
                                        </div>
                                    </div>
                                    <div class="flex items-end justify-end gap-3.5 px-5">
                                        <div class="flex flex-col gap-1.5">
                                            <div
                                                class="kt-card shadow-none flex bg-primary flex-col gap-2.5 p-3 rounded-be-none">
                                                <p class="text-2sm font-medium text-primary-foreground">
                                                    This is excellent news!
                                                </p>
                                            </div>
                                            <div class="flex items-center justify-end gap-2 relative">
                                                <span class="text-xs font-medium text-secondary-foreground">
                                                    14:08
                                                </span>
                                                <i class="ki-filled ki-double-check text-lg absolute text-green-500">
                                                </i>
                                            </div>
                                        </div>
                                        <div class="relative shrink-0">
                                            <div class="kt-avatar size-9">
                                                <div class="kt-avatar-image">
                                                    <img alt="avatar" src="/storage/assets/media/avatars/300-2.png">
                                                    </img>
                                                </div>
                                                <div class="kt-avatar-indicator -end-2 -bottom-2">
                                                    <div class="kt-avatar-status kt-avatar-status-online size-2.5">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex items-end gap-3.5 px-5">
                                        <img alt="" class="rounded-full size-9" src="/storage/assets/media/avatars/300-4.png" />
                                        <div class="flex flex-col gap-1.5">
                                            <div
                                                class="kt-card shadow-none flex flex-col bg-accent/60 gap-2.5 p-3 rounded-bs-none text-2sm">
                                                I have checked the features, can not wait to demo them!
                                            </div>
                                            <span class="text-xs font-medium text-muted-foreground">
                                                14:26
                                            </span>
                                        </div>
                                    </div>
                                    <div class="flex items-end gap-3.5 px-5">
                                        <img alt="" class="rounded-full size-9" src="/storage/assets/media/avatars/300-1.png" />
                                        <div class="flex flex-col gap-1.5">
                                            <div
                                                class="kt-card shadow-none flex flex-col bg-accent/60 gap-2.5 p-3 rounded-bs-none text-2sm">
                                                I have looked over the rollout plan, and everything seems spot on.
                                            </div>
                                            <span class="text-xs font-medium text-muted-foreground">
                                                15:09
                                            </span>
                                        </div>
                                    </div>
                                    <div class="flex items-end justify-end gap-3.5 px-5">
                                        <div class="flex flex-col gap-1.5">
                                            <div
                                                class="kt-card shadow-none flex bg-primary flex-col gap-2.5 p-3 rounded-be-none">
                                                <p class="text-2sm font-medium text-primary-foreground">
                                                    Haven't seen the build yet, I'll look now.
                                                </p>
                                            </div>
                                            <div class="flex items-center justify-end gap-2 relative">
                                                <span class="text-xs font-medium text-secondary-foreground">
                                                    15:52
                                                </span>
                                                <i
                                                    class="ki-filled ki-double-check text-lg absolute text-muted-foreground">
                                                </i>
                                            </div>
                                        </div>
                                        <div class="relative shrink-0">
                                            <div class="kt-avatar size-9">
                                                <div class="kt-avatar-image">
                                                    <img alt="avatar" src="/storage/assets/media/avatars/300-2.png">
                                                    </img>
                                                </div>
                                                <div class="kt-avatar-indicator -end-2 -bottom-2">
                                                    <div class="kt-avatar-status kt-avatar-status-online size-2.5">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex items-end justify-end gap-3.5 px-5">
                                        <div class="flex flex-col gap-1.5">
                                            <div
                                                class="kt-card shadow-none flex bg-primary flex-col gap-2.5 p-3 rounded-be-none">
                                                <p class="text-2sm font-medium text-primary-foreground">
                                                    Checking the build now
                                                </p>
                                            </div>
                                            <div class="flex items-center justify-end gap-2 relative">
                                                <span class="text-xs font-medium text-secondary-foreground">
                                                    15:52
                                                </span>
                                                <i
                                                    class="ki-filled ki-double-check text-lg absolute text-muted-foreground">
                                                </i>
                                            </div>
                                        </div>
                                        <div class="relative shrink-0">
                                            <div class="kt-avatar size-9">
                                                <div class="kt-avatar-image">
                                                    <img alt="avatar" src="/storage/assets/media/avatars/300-2.png">
                                                    </img>
                                                </div>
                                                <div class="kt-avatar-indicator -end-2 -bottom-2">
                                                    <div class="kt-avatar-status kt-avatar-status-online size-2.5">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex items-end gap-3.5 px-5">
                                        <img alt="" class="rounded-full size-9" src="/storage/assets/media/avatars/300-4.png" />
                                        <div class="flex flex-col gap-1.5">
                                            <div
                                                class="kt-card shadow-none flex flex-col bg-accent/60 gap-2.5 p-3 rounded-bs-none text-2sm">
                                                Tomorrow, I will send the link for the meeting
                                            </div>
                                            <span class="text-xs font-medium text-muted-foreground">
                                                17:40
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!--Chat Footer-->
                            <div class="mb-2.5">
                                <div class="flex grow gap-2 px-5 py-3.5 bg-accent/60 mb-2.5 border-y border-border"
                                    id="join_request">
                                    <div class="kt-avatar size-9">
                                        <div class="kt-avatar-image">
                                            <img alt="avatar" src="/storage/assets/media/avatars/300-14.png">
                                            </img>
                                        </div>
                                        <div class="kt-avatar-indicator -end-2 -bottom-2">
                                            <div class="kt-avatar-status kt-avatar-status-online size-2.5">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex items-center justify-between gap-3 grow">
                                        <div class="flex flex-col">
                                            <div class="text-sm mb-px">
                                                <a class="hover:text-primary font-semibold text-mono" href="#">
                                                    Jane Perez
                                                </a>
                                                <span class="text-secondary-foreground">
                                                    wants to join chat
                                                </span>
                                            </div>
                                            <span class="flex items-center text-xs font-medium text-muted-foreground">
                                                1 day ago
                                                <span class="rounded-full size-1 bg-mono/30 mx-1.5">
                                                </span>
                                                Design Team
                                            </span>
                                        </div>
                                        <div class="flex gap-2.5">
                                            <button class="kt-btn kt-btn-sm kt-btn-outline kt-btn-sm"
                                                data-kt-dismiss="#join_request">
                                                Decline
                                            </button>
                                            <button class="kt-btn kt-btn-sm kt-btn-mono kt-btn-sm">
                                                Accept
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div class="relative grow mx-5">
                                    <img alt=""
                                        class="rounded-full size-[30px] absolute start-0 top-2/4 -translate-y-2/4 ms-2.5"
                                        src="/storage/assets/media/avatars/300-2.png">
                                    <input class="kt-input h-auto py-4 ps-12 bg-transparent"
                                        placeholder="Write a message..." type="text" value="" />
                                    <div class="flex items-center gap-2.5 absolute end-3 top-1/2 -translate-y-1/2">
                                        <button class="kt-btn kt-btn-sm kt-btn-icon kt-btn-ghost">
                                            <i class="ki-filled ki-exit-up">
                                            </i>
                                        </button>
                                        <a class="kt-btn kt-btn-mono kt-btn-sm" href="#">
                                            Send
                                        </a>
                                    </div>
                                    </img>
                                </div>
                            </div>
                            <!--End of Chat Footer-->
                        </div>
                        <!--End of Chat Drawer-->
                        <!-- End of Chat -->
                        <!-- Apps -->
                        <div data-kt-dropdown="true" data-kt-dropdown-offset="10px, 10px"
                            data-kt-dropdown-offset-rtl="-10px, 10px" data-kt-dropdown-placement="bottom-start"
                            data-kt-dropdown-placement-rtl="bottom-end">
                            <button
                                class="kt-btn kt-btn-ghost kt-btn-icon size-9 hover:bg-background hover:[&_i]:text-primary kt-dropdown-open:bg-background kt-dropdown-open:[&_i]:text-primary"
                                data-kt-dropdown-toggle="true">
                                <i class="ki-filled ki-element-11 text-lg">
                                </i>
                            </button>
                            <div class="kt-dropdown-menu p-0 w-screen max-w-[320px]" data-kt-dropdown-menu="true">
                                <div
                                    class="flex items-center justify-between gap-2.5 text-xs text-secondary-foreground font-medium px-5 py-3 border-b border-b-border">
                                    <span>
                                        Apps
                                    </span>
                                    <span>
                                        Enabled
                                    </span>
                                </div>
                                <div class="flex flex-col kt-scrollable-y-auto max-h-[400px] divide-y divide-border">
                                    <div class="flex items-center justify-between flex-wrap gap-2 px-5 py-3.5">
                                        <div class="flex items-center flex-wrap gap-2">
                                            <div
                                                class="flex items-center justify-center shrink-0 rounded-full bg-accent/60 border border-border size-10">
                                                <img alt="" class="size-6" src="/storage/assets/media/brand-logos/jira.svg">
                                                </img>
                                            </div>
                                            <div class="flex flex-col">
                                                <a class="text-sm font-semibold text-mono hover:text-primary" href="#">
                                                    Jira
                                                </a>
                                                <span class="text-xs font-medium text-secondary-foreground">
                                                    Project management
                                                </span>
                                            </div>
                                        </div>
                                        <div class="flex items-center gap-2 lg:gap-5">
                                            <input class="kt-switch" type="checkbox" value="1" />
                                        </div>
                                    </div>
                                    <div class="flex items-center justify-between flex-wrap gap-2 px-5 py-3.5">
                                        <div class="flex items-center flex-wrap gap-2">
                                            <div
                                                class="flex items-center justify-center shrink-0 rounded-full bg-accent/60 border border-border size-10">
                                                <img alt="" class="size-6" src="/storage/assets/media/brand-logos/inferno.svg">
                                                </img>
                                            </div>
                                            <div class="flex flex-col">
                                                <a class="text-sm font-semibold text-mono hover:text-primary" href="#">
                                                    Inferno
                                                </a>
                                                <span class="text-xs font-medium text-secondary-foreground">
                                                    Ensures healthcare app
                                                </span>
                                            </div>
                                        </div>
                                        <div class="flex items-center gap-2 lg:gap-5">
                                            <input checked="" class="kt-switch" type="checkbox" value="1" />
                                        </div>
                                    </div>
                                    <div class="flex items-center justify-between flex-wrap gap-2 px-5 py-3.5">
                                        <div class="flex items-center flex-wrap gap-2">
                                            <div
                                                class="flex items-center justify-center shrink-0 rounded-full bg-accent/60 border border-border size-10">
                                                <img alt="" class="size-6" src="/storage/assets/media/brand-logos/evernote.svg">
                                                </img>
                                            </div>
                                            <div class="flex flex-col">
                                                <a class="text-sm font-semibold text-mono hover:text-primary" href="#">
                                                    Evernote
                                                </a>
                                                <span class="text-xs font-medium text-secondary-foreground">
                                                    Notes management app
                                                </span>
                                            </div>
                                        </div>
                                        <div class="flex items-center gap-2 lg:gap-5">
                                            <input checked="" class="kt-switch" type="checkbox" value="1" />
                                        </div>
                                    </div>
                                    <div class="flex items-center justify-between flex-wrap gap-2 px-5 py-3.5">
                                        <div class="flex items-center flex-wrap gap-2">
                                            <div
                                                class="flex items-center justify-center shrink-0 rounded-full bg-accent/60 border border-border size-10">
                                                <img alt="" class="size-6" src="/storage/assets/media/brand-logos/gitlab.svg" />
                                            </div>
                                            <div class="flex flex-col">
                                                <a class="text-sm font-semibold text-mono hover:text-primary" href="#">
                                                    Gitlab
                                                </a>
                                                <span class="text-xs font-medium text-secondary-foreground">
                                                    DevOps platform
                                                </span>
                                            </div>
                                        </div>
                                        <div class="flex items-center gap-2 lg:gap-5">
                                            <input class="kt-switch" type="checkbox" value="1" />
                                        </div>
                                    </div>
                                    <div class="flex items-center justify-between flex-wrap gap-2 px-5 py-3.5">
                                        <div class="flex items-center flex-wrap gap-2">
                                            <div
                                                class="flex items-center justify-center shrink-0 rounded-full bg-accent/60 border border-border size-10">
                                                <img alt="" class="size-6"
                                                    src="/storage/assets/media/brand-logos/google-webdev.svg" />
                                            </div>
                                            <div class="flex flex-col">
                                                <a class="text-sm font-semibold text-mono hover:text-primary" href="#">
                                                    Google webdev
                                                </a>
                                                <span class="text-xs font-medium text-secondary-foreground">
                                                    Building web expierences
                                                </span>
                                            </div>
                                        </div>
                                        <div class="flex items-center gap-2 lg:gap-5">
                                            <input checked="" class="kt-switch" type="checkbox" value="1" />
                                        </div>
                                    </div>
                                </div>
                                <div class="grid p-5 border-t border-t-border">
                                    <a class="kt-btn kt-btn-outline justify-center"
                                        href="html/demo8/account/api-keys.html">
                                        Go to Apps
                                    </a>
                                </div>
                            </div>
                        </div>
                        <!-- End of Apps -->
                    </div>
                    <!-- User -->
                    <div data-kt-dropdown="true" data-kt-dropdown-offset="10px, 10px"
                        data-kt-dropdown-offset-rtl="-20px, 10px" data-kt-dropdown-placement="bottom-start"
                        data-kt-dropdown-placement-rtl="bottom-end" data-kt-dropdown-trigger="click">
                        <div class="cursor-pointer shrink-0" data-kt-dropdown-toggle="true">
                            <img alt="" class="size-9 rounded-lg shrink-0" src="/storage/assets/media/avatars/300-2.png" />
                        </div>
                        <div class="kt-dropdown-menu w-[250px]" data-kt-dropdown-menu="true">
                            <div class="flex items-center justify-between px-2.5 py-1.5 gap-1.5">
                                <div class="flex items-center gap-2">
                                    <img alt="" class="size-9 shrink-0 rounded-full border-2 border-green-500"
                                        src="/storage/assets/media/avatars/300-2.png" />
                                    <div class="flex flex-col gap-1.5">
                                        <span class="text-sm text-foreground font-semibold leading-none">
                                            Cody Fisher
                                        </span>
                                        <a class="text-xs text-secondary-foreground hover:text-primary font-medium leading-none"
                                            href="html/demo8/account/home/get-started.html">
                                            c.fisher@gmail.com
                                        </a>
                                    </div>
                                </div>
                                <span class="kt-badge kt-badge-sm kt-badge-primary kt-badge-outline">
                                    Pro
                                </span>
                            </div>
                            <ul class="kt-dropdown-menu-sub">
                                <li>
                                    <div class="kt-dropdown-menu-separator">
                                    </div>
                                </li>
                                <li>
                                    <a class="kt-dropdown-menu-link"
                                        href="html/demo8/public-profile/profiles/default.html">
                                        <i class="ki-filled ki-badge">
                                        </i>
                                        Public Profile
                                    </a>
                                </li>
                                <li>
                                    <a class="kt-dropdown-menu-link" href="html/demo8/account/home/user-profile.html">
                                        <i class="ki-filled ki-profile-circle">
                                        </i>
                                        My Profile
                                    </a>
                                </li>
                                <li data-kt-dropdown="true" data-kt-dropdown-placement="right-start"
                                    data-kt-dropdown-trigger="hover">
                                    <button class="kt-dropdown-menu-toggle" data-kt-dropdown-toggle="true">
                                        <i class="ki-filled ki-setting-2">
                                        </i>
                                        My Account
                                        <span class="kt-dropdown-menu-indicator">
                                            <i class="ki-filled ki-right text-xs">
                                            </i>
                                        </span>
                                    </button>
                                    <div class="kt-dropdown-menu w-[220px]" data-kt-dropdown-menu="true">
                                        <ul class="kt-dropdown-menu-sub">
                                            <li>
                                                <a class="kt-dropdown-menu-link"
                                                    href="html/demo8/account/home/get-started.html">
                                                    <i class="ki-filled ki-coffee">
                                                    </i>
                                                    Get Started
                                                </a>
                                            </li>
                                            <li>
                                                <a class="kt-dropdown-menu-link"
                                                    href="html/demo8/account/home/user-profile.html">
                                                    <i class="ki-filled ki-some-files">
                                                    </i>
                                                    My Profile
                                                </a>
                                            </li>
                                            <li>
                                                <a class="kt-dropdown-menu-link" href="#">
                                                    <span class="flex items-center gap-2">
                                                        <i class="ki-filled ki-icon">
                                                        </i>
                                                        Billing
                                                    </span>
                                                    <span class="ms-auto inline-flex items-center"
                                                        data-kt-tooltip="true" data-kt-tooltip-placement="top">
                                                        <i
                                                            class="ki-filled ki-information-2 text-base text-muted-foreground">
                                                        </i>
                                                        <span class="kt-tooltip" data-kt-tooltip-content="true">
                                                            Payment and subscription info
                                                        </span>
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a class="kt-dropdown-menu-link"
                                                    href="html/demo8/account/security/overview.html">
                                                    <i class="ki-filled ki-medal-star">
                                                    </i>
                                                    Security
                                                </a>
                                            </li>
                                            <li>
                                                <a class="kt-dropdown-menu-link"
                                                    href="html/demo8/account/members/teams.html">
                                                    <i class="ki-filled ki-setting">
                                                    </i>
                                                    Members & Roles
                                                </a>
                                            </li>
                                            <li>
                                                <a class="kt-dropdown-menu-link"
                                                    href="html/demo8/account/integrations.html">
                                                    <i class="ki-filled ki-switch">
                                                    </i>
                                                    Integrations
                                                </a>
                                            </li>
                                            <li>
                                                <div class="kt-dropdown-menu-separator">
                                                </div>
                                            </li>
                                            <li>
                                                <a class="kt-dropdown-menu-link"
                                                    href="html/demo8/account/security/overview.html">
                                                    <span class="flex items-center gap-2">
                                                        <i class="ki-filled ki-shield-tick">
                                                        </i>
                                                        Notifications
                                                    </span>
                                                    <input checked="" class="ms-auto kt-switch" name="check"
                                                        type="checkbox" value="1" />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <a class="kt-dropdown-menu-link" href="https://devs.keenthemes.com">
                                        <i class="ki-filled ki-message-programming">
                                        </i>
                                        Dev Forum
                                    </a>
                                </li>
                                <li data-kt-dropdown="true" data-kt-dropdown-placement="right-start"
                                    data-kt-dropdown-trigger="hover">
                                    <button class="kt-dropdown-menu-toggle py-1" data-kt-dropdown-toggle="true">
                                        <span class="flex items-center gap-2">
                                            <i class="ki-filled ki-icon">
                                            </i>
                                            Language
                                        </span>
                                        <span class="ms-auto kt-badge kt-badge-stroke shrink-0">
                                            English
                                            <img alt="" class="inline-block size-3.5 rounded-full"
                                                src="/storage/assets/media/flags/united-states.svg" />
                                        </span>
                                    </button>
                                    <div class="kt-dropdown-menu w-[180px]" data-kt-dropdown-menu="true">
                                        <ul class="kt-dropdown-menu-sub">
                                            <li class="active">
                                                <a class="kt-dropdown-menu-link" href="?dir=ltr">
                                                    <span class="flex items-center gap-2">
                                                        <img alt="" class="inline-block size-4 rounded-full"
                                                            src="/storage/assets/media/flags/united-states.svg" />
                                                        <span class="kt-menu-title">
                                                            English
                                                        </span>
                                                    </span>
                                                    <i
                                                        class="ki-solid ki-check-circle ms-auto text-green-500 text-base">
                                                    </i>
                                                </a>
                                            </li>
                                            <li class="">
                                                <a class="kt-dropdown-menu-link" href="?dir=rtl">
                                                    <span class="flex items-center gap-2">
                                                        <img alt="" class="inline-block size-4 rounded-full"
                                                            src="/storage/assets/media/flags/saudi-arabia.svg" />
                                                        <span class="kt-menu-title">
                                                            Arabic(Saudi)
                                                        </span>
                                                    </span>
                                                </a>
                                            </li>
                                            <li class="">
                                                <a class="kt-dropdown-menu-link" href="?dir=ltr">
                                                    <span class="flex items-center gap-2">
                                                        <img alt="" class="inline-block size-4 rounded-full"
                                                            src="/storage/assets/media/flags/spain.svg" />
                                                        <span class="kt-menu-title">
                                                            Spanish
                                                        </span>
                                                    </span>
                                                </a>
                                            </li>
                                            <li class="">
                                                <a class="kt-dropdown-menu-link" href="?dir=ltr">
                                                    <span class="flex items-center gap-2">
                                                        <img alt="" class="inline-block size-4 rounded-full"
                                                            src="/storage/assets/media/flags/germany.svg" />
                                                        <span class="kt-menu-title">
                                                            German
                                                        </span>
                                                    </span>
                                                </a>
                                            </li>
                                            <li class="">
                                                <a class="kt-dropdown-menu-link" href="?dir=ltr">
                                                    <span class="flex items-center gap-2">
                                                        <img alt="" class="inline-block size-4 rounded-full"
                                                            src="/storage/assets/media/flags/japan.svg" />
                                                        <span class="kt-menu-title">
                                                            Japanese
                                                        </span>
                                                    </span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <div class="kt-dropdown-menu-separator">
                                    </div>
                                </li>
                            </ul>
                            <div class="px-2.5 pt-1.5 mb-2.5 flex flex-col gap-3.5">
                                <div class="flex items-center gap-2 justify-between">
                                    <span class="flex items-center gap-2">
                                        <i class="ki-filled ki-moon text-base text-muted-foreground">
                                        </i>
                                        <span class="font-medium text-2sm">
                                            Dark Mode
                                        </span>
                                    </span>
                                    <input class="kt-switch" data-kt-theme-switch-state="dark"
                                        data-kt-theme-switch-toggle="true" name="check" type="checkbox" value="1" />
                                </div>
                                <button class="kt-btn kt-btn-outline justify-center w-full"
                                    @click="logout()">
                                    Log out
                            </button>
                            </div>
                        </div>
                    </div>
                    <!-- End of User -->
                </div>
            </div>
</template>
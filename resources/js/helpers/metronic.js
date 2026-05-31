export function initMetronic(root = document) {
  if (typeof window === 'undefined') {
    return
  }

  // Ensure KT theme components are initialized on the current page
  if (window.KTComponents && typeof window.KTComponents.init === 'function') {
    window.KTComponents.init()
  }

  if (window.KTDropdown && typeof window.KTDropdown.init === 'function') {
    window.KTDropdown.init()
  }

  // Some components may require menu initialization separately
  if (window.KTMenu && typeof window.KTMenu.init === 'function') {
    window.KTMenu.init()
  }

  // ktdrawer may also need to be initialized if used
  if (window.KTDrawer && typeof window.KTDrawer.init === 'function') {
    window.KTDrawer.init()
  }

  // KTDom may also need to be initialized if used
  if (window.KTDom && typeof window.KTDom.init === 'function') {
    window.KTDom.init()
  }

  // KTGlobalComponentsConfig may also need to be initialized if used
  if (window.KTGlobalComponentsConfig && typeof window.KTGlobalComponentsConfig.init === 'function') {
    window.KTGlobalComponentsConfig.init()
  }

  // ktdata may also need to be initialized if used
  if (window.KTData && typeof window.KTData.init === 'function') {
    window.KTData.init()
  }

  // KTEventHandler may also need to be initialized if used
  if (window.KTEventHandler && typeof window.KTEventHandler.init === 'function') {
    window.KTEventHandler.init()
  }

  //ktscrollable may also need to be initialized if used
  if (window.KTScrollable && typeof window.KTScrollable.init === 'function') {
    window.KTScrollable.init()
  }

  // KTUtil may also need to be initialized if used
  if (window.KTUtil && typeof window.KTUtil.init === 'function') {
    window.KTUtil.init()
  }

  // KTCollapse may also need to be initialized if used
  if (window.KTCollapse && typeof window.KTCollapse.init === 'function') {
    window.KTCollapse.init()
  }

  // kttoggle may also need to be initialized if used
  if (window.KTToggle && typeof window.KTToggle.init === 'function') {
    window.KTToggle.init()
  }

  // KTScrolltop may also need to be initialized if used
  if (window.KTScrolltop && typeof window.KTScrolltop.init === 'function') {
    window.KTScrolltop.init()
  }

  // KTReparent may also need to be initialized if used
  if (window.KTReparent && typeof window.KTReparent.init === 'function') {
    window.KTReparent.init()
  }

  // KTTogglePassword may also need to be initialized if used
  if (window.KTTogglePassword && typeof window.KTTogglePassword.init === 'function') {
    window.KTTogglePassword.init()
  }

  // KTModal may also need to be initialized if used
  if (window.KTModal && typeof window.KTModal.init === 'function') {
    window.KTModal.init()
  }

  // KTTabs may also need to be initialized if used
  if (window.KTTabs && typeof window.KTTabs.init === 'function') {
    window.KTTabs.init()
  }

  // data-kt-datatable may also need to be initialized if used
  if (window.KTDatatable && typeof window.KTDatatable.init === 'function') {
    window.KTDatatable.init()
  }

  // data-kt-datatable-table may also need to be initialized if used
  if (window.KTDatatableTable && typeof window.KTDatatableTable.init === 'function') {
    window.KTDatatableTable.init()
  }
  
}

<!DOCTYPE html>
<html class="h-full" data-kt-theme="true" data-kt-theme-mode="light" dir="ltr" lang="en">

<head>
  <title>BusinessOS</title>
  <link rel="stylesheet" href="/theme/assets/vendors/apexcharts/apexcharts.css">
  <link rel="stylesheet" href="/theme/assets/vendors/keenicons/styles.bundle.css">
  <link rel="stylesheet" href="/theme/assets/css/styles.css">
  @vite('resources/js/app.js')
  <script src="/theme/assets/js/core.bundle.js"></script>
  <script src="/theme/assets/vendors/ktui/ktui.min.js"></script>
  <script src="/theme/assets/vendors/apexcharts/apexcharts.min.js"></script>
  <script src="/theme/assets/js/widgets/general.js"></script>
</head>

<body class="antialiased h-full text-base text-foreground bg-background">
  <!-- Theme Mode -->
  <script>
    const defaultThemeMode = 'light'; // light|dark|system
    let themeMode;

    if (document.documentElement) {
      if (localStorage.getItem('kt-theme')) {
        themeMode = localStorage.getItem('kt-theme');
      } else if (document.documentElement.hasAttribute('data-kt-theme-mode')) {
        themeMode =document.documentElement.getAttribute('data-kt-theme-mode');
      } else {
        themeMode = defaultThemeMode;
      }
      if (themeMode === 'system') {
        themeMode = window.matchMedia('(prefers-color-scheme: dark)').matches ?'dark' :'light';
      }
      document.documentElement.classList.add(themeMode);
    }
  </script>
  <!-- Theme Mode -->

  <!-- End of Theme Mode -->

  <div id="app" class="h-full"></div>
  
</body>

</html>
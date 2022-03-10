self.addEventListener('install', function(event) {
  // Perform some task
  console.log('install')
  self.addEventListener('install', function(e) {
    e.waitUntil(
      caches.open('validate-me').then(function(cache) {
        return cache.addAll([
          './',
        ]);
      })
    );
  });

  self.addEventListener('offline', function(e) {
    console.log('offline')
  })
});

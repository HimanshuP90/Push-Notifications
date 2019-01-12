console.log('Service Worker loaded');

self.addEventListener('push', e => {
    const data = e.data.json();
    console.log('Push Received...');
    self.registration.showNotification(data.title, {
        body: 'Hey I am himanshu',
        icon: 'https://media.licdn.com/dms/image/C4E03AQFY_p-1imTa-w/profile-displayphoto-shrink_200_200/0?e=1550707200&v=beta&t=53bpdhZgjBAk4MBquqfUcsXsLM4J-U4L_GEkT0s4Qew'
    });
});
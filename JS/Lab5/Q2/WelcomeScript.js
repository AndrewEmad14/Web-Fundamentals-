var  params = new URLSearchParams(location.search);

var  username = params.get('name');
var  title = params.get('title');
var  address = params.get('address');
var  email = params.get('email');
var  mobile = params.get('mobile');

document.getElementById('header').textContent = 'Welcome: ' + username + ' - ' + title;
document.getElementById('address').textContent = 'address: ' + address;
document.getElementById('email').textContent = 'email: ' + email;
document.getElementById('mobile').textContent = 'mobile: ' + mobile;
const url = localStorage.getItem('url');
const div = document.querySelector('.hidden');
const divs = document.querySelector('.hiddentwo');


function getQueryStringValue(key) {
  return decodeURIComponent(window.location.search.replace(new RegExp(`^(?:.*[&\\?]${encodeURIComponent(key).replace(/[\.\+\*]/g, '\\$&')}(?:\\=([^&]*))?)?.*$`, 'i'), '$1'));
}
const code = getQueryStringValue('code');

div.innerHTML = `<input type="hidden" name="urlyoutube" value="${url}">`;
window.onload = function () {
  const button = document.querySelector('.clickButton');
  const url = localStorage.getItem('url');
  const div = document.querySelector('.hidden');
  div.innerHTML = `<input type="hidden" name="urlyoutube" value="${url}">`;
  divs.innerHTML = `<input type="hiddentwo" name="spotifycode" value="${code}">`;
  localStorage.clear();
  button.form.submit();
};

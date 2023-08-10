export function shareOnFacebook() {
    var url = encodeURIComponent(window.location.href);
    window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank');
  }
  
  export function shareOnTwitter() {
    var url = encodeURIComponent(window.location.href);
    var text = encodeURIComponent('Check out this awesome page!');
    window.open('https://twitter.com/intent/tweet?url=' + url + '&text=' + text, '_blank');
  }
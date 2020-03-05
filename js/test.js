$(function() {
  $('.tab').on('click', function() {
    $this = $(this);
    // Update the tabs
    $('.tab.current').removeClass('current').attr('aria-selected', false);
    $this.addClass('current').attr('aria-selected', true);
    
    // Update the tab panel
    _changeTabPanel($this.attr('aria-controls'));
  });
});

let _changeTabPanel = panelName => {
  $('.panel.current').removeClass('current').addClass('hidden').attr('aria-hidden', true);
  $('#' + panelName).addClass('current').removeClass('hidden').attr('aria-hidden', false);
}

const counter = document.getElementById("counter");

const updateCounter = async () =>{
  const data = await fetch('https://api.countapi.xyz/hit/quentinlevx-test/visits');
  const count = await data.json();
  counter.innerHTML = "Vous êtes le "+count.value+" ème visiteur !";
  counter.style.filter = 'blur(0)';
};

updateCounter();


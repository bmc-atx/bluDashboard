// JS for Dataport site
$('.dropdownContainer').hide();
$('.dropdownContainer-grid').hide();

// sticky scroll
$(window).on('scroll', function () {
  var distanceScrolled = $(window).scrollTop();
  console.log('The distance scrolled is: ' + distanceScrolled);
  if (distanceScrolled > 80) {
    $('header').addClass('scrollBorder');
  } else {
    $('header').removeClass('scrollBorder');
  }
});


// dropdown container
$('.selectBox').on('click', function() {
  $('.dropdownContainer').slideToggle(300);
  $('.arrowTouchZone').toggleClass('turnArrow');
  $('.dropdown').toggleClass('dropdownOpen');
});
$('main').on('click', function() {
  $('.dropdownContainer').slideUp(300);
  $('.arrowTouchZone').removeClass('turnArrow');
  $('dropdown').removeClass('dropdownOpen');
});
$('.buffer').on('click', function() {
  $('.dropdownContainer').slideUp(300);
  $('.arrowTouchZone').removeClass('turnArrow');
  $('dropdown').removeClass('dropdownOpen');
});
$('.row2').on('click', function() {
  $('.dropdownContainer').slideUp(300);
  $('.arrowTouchZone').removeClass('turnArrow');
  $('dropdown').removeClass('dropdownOpen');
});
// dropdown container-grid
$('.signInButton').on('click', function() {
  $('.dropdownContainer-grid').slideToggle(300);
});

$('main').on('click', function() {
  $('.dropdownContainer-grid').slideUp(300);
});

// refresh button
var refreshAngle =0;
$('#refreshButton').on('click', function() {
  refreshAngle += 360;
  $('.refreshTouchZone').css({'transform': 'rotate(' + refreshAngle + 'deg)'});
});

// checkbox
$('.img-swap').on('click', function(){
  if ($(this).attr("class") == "img-swap") {
    this.src = this.src.replace("_off","_on");
  } else {
    this.src = this.src.replace("_on","_off");
  }
  $(this).toggleClass("on");
  $('#liveContainer').slideToggle(350);
  $('#lastUpdated').toggle();
  $('div.pageBar').toggleClass('scrollBorder');
});

// subreport tabs to show
$('div .orangeHeaderTab').on('click', function () {
  $('div .orangeHeaderTab').removeClass('opacityTabActive');
  $(this).addClass('opacityTabActive');
  // $('.subreportDisplay').hide();
  // var sectionToShow = $(this).attr('data-related-panel');
  // $('#' + sectionToShow).show();
});


// subreport tab selection
$('#liveReport2-2-1 a').on('click', function() {
  $('#liveReport2-2-1 a').removeClass('tabBoxActive');
  $(this).addClass('tabBoxActive');
});

// report level 1 tab
$('#liveReport2-1-1 a').on('click', function () {
  $('#liveReport2-1-1 a').removeClass('orangeTabActive');
  $(this).addClass('orangeTabActive');
  $('.subPanel-1').removeClass('subPanel-1-active');
  var sectionToShow = $(this).attr('data-related-panel');
  $('#' + sectionToShow).addClass('subPanel-1-active');
  $('#liveReport2-2-1 a').removeClass('tabBoxActive');
  $('#liveReport2-2-1 .subPanel-1-active li:first a.subreportTabBox').addClass('tabBoxActive');
});

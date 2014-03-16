requirejs.config({
  baseUrl: '../bower_components',
  paths: {
    main: '../src/main',
    nunjucks: 'nunjucks/browser/nunjucks',
    templates: '../templates',
    jquery: 'jquery/jquery',
    moment: 'momentjs/moment'
  }
});

require([
  'jquery',
  'templates',
  'nunjucks',
  'moment'

], function (
  $,
  templates,
  nunjucks,
  moment
) {

  var $message = $('h1');
  var $time = $('.time');
  var now = moment();

  var startOfDay = moment().hour(8).minute(0);
  var endOfDay = moment().hour(5 + 12).minute(0);

  function getMessage() {
    var diff;
    if (now.day() === 0 || now.day() === 6) {
      return 'No. It\'s the weekend. Go home.';
    }

    if (now.isBefore(startOfDay)) {
      diff = startOfDay.subtract(moment()).hours();
      if (diff <= 1) {
        return 'Shouldn\'t you be eating breakfast?';
      } else {
        return 'Wtf why are you up this early...';
      }
    } else if (now.isAfter(endOfDay)) {
      diff = moment().subtract(endOfDay).hours();
      if (diff <= 1) {
        return 'Time to start thinking about packing up.';
      }
      else if (diff > 1 && diff <= 3) {
        return 'No. It\'s late. Go home.';
      }
      else {
        return 'Are you insane? Go home!!!!!!';
      }
    } else {
      return 'Yes, yes... you should.';
    }

  }

  $message.html(getMessage());
  $time.html(now.format('h:mm a [on a] dddd'));

});

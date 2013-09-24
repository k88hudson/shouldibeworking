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
  var endOfDay = moment().hour(7 + 12).minute(0);

  function getMessage() {
    var diff;
    if (now.isBefore(startOfDay)) {
      diff = startOfDay.subtract(moment()).hours();
      if (diff <= 1) {
        return 'Shouldn\'t you be eating breakfast?';
      } else {
        return 'Wtf why are you up this early...';
      }
    }
    else if (now.isAfter(endOfDay)) {
      diff = moment().subtract(endOfDay).hours();
      if (diff <= 1) {
        return 'No. It\'s late. Go home.';
      } else {
        return 'Are you insane? Go home.';
      }
    }
    else {
      return 'Yes, yes... you should.';
    }

  }

  $message.html(getMessage());
  $time.html(now.format('MMMM Do YYYY, h:mm a'));

  // console.log(nunjucks.env.render('src/index.html'));
});

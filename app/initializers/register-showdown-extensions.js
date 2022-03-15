import showdown from 'showdown';
import showdownHighlight from 'showdown-highlight';

export function initialize(/* application */) {
  showdown.setFlavor('github');
  // showdown.extension("highlight", function(){
  //   return showdownHighlight({
  //     pre: true
  // })
  // })
}

export default {
  name: 'register-showdown-extensions',
  initialize,
};

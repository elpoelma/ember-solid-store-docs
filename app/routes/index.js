import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
  async model({ md_path }) {
    console.log(md_path);
    let response = await fetch('/pages/' + md_path + '.md');
    let text = await response.text();
    return text;
  }
}

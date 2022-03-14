import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
    async model() {
        let response = await fetch(`/pages/index.md`);

        let text = await response.text();
        return text;
    }
}

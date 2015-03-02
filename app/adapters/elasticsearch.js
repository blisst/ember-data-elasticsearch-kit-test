import DS from "ember-data";

export default DS.ElasticSearchAdapter.extend({
   	host: 'http://localhost:9200',
});
# Edekt

Ember-CLI test app for ember-data-elasticsearch-kit.

model/elasticsearch.js tries to make the query "http://localhost:9200/_search?user=kimchy", and returns a 400 bad request.

The responseText is: 

"{"error":"SearchPhaseExecutionException[Failed to execute phase [query], all shards failed; shardFailures {[sXDKF9BAQ6mUnw_4HUxv4Q][test][0]: SearchParseException[[test][0]: from[-1],size[-1]: Parse Failure [Failed to parse source [{\"user\":\"kimchy\"}]]]; nested: SearchParseException[[test][0]: from[-1],size[-1]: Parse Failure [No parser for element [user]]]; }{[sXDKF9BAQ6mUnw_4HUxv4Q][test][1]: SearchParseException[[test][1]: from[-1],size[-1]: Parse Failure [Failed to parse source [{\"user\":\"kimchy\"}]]]; nested: SearchParseException[[test][1]: from[-1],size[-1]: Parse Failure [No parser for element [user]]]; }{[sXDKF9BAQ6mUnw_4HUxv4Q][test][2]: SearchParseException[[test][2]: from[-1],size[-1]: Parse Failure [Failed to parse source [{\"user\":\"kimchy\"}]]]; nested: SearchParseException[[test][2]: from[-1],size[-1]: Parse Failure [No parser for element [user]]]; }{[sXDKF9BAQ6mUnw_4HUxv4Q][test][3]: SearchParseException[[test][3]: from[-1],size[-1]: Parse Failure [Failed to parse source [{\"user\":\"kimchy\"}]]]; nested: SearchParseException[[test][3]: from[-1],size[-1]: Parse Failure [No parser for element [user]]]; }{[sXDKF9BAQ6mUnw_4HUxv4Q][test][4]: SearchParseException[[test][4]: from[-1],size[-1]: Parse Failure [Failed to parse source [{\"user\":\"kimchy\"}]]]; nested: SearchParseException[[test][4]: from[-1],size[-1]: Parse Failure [No parser for element [user]]]; }]","status":400}"







## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://www.ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)


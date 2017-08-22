import _ from 'lodash';
export default class RestUrl {
    constructor(uri, replaceType = 'quote') {
        this.uri = uri;
        this.replaceType = replaceType;
    }
    getUri() {
        return this.uri
    }
    setUri(uri) {
        this.uri = uri;
    }
    parseReplacePattern(key) {
        switch (this.replaceType) {
            case 'hash':
                return ':'+key;
            case 'quote':
                return '{'+key+'}';
            default:
                return '{'+key+'}';
        }
    }
    parseUrl(objects) {
        var url = this.uri;

        if(_.isArray(objects)) {
            _.each(objects, function (object) {
                _.each(object, function (value, key) {
                    url = _.replace(url, this.parseReplacePattern(key), value);
                }.bind(this));
            }.bind(this));

            return url;
        }

        _.each(objects, function (value, key) {
            url = _.replace(url, this.parseReplacePattern(key), value);
        }.bind(this));

        return url;
    }
}
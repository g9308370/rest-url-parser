import RestUrl from '../src/RestUrlParser.js';

describe('RestUrl Init and Getter Setter', function() {
    it('can be init', function() {
        let rest_url_parser = new RestUrl('http://www.mydomain.com');
        expect(rest_url_parser).toBeDefined();
    });

    it('can get full uri', function() {
        let rest_url_parser = new RestUrl('http://www.mydomain.com/{id}');
        expect(rest_url_parser.getUri()).toEqual('http://www.mydomain.com/{id}');
    });

    it('can set full uri', function() {
        let rest_url_parser = new RestUrl('http://www.mydomain.com/{id}');
        rest_url_parser.setUri('http://www.testdomain.com/{id}');
        expect(rest_url_parser.getUri()).toEqual('http://www.testdomain.com/{id}');
    });
});

describe('RestUrl params parser', function() {

    it('can parse by default pattern', function() {
        let rest_url_parser = new RestUrl('http://www.mydomain.com/users/{id}/edit');
        let user = { id:99, name:'tester' };
        expect(rest_url_parser.parseUrl(user)).toBeDefined('http://www.mydomain.com/users/99/edit');
    });

    it('can parse by hash pattern', function() {
        let rest_url_parser = new RestUrl('http://www.mydomain.com/users/:id/edit', 'hash');
        let user = { id:99, name:'tester' };
        expect(rest_url_parser.parseUrl(user)).toBeDefined('http://www.mydomain.com/users/99/edit');
    });

    it('can parse multiple params', function() {
        let rest_url_parser = new RestUrl('http://www.mydomain.com/users/:user_id/posts/:post_id/comments/:comment_id/show', 'hash');
        let user = { user_id:99, name:'tester'};
        let post = { post_id:19, name:'test post'};
        let comment = { comment_id:29, name:'test comment'};

        expect(rest_url_parser.parseUrl([user, post, comment])).toBeDefined('http://www.mydomain.com/users/99/posts/19/comments/29/show');
    });
});
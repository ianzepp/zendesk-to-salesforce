import _ from 'lodash';
import axios from 'axios';
import assert from 'assert';

export class ZendeskImport {
    get zendesk_subdomain() {
        assert(process.env.npm_config_zendesk_subdomain, 'zendesk_subdomain');
        return process.env.npm_config_zendesk_subdomain;
    }

    get zendesk_user() {
        assert(process.env.npm_config_zendesk_user, 'zendesk_user');
        return process.env.npm_config_zendesk_user;
    }

    get zendesk_pass() {
        assert(process.env.npm_config_zendesk_pass, 'zendesk_pass');
        return process.env.npm_config_zendesk_pass;
    }

    async run() {
        let type = 'tickets/131409/comments';
        let href = `https://${this.zendesk_subdomain}.zendesk.com/api/v2/${type}.json`;
        let recv;

        try {
            recv = await axios.get(href, {
               auth: {
                   username: this.zendesk_user,
                   password: this.zendesk_pass,
               }
           });
        }

        catch (error) {
            console.warn('error', error);
        }

        if (typeof recv === 'object') {
            console.warn('data:', recv.data);
        }
    }
}

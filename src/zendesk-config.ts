import _ from 'lodash';
import assert from 'assert';

// Sanity check config values
assert(process.env.npm_config_zendesk_pass, 'zendesk_pass');
assert(process.env.npm_config_zendesk_subdomain, 'zendesk_subdomain');
assert(process.env.npm_config_zendesk_user, 'zendesk_user');

export const ZendeskConfig = {
    subdomain: process.env.npm_config_zendesk_subdomain,
    user: process.env.npm_config_zendesk_user,
    password: process.env.npm_config_zendesk_pass,
}

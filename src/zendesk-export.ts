import _ from 'lodash';
import axios from 'axios';

import { Zendesk } from './zendesk';
import { ZendeskConfig } from './zendesk-config';

export interface ZendeskApiResponse {
    // Optionals
    tickets?: Zendesk.Ticket[];
    comments?: Zendesk.TicketComment[];

    // Always present
    next_page: string | null,
    previous_page: string | null,
    count: number,
}

export class ZendeskExport {
    readonly ZENDESK_BASE = `https://${ZendeskConfig.subdomain}.zendesk.com/api/v2/`;
    readonly ZENDESK_AUTH = {
        auth: {
            username: ZendeskConfig.user,
            password: ZendeskConfig.password,
        }
    };

    async selectRaw(path: string) {
        console.warn('-- GET', path);
        return _.get(await axios.get(path, this.ZENDESK_AUTH), 'data') as ZendeskApiResponse;
    }

    async selectAny(path: string) {
        return this.selectRaw(this.ZENDESK_BASE + path);
    }
}

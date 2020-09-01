import fs from 'fs-extra';

import { Zendesk } from './zendesk';
import { ZendeskExport } from './zendesk-export';

export class ZendeskExportTickets extends ZendeskExport {
    async exportAll() {
        // Run log dir should exist
        await fs.emptyDir('tmp/zendesk/tickets');

        // Run through pages
        for(let page = 1;; page++) {
            let resp = await this.selectAny(`tickets?include=comment_count&page=${page}`);
            let data = resp.tickets as Zendesk.Ticket[];

            // Save page worth of data
            for(let ticket of data) {
                await fs.writeJson(`tmp/zendesk/tickets/${ticket.id}.json`, ticket, {
                    spaces: 4
                });
            }

            if (resp.next_page === null) {
                break;
            }
        }
    }
}

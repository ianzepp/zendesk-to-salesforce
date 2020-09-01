import fs from 'fs-extra';
import klaw from 'klaw-sync';

import { Zendesk } from './zendesk';
import { ZendeskExport } from './zendesk-export';

export class ZendeskExportComments extends ZendeskExport {
    async exportAll() {
        // Run log dir should exist
        await fs.emptyDir('tmp/zendesk/ticket-comments');

        // Read all ticket filenames
        let ticket_paths = klaw('tmp/zendesk/tickets');

        // Load stored ticket data
        for(let ticket_path of ticket_paths) {
            let ticket = await fs.readJson(ticket_path.path) as Zendesk.Ticket;

            if (ticket.comment_count === null || ticket.comment_count === undefined) {
                return;
            }

            if (ticket.comment_count === 0) {
                return;
            }

            let resp = await this.selectAny(`tickets/${ticket.id}/comments?sort_order=desc&include_inline_images=true&include=users`);
            let data = resp.comments as Zendesk.TicketComment[];

            // Save JSON
            for(let comment of data) {
                await fs.writeJson(`tmp/zendesk/ticket-comments/${comment.id}.json`, comment, {
                    spaces: 4
                });
            }

            // Done
        }
    }
}

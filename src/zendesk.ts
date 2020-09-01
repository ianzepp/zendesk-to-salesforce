
export namespace Zendesk {
    export type Timestamp = string;

    //
    // Top-level ticket type
    //
    // GET /api/v2/tickets.json?per_page=100
    // GET /api/v2/tickets.json?per_page=100&page=2
    //

    export interface Ticket {
        readonly allow_attachments: boolean,
        readonly allow_channelback: boolean,
        readonly assignee_id: number,
        readonly brand_id: number,
        readonly collaborator_ids: number[],
        readonly comment_count: number | null;
        readonly created_at: Timestamp,
        readonly custom_fields: TicketCustomField[],
        readonly description: string,
        readonly due_at: Timestamp | null,
        readonly email_cc_ids: number[],
        readonly external_id: string | null,
        readonly fields: TicketCustomField[],
        readonly follower_ids: number[],
        readonly followup_ids: number[],
        readonly forum_topic_id: number | null,
        readonly group_id: number,
        readonly has_incidents: boolean,
        readonly id: number,
        readonly is_public: boolean,
        readonly organization_id: number,
        readonly priority: 'urgent' | 'high' | 'normal' | 'low',
        readonly problem_id: number | null,
        readonly raw_subject: string,
        readonly recipient: string | null,
        readonly requestor_id: number,
        readonly satisfaction_rating: TicketSatisfactionRating,
        readonly sharing_agreement_ids: number[],
        readonly status: 'new' | 'open' | 'pending' | 'hold' | 'solved' | 'closed',
        readonly subject: string,
        readonly submitter_id: number,
        readonly tags: string[],
        readonly ticket_form_id: number,
        readonly type: 'problem' | 'incident' | 'question' | 'task',
        readonly updated_at: Timestamp,
        readonly url: string,
    }

    export interface TicketSatisfactionRating {
        readonly score: number | 'offered' | 'unoffered'
    }

    export interface TicketCustomField {
        readonly id: number,
        readonly value: any,
    }

    //
    // Ticket comments:
    //
    // GET https://{subdomain}.zendesk.com/api/v2/tickets/{id}/comments.json
    //

    export interface TicketComment {
        readonly id: number;
        readonly type: 'Comment';
        readonly author_id: number;
        readonly body: string;
        readonly html_body: string;
        readonly plain_body: string;
        readonly public: boolean;
        readonly audit_id: number;
        readonly created_at: Timestamp;

        // Objects
        readonly via: unknown;
        readonly metadata: unknown;

        // Relationships
        readonly attachments: any[] | undefined;
    }

    //
    // Ticket incidents:
    //
    // GET https://{subdomain}.zendesk.com/api/v2/tickets/{id}/incidents.json
    //

    export interface TicketIncident {

    }
}

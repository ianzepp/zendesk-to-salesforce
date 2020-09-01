#!/bin/sh

# Remove the entire cached directory
rm -rf ./tmp/zendesk

# Export tickets
npm run export-tickets

# Export comments
npm run export-comments

# Export attachments
npm run export-attachments

# Export user references
npm run export-users

# zendesk-to-salesforce
Node utility to import tickets from Zendesk and export them as Cases in Salesforce

## Basic Instructions

```
# Install packages
npm install

# Set environment variables
npm config set zendesk_subdomain <subdomain>
npm config set zendesk_user <username>/token
npm config set zendesk_pass <apitoken>

# Run
npm run start
```

*NOTE*: The initial implementation is incomplete, but the instructions above should still hold true.

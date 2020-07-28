// Classes
import { ZendeskImport } from './zendesk-import';

// Implementation
async function run() {
    try {
        return new ZendeskImport().run();
    }

    catch (error) {
        console.error('Execution error:');
        console.error(error);
    }
}

// Execute
run();

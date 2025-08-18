import { NeuroClient } from 'neuro-game-sdk';

const client = new NeuroClient('ws://host.docker.internal:8000', 'Docker Container', () => {
    client.onClose = (event) => {
        console.log(event);
    };

    client.onError = (erm) => {
        console.log(erm);
    };

    // Continue coding here...
});

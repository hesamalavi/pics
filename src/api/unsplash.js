import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID QRUimzSAIufmWwHWUIpMA9hVvW1ltKbPHUBCdFO1tfw',
    },
});

import {v2 as cloudinary} from 'cloudinary';
import { ENV } from './env';

cloudinary.config({
    cloud_name: ENV.CLOUDFINARY_CLOUD_NAME,
    api_key: ENV.CLOUDFINARY_API_KEY,
    api_secret: ENV.CLOUDFINARY_API_SECRET,
});

export default cloudinary;
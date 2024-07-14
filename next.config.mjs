import { withNextVideo } from 'next-video/process';

const nextConfig = {};

nextConfig.images= {
    domains:[`picsum.photos`]
}

export default withNextVideo(nextConfig);
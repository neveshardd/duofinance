/** @type {import('next').NextConfig} */
const nextConfig = {
    onDemandEntries: {
        webpack: (config, { isServer }) =>{
            if(isServer) {
                const originalConsoleError = console.error
                console.error = (...args) => {
                    if(args[0] && typeof args[0] === 'string' && args[0].includes('CredentialsSignin')) {
                        return
                    }
                    originalConsoleError(...args)
                };
            }
            return config
        }
    }
};

export default nextConfig;

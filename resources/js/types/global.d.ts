import { AxiosInstance } from 'axios';
import ziggyRoute, { Config as ZiggyConfig } from 'ziggy-js';

declare global {
    interface Window {
        axios: AxiosInstance;
    }

    var route: typeof ziggyRoute;
    var Ziggy: ZiggyConfig;

    interface IconProps {
        className?: string;
    }

    type AboutValuesProps = {
        title: string,
        desc: string,
        icon: React.FC<React.SVGProps<SVGSVGElement>>
    }
}
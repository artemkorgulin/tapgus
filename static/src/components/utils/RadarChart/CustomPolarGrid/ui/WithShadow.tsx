import type { PropsWithChildren } from 'react';
import type { TComponent } from 'utils/types/elements';

type TWithShadowProps = PropsWithChildren<{
    isEnable?: boolean;
}>;

const Filter: TComponent<TWithShadowProps> = ({
    isEnable = false,
    children,
}) => (isEnable ? <g filter='url(#shadow)'>{children}</g> : <>{children}</>);

const FilterDefinition: TComponent = () => (
    <defs>
        <filter
            id='shadow'
            x='0'
            y='0'
            width='100%'
            height='100%'
            filterUnits='userSpaceOnUse'
            colorInterpolationFilters='sRGB'
        >
            <feFlood floodOpacity='0' result='BackgroundImageFix' />
            <feColorMatrix
                in='SourceAlpha'
                type='matrix'
                values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                result='hardAlpha'
            />
            <feOffset dy='4' />
            <feGaussianBlur stdDeviation='8' />
            <feComposite in2='hardAlpha' operator='out' />
            <feColorMatrix
                type='matrix'
                values='0 0 0 0 0.0980392 0 0 0 0 0.12549 0 0 0 0 0.152941 0 0 0 0.08 0'
            />
            <feBlend
                mode='normal'
                in2='BackgroundImageFix'
                result='effect1_dropShadow_1906_3600'
            />
            <feBlend
                mode='normal'
                in='SourceGraphic'
                in2='effect1_dropShadow_1906_3600'
                result='shape'
            />
        </filter>
    </defs>
);

export const WithShadow = {
    Filter,
    FilterDefinition,
};

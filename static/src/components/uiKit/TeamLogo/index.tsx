import type { TComponent } from 'utils/types/elements';

import teamLogoImage from 'assets/image/teamLogo.webp';

import { SuspenseImg } from 'components/utils/SuspenseImg';

type TeamLogoProps = {
    src?: string;
};

export const TeamLogo: TComponent<TeamLogoProps> = ({
    src = teamLogoImage,
}) => {
    return (
        <SuspenseImg
            className='h-24 w-24'
            alt='team logo'
            src={src}
            fallbackSrc={teamLogoImage}
        />
    );
};

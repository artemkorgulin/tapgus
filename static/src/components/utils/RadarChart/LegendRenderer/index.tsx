import { createPortal } from 'react-dom';
import type { ContentType } from 'recharts/types/component/DefaultLegendContent';

import { LegendListItem } from './LegendListItem';
import css from './style.module.scss';
import type { TLegendPayload } from './type';

export const createLegendRenderer =
    (portalTargetId: string): ContentType =>
    (props) => {
        const portalTargetElement = document.getElementById(portalTargetId);

        if (!portalTargetElement) {
            throw new Error(
                `В DOM отсутствует контейнер (id = ${portalTargetId}) для Legend!`,
            );
        }

        return createPortal(
            <div className={css.legend_list}>
                {props.payload?.map((entry, index) => (
                    <LegendListItem
                        key={`item-${index}`}
                        index={index}
                        onClick={props.onClick}
                        {...(entry as TLegendPayload)}
                    />
                ))}
            </div>,
            portalTargetElement,
        );
    };

import type { PropsWithChildren } from 'react';
import {useRef, useEffect, useState} from 'react';
import { useLoaderData } from 'react-router-dom';
import { ViewerDataContext } from 'utils/context/viewerData';
import type { TViewerData, TViewerDataLegacy } from 'utils/types/auth';
import type { TComponent } from 'utils/types/elements';
import css from './style.module.scss';
import logoGus from "../../assets/gus/guss.webp";
import {ENV_BASE_LEGACY_API_URL} from "../../app-env";
import {getAuth} from 'utils/helpers/auth';

export const LayoutMain: TComponent<PropsWithChildren> = ({ children }) => {
    const userData = useLoaderData() as TViewerData | TViewerDataLegacy;
    const textRef = useRef<null | any>(null);
    const [iUserPoints, setiUserPoints] = useState(0);

    if(String(getAuth()) == "undefined") {
        return (
            <ViewerDataContext.Provider value={userData}>
                <div className={css.main_layout}>
                    {children}
                </div>
            </ViewerDataContext.Provider>
        );
    } else {
        const tapGus = (tap: any) => {
            if (iUserPoints >= 0 && tap) {
                try {
                    let token = getAuth();
                    let UserPoints = iUserPoints+1;
                    fetch(
                        `${ENV_BASE_LEGACY_API_URL}/user/tapguss`,
                        {
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            method: 'POST',
                            body: JSON.stringify({token, UserPoints}),
                            mode: 'cors',
                        }).then((data :any) => {
                        if(data) {
                            setiUserPoints(UserPoints);
                        }
                    });
                    return true;
                } catch (e) {
                    console.error(e);
                    return false;
                }
            }
        };

        function handlerTap(event: any) {
            var elem = event.target;
            elem.setAttribute(event.type, 1);
            if (event.type === 'touchend' && !elem.getAttribute('touchmove')) {
                event.type = 'tap';
            } else if (elem.getAttribute('touchend')) {
                event.type = '';
            }
            tapGus(event.type);
        }

        useEffect(() => {
            if(textRef.current != null){
                if(textRef.current.textContent ==""){
                    textRef.current.textContent = 0;
                }
            }
        }, []);

        return (
            <ViewerDataContext.Provider value={userData}>
                <div className={css.main_layout}>
                    <div  className={css.wrapper_user}>
                        <div className={css.head_user}>
                            <h2> Welcome to Tap Guss! </h2>
                        </div>
                        <div className={css.pic_user}>
                            <img
                                onClick={(e) => handlerTap(e)}
                                onTouchStart={(e) => handlerTap(e)}
                                onTouchEnd={(e) => handlerTap(e)}
                                onTouchMove={(e) => handlerTap(e)}
                                src={logoGus}
                                alt='logoGus'
                                className='min-w-max'
                                width={320}
                                height={320}
                            />
                        </div>
                        <div className={css.points_user}>
                            <h2 className={"points-user-head"} id={"points-user-head"} ref={textRef}>{iUserPoints}</h2>
                        </div>
                    </div>
                </div>
            </ViewerDataContext.Provider>
        );
    }
};

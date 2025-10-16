import type { PropsWithChildren } from 'react';
import { ENV_COOLDOWN_DURATION, ENV_ROUND_DURATION } from 'app-env';
import {useRef, useEffect, useState} from 'react';
import { useLoaderData } from 'react-router-dom';
import { ViewerDataContext } from 'utils/context/viewerData';
import type { TViewerData, TViewerDataLegacy } from 'utils/types/auth';
import type { TComponent } from 'utils/types/elements';
import css from './style.module.scss';
import logoGus from "../../assets/gus/guss.webp";
import { ENV_BASE_LEGACY_API_URL } from "../../app-env";
import { getAuth } from 'utils/helpers/auth';
import CountdownTimer from 'components/common/Countdown/CountdownTimer';
import CountdownBeginTimer from 'components/common/Countdown/CountdownBeginTimer';
import {apiV2} from "../../api";
import {getSessionStorageOrDefault} from "../../utils/hooks/useSession";

export const LayoutMain: TComponent<PropsWithChildren> = ({ children }) => {
    const userData = useLoaderData() as TViewerData | TViewerDataLegacy;
    const textRef = useRef<null | any>(null);
    const [iUserPoints,setiUserPoints] = useState(0);
    const [iUserRound,setUserRound] = useState('');
    const userId = getSessionStorageOrDefault("userId","");
    const [isShown, setShown] = useState(false);
    const [isDisabled, setDisabled] = useState(true);
    const [isFinished, setFinished] = useState(false);

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
                    let UserSessId = getAuth();
                    let UserId = userId;
                    let UserPoints = iUserPoints+1;
                    let UserRound = iUserRound;
                    fetch(
                        `${ENV_BASE_LEGACY_API_URL}/game/tapguss`,
                        {
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            method: 'POST',
                            body: JSON.stringify({UserSessId, UserId, UserPoints, UserRound}),
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

            const roundsData = async () => {
                await apiV2.rounds
                    .listRounds()
                    .then((data: any) => {
                        for(let itemRound of data.data) {
                            if(itemRound.round_user == userId){
                                setUserRound(itemRound.id);
                            }
                        }
                    });
            };
            roundsData();
        }, []);

        function hiddenComplete() {
            setShown(true);
            setDisabled(false);
        }

        function hiddenPicRoundComplete() {
            setDisabled(true);
            setFinished(true);
        }

        return (
            <ViewerDataContext.Provider value={userData}>
                <div className={css.main_layout}>
                    <div  className={css.wrapper_user}>
                        <div className={css.head_user}>
                            <h2> Welcome to Tap Guss! </h2>
                        </div>
                        <div className={(isDisabled) ? css.pics_block_disabled : css.pics_block}>
                            <div className={css.pic_user}>
                                <img
                                    onClick={(e) => handlerTap(e)}
                                    onTouchStart={(e) => handlerTap(e)}
                                    onTouchEnd={(e) => handlerTap(e)}
                                    onTouchMove={(e) => handlerTap(e)}
                                    src={logoGus}
                                    alt='logoGus'
                                    className={(isDisabled) ? 'img_not_disabled' : 'img_not_disabled'}
                                    width={320}
                                    height={320}
                                />
                            </div>
                            <div className={css.pic_user_is_disabled}>
                                <img
                                    src={logoGus}
                                    alt='logoGus'
                                    className={(isDisabled) ? 'img_is_disabled' : 'img_is_disabled'}
                                    width={320}
                                    height={320}
                                />
                            </div>
                        </div>
                        <div className={css.points_user}>
                            <div className={css.points_user_my}>Мои очки:</div>
                            <h2 className={css.points_user_head} ref={textRef}>{iUserPoints}</h2>
                            {!isShown ? (
                                <CountdownTimer initialTime={ENV_COOLDOWN_DURATION} onComplete={hiddenComplete} />
                            ) : ("")}
                            {isShown && !isFinished ? (
                                <CountdownBeginTimer initialTime={ENV_ROUND_DURATION} onComplete={hiddenPicRoundComplete} />
                            ) : ("")}
                        </div>
                    </div>
                </div>
            </ViewerDataContext.Provider>
        );
    }
};

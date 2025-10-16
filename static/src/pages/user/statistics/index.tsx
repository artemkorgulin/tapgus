import { TComponent } from 'utils/types/elements';
import css from './style.module.scss';
import {useEffect, useState} from "react";
import {apiV2} from "api";
import {catchHandler} from "utils/helpers/api";
import {useParams} from "react-router-dom";
import logoGus from "../../../assets/gus/guss.webp";
import { statusMatrix } from "../constants";

const Statistics: TComponent = () => {

    const { roundId } = useParams<{ roundId: string }>();
    const [data, setData] = useState<any>(null);
    const [resErrorMessage, setResErrorMessage] = useState<string>('');

    useEffect(() => {
        const roundItemData = async () => {
            await apiV2.rounds
                .roundId({ roundId: String(roundId)})
                .then((data: any) => {
                    setData(data.data);
                })
                .catch(catchHandler(setResErrorMessage));
        };
        roundItemData();
    }, []);

    return (
        <div>
            <h2 className={css.title}>Раунд: {data?.roundData?.round_name}</h2>
            <div className={css.container_round_statistics}>
                <div className={css.header}>
                    <span className={css.sub_title}>{statusMatrix[data?.roundData?.round_status]}</span>
                    <span className={css.sub_title}>{statusMatrix[data?.roundData?.round_user]}</span>
                </div>
                <div className={css.list_rounds}>
                    {resErrorMessage ? "" : null}
                    <div className={css.pic_user}>
                        <img
                            src={logoGus}
                            alt='logoGus'
                            className={'pic_user'}
                            width={320}
                            height={320}
                        />
                    </div>
                    <div>Всего: {data?.allPoints}</div>
                    <div>Победитель - {data?.winer?.username}: {data?.winer?.points}</div>
                    <div>Мои очки: {data?.myPoints}</div>
                </div>
            </div>
        </div>
    );
};

export default Statistics;

import { TComponent } from 'utils/types/elements';
import {useNavigate} from "react-router";
import {useEffect, useState} from "react";
import {SubmitHandler, useForm, useFormState} from "react-hook-form";
import {TRoundAddReq} from "api/api.v2.types";
import {apiV2} from "api";
import {catchHandler} from "utils/helpers/api";
import {ButtonWithCorners} from "components/uiKit/ButtonWithCorners";
import {Spinner} from "components/uiKit/Spinner";
import css from './style.module.scss';
import { ROUTES } from 'utils/constants/routes';
import { getSessionStorageOrDefault } from 'utils/hooks/useSession';
import { getAuth } from 'utils/helpers/auth';

const Rounds: TComponent = () => {
    const navigate = useNavigate();
    const [resErrorMessage, setResErrorMessage] = useState<string>('');
    const [ListRoundsOut, setListRounds] = useState([]);
    const [CheckRole, setCheckRole] = useState(false);

    const { handleSubmit, control } = useForm<TRoundAddReq>();
    const { isSubmitting } = useFormState<TRoundAddReq>({ control });
    const userName = getSessionStorageOrDefault("userUserName","");

    useEffect(() => {
        const roundsData = async () => {
            await apiV2.rounds
                .listRounds()
                .then((data: any) => {
                    setListRounds(data.data);
                })
                .catch(catchHandler(setResErrorMessage));
        };
        const checkAdmin = async () => {
            await apiV2.user
                .checkRole({token: getAuth()})
                .then((data: any) => {
                    if(data.data.id) {
                        setCheckRole(true);
                    } else {
                        setCheckRole(false);
                    }
                })
                .catch(catchHandler(setResErrorMessage));
        };
        checkAdmin();
        roundsData();
    }, []);

    const onSubmit: SubmitHandler<TRoundAddReq> = async () => {
        navigate(ROUTES.VIEWER.GAMER_PAGE_ADDROUND);
    };

    if(CheckRole) {
        return (
            <div className='flex flex-col gap-2'>
                {resErrorMessage ? "" : null}
                <div className={css.header}>
                    <h2 className={css.title}>Список раундов:</h2>
                    <span className={css.title}>{userName}</span>
                </div>
                <form
                    className='flex flex-col gap-4'
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <ButtonWithCorners
                        type='submit'
                        rightElement={
                            <Spinner
                                size='xs'
                                variant='dots'
                                isHidden={!isSubmitting}
                            />
                        }
                        rightElementClassName='w-0'
                        disabled={isSubmitting}
                    >
                        Создать раунд
                    </ButtonWithCorners>
                </form>
                <br/>
                <div className={css.list_rounds}>
                    {ListRoundsOut.map((value) => (
                        <div className={css.list_rounds_item} id={value["id"]}>
                            Round-Id: <a href={"/user/round/"+value["id"]+"/"} target={"_blank"}>{value["id"]}</a> <br/>
                            Start: {value["round_begin_time"]} <br/>
                            End: {value["round_end_time"]} <br/>
                            <hr />
                            Статус: {value["round_status"]}
                        </div>
                    ))}
                </div>
            </div>
        );
    } else {
        return (
            <div className='flex flex-col gap-2'>
                {resErrorMessage ? "" : null}
                <div className={css.header}>
                    <h2 className={css.title}>Список раундов:</h2>
                    <span className={css.title}>{userName}</span>
                </div>
                <br/>
                <div className={css.list_rounds}>
                    {ListRoundsOut.map((value) => (
                        <div className={css.list_rounds_item} id={value["id"]}>
                            Round-Id: <a href={"/user/round/"+value["id"]+"/"} target={"_blank"}>{value["id"]}</a> <br/>
                            Start: {value["round_begin_time"]} <br/>
                            End: {value["round_end_time"]} <br/>
                            <hr />
                            Статус: {value["round_status"]}
                        </div>
                    ))}
                </div>
            </div>
        );
    }
};

export default Rounds;
